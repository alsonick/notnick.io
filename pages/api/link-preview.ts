import { LinkPreview } from "../../types/link-preview";
import { lookup } from "dns/promises";

import type { NextApiRequest, NextApiResponse } from "next";

/** How long a looked-up preview is reused before the site is asked again. */
const CACHE_TTL = 60 * 60 * 1000;

/** A failed look-up is remembered too, so a dead link isn't retried per view. */
const FAILURE_TTL = 5 * 60 * 1000;

/**
 * Everything worth reading sits in `<head>`, so the read stops there and the
 * body is never touched. The cap is only for sites that never close it — a
 * generous one, since a heavyweight page like YouTube's carries a good 700KB
 * of inline script ahead of its own Open Graph tags.
 */
const MAX_BYTES = 1024 * 1024;

const MAX_REDIRECTS = 3;
const TIMEOUT = 5000;

/** Sites hand an unidentified fetch a different page, or none at all. */
const USER_AGENT =
  "Mozilla/5.0 (compatible; notnick.io link preview; +https://notnick.io)";

const cache = new Map<
  string,
  { preview: LinkPreview | null; expires: number }
>();

/**
 * Builds the card behind a post's `[embed=true]` link out of the target site's
 * Open Graph tags. The look-up runs here rather than in the browser because a
 * page fetched cross-origin is unreadable from one, and rather than at build
 * time so a site that's slow or down costs a card instead of the build.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LinkPreview | { error: string }>,
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed." });
  }

  const url = typeof req.query.url === "string" ? req.query.url : null;
  if (!url || !isHttpUrl(url)) {
    return res.status(400).json({ error: "A http(s) url is required." });
  }

  const cached = cache.get(url);
  if (cached && cached.expires > Date.now()) {
    if (!cached.preview) {
      return res.status(404).json({ error: "No preview for that url." });
    }
    return res.status(200).json(cached.preview);
  }

  const preview = await getPreview(url);

  prune();
  cache.set(url, {
    preview,
    expires: Date.now() + (preview ? CACHE_TTL : FAILURE_TTL),
  });

  if (!preview) {
    return res.status(404).json({ error: "No preview for that url." });
  }

  // The card is the same for every reader, so let the CDN hold it as well.
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400",
  );

  return res.status(200).json(preview);
}

async function getPreview(url: string): Promise<LinkPreview | null> {
  const page = await fetchHtml(url);
  if (!page) return null;

  const head = page.html.split(/<\/head>/i)[0];
  const metadata = parseMetadata(head);

  const title =
    metadata["og:title"] ??
    metadata["twitter:title"] ??
    parseTitleTag(head) ??
    null;

  const description =
    metadata["og:description"] ??
    metadata["twitter:description"] ??
    metadata["description"] ??
    null;

  const image = metadata["og:image"] ?? metadata["twitter:image"] ?? null;

  // A card with nothing on it but the link is worse than the link itself.
  if (!title && !description && !image) return null;

  return {
    url: page.url,
    title,
    description,
    siteName: metadata["og:site_name"] ?? new URL(page.url).hostname,
    image: toAbsolute(image, page.url),
    favicon: toAbsolute(parseFavicon(head) ?? "/favicon.ico", page.url),
  };
}

/**
 * Follows the URL to the page that actually answers, checking every hop rather
 * than only the first: a redirect is as good a way into the private network
 * behind this server as the original URL would have been.
 */
async function fetchHtml(
  startUrl: string,
): Promise<{ url: string; html: string } | null> {
  let url = startUrl;

  for (let redirects = 0; redirects <= MAX_REDIRECTS; redirects++) {
    if (!isHttpUrl(url)) return null;
    if (!(await isPublicHost(new URL(url).hostname))) return null;

    let response: Response;

    try {
      response = await fetch(url, {
        redirect: "manual",
        signal: AbortSignal.timeout(TIMEOUT),
        headers: {
          "user-agent": USER_AGENT,
          accept: "text/html,application/xhtml+xml",
        },
      });
    } catch {
      return null;
    }

    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get("location");
      if (!location) return null;

      try {
        url = new URL(location, url).toString();
      } catch {
        return null;
      }

      continue;
    }

    if (!response.ok) return null;
    if (!(response.headers.get("content-type") ?? "").includes("html")) {
      return null;
    }

    return { url, html: await readCapped(response) };
  }

  return null;
}

/** Reads until `<head>` closes, or `MAX_BYTES`, whichever comes first. */
async function readCapped(response: Response): Promise<string> {
  const reader = response.body?.getReader();
  if (!reader) return "";

  const decoder = new TextDecoder();
  let html = "";
  let bytes = 0;

  try {
    while (bytes < MAX_BYTES) {
      const { done, value } = await reader.read();
      if (done) break;

      bytes += value.byteLength;
      html += decoder.decode(value, { stream: true });

      if (/<\/head>/i.test(html)) break;
    }
  } catch {
    // Whatever arrived before the read failed is still worth parsing.
  }

  reader.cancel().catch(() => {});

  return html;
}

/** Every `<meta>` in the head, keyed by its `property` or `name`. */
function parseMetadata(head: string): Record<string, string> {
  const metadata: Record<string, string> = {};

  for (const tag of head.match(/<meta\s[^>]*>/gi) ?? []) {
    const key = attribute(tag, "property") ?? attribute(tag, "name");
    const content = attribute(tag, "content");

    // First one wins, the way a browser reads a page with duplicate tags.
    if (key && content && !(key.toLowerCase() in metadata)) {
      metadata[key.toLowerCase()] = decodeEntities(content).trim();
    }
  }

  return metadata;
}

function parseTitleTag(head: string): string | null {
  const match = head.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return match ? decodeEntities(match[1]).trim() || null : null;
}

function parseFavicon(head: string): string | null {
  for (const tag of head.match(/<link\s[^>]*>/gi) ?? []) {
    const rel = (attribute(tag, "rel") ?? "").toLowerCase();
    if (!/\b(icon|shortcut icon|apple-touch-icon)\b/.test(rel)) continue;

    const href = attribute(tag, "href");
    if (href) return decodeEntities(href).trim();
  }

  return null;
}

/** One attribute off a tag, quoted with either quote or not at all. */
function attribute(tag: string, name: string): string | null {
  const match = tag.match(
    new RegExp(`\\b${name}\\s*=\\s*("([^"]*)"|'([^']*)'|([^\\s"'>]+))`, "i"),
  );

  if (!match) return null;
  return match[2] ?? match[3] ?? match[4] ?? null;
}

/** Sites name their image relative to themselves as often as not. */
function toAbsolute(value: string | null, base: string): string | null {
  if (!value) return null;

  try {
    const resolved = new URL(value, base);
    if (resolved.protocol !== "http:" && resolved.protocol !== "https:") {
      return null;
    }
    return resolved.toString();
  } catch {
    return null;
  }
}

function decodeEntities(value: string): string {
  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) =>
      String.fromCodePoint(parseInt(code, 16)),
    )
    .replace(/&quot;/gi, '"')
    .replace(/&apos;/gi, "'")
    .replace(/&nbsp;/gi, " ")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&amp;/gi, "&");
}

function isHttpUrl(value: string): boolean {
  try {
    const protocol = new URL(value).protocol;
    return protocol === "http:" || protocol === "https:";
  } catch {
    return false;
  }
}

/**
 * Keeps the fetch above pointed at the public internet. The endpoint takes a
 * url from the caller, so without this it would happily read anything this
 * server can reach that the caller cannot — link-local metadata endpoints and
 * whatever else is listening on localhost.
 */
async function isPublicHost(hostname: string): Promise<boolean> {
  try {
    const addresses = await lookup(hostname, { all: true });
    return (
      addresses.length > 0 &&
      addresses.every(({ address }) => !isPrivateAddress(address))
    );
  } catch {
    return false;
  }
}

function isPrivateAddress(address: string): boolean {
  const ip = address.replace(/^::ffff:/i, "").toLowerCase();

  if (/^\d+\.\d+\.\d+\.\d+$/.test(ip)) {
    const [a, b] = ip.split(".").map(Number);

    return (
      a === 0 ||
      a === 10 ||
      a === 127 ||
      (a === 169 && b === 254) ||
      (a === 172 && b >= 16 && b <= 31) ||
      (a === 192 && b === 168) ||
      (a === 100 && b >= 64 && b <= 127) ||
      a >= 224
    );
  }

  // Unspecified, loopback, unique-local (fc00::/7) and link-local (fe80::/10).
  return (
    ip === "::" || ip === "::1" || /^f[cd]/.test(ip) || /^fe[89ab]/.test(ip)
  );
}

/** The cache is per server instance, so it only has to stay a sane size. */
function prune() {
  if (cache.size < 200) return;

  const now = Date.now();
  cache.forEach((entry, key) => {
    if (entry.expires <= now) cache.delete(key);
  });

  // Still full of live entries, so drop the oldest to make room.
  if (cache.size >= 200) {
    cache.delete(cache.keys().next().value as string);
  }
}
