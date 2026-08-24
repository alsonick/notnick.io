import { visit } from "unist-util-visit";
import { Node, Parent } from "unist";

interface ParagraphNode extends Node {
  type: "paragraph";
  children: Array<Node>;
}

interface HtmlNode extends Node {
  type: "html";
  value: string;
}

/** A video, a playlist, or a video playing inside a playlist. */
interface VideoRef {
  id?: string;
  list?: string;
  start?: string;
}

/**
 * Turns a paragraph made up of a video URL followed by a `[preview=true]`
 * flag into a video embed placeholder, which `Post.tsx` swaps for the
 * `VideoEmbed` component.
 *
 *   https://www.youtube.com/watch?v=ntVii_EJc6s
 *   [preview=true]
 *
 * Playlist URLs work the same way and embed the playlist:
 *
 *   https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ
 *   [preview=true]
 *
 * Without the flag the URL is left alone and renders as a plain link.
 */
export function remarkVideo() {
  return (tree: Node) => {
    visit(tree, "paragraph", (node: ParagraphNode, index, parent) => {
      const raw = toRawText(node.children).trim();

      const match = raw.match(/^(\S+)\s*\[\s*preview\s*=\s*true\s*\]$/i);
      if (!match) return;

      const video = parseVideoUrl(match[1]);
      if (!video) return;

      const htmlNode: HtmlNode = {
        type: "html",
        value: `<div data-embed="video"${
          video.id ? ` data-video-id="${video.id}"` : ""
        }${video.list ? ` data-video-list="${video.list}"` : ""}${
          video.start ? ` data-video-start="${video.start}"` : ""
        }></div>`,
      };

      if (parent && typeof index === "number" && (parent as Parent).children) {
        (parent as Parent).children[index] = htmlNode;
      }
    });
  };
}

/**
 * Rebuilds the markdown source of a paragraph's inline nodes. `[preview=true]`
 * can come through as literal text or, depending on surrounding content, as an
 * unresolved link reference, so both shapes are stitched back together.
 */
function toRawText(children: Array<Node>): string {
  return children
    .map((child: any) => {
      switch (child.type) {
        case "text":
        case "inlineCode":
          return child.value as string;
        case "link":
          return child.url as string;
        case "linkReference":
          return `[${toRawText(child.children ?? [])}]`;
        case "break":
          return "\n";
        default:
          return child.children ? toRawText(child.children) : "";
      }
    })
    .join("");
}

/**
 * Pulls the video ID, playlist ID and optional start time out of any of
 * YouTube's URL shapes. Returns null for anything that is neither a YouTube
 * video nor a playlist, which leaves the paragraph untouched.
 */
function parseVideoUrl(url: string): VideoRef | null {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return null;
  }

  const host = parsed.hostname.replace(/^www\./, "");
  let id: string | null = null;

  if (host === "youtu.be") {
    id = parsed.pathname.slice(1);
  } else if (host === "youtube.com" || host === "youtube-nocookie.com") {
    if (parsed.pathname === "/watch") {
      id = parsed.searchParams.get("v");
    } else if (parsed.pathname !== "/playlist") {
      const segments = parsed.pathname.split("/").filter(Boolean);
      if (["embed", "shorts", "live", "v"].includes(segments[0])) {
        id = segments[1] ?? null;
      }
    }
  } else {
    // Some other host, so the `list` param below isn't a YouTube playlist.
    return null;
  }

  if (id && !/^[\w-]{11}$/.test(id)) return null;

  const rawList = parsed.searchParams.get("list");
  const list = rawList && /^[\w-]{2,64}$/.test(rawList) ? rawList : null;

  // A `/playlist` URL names no video of its own, so the list is all there is.
  if (!id && !list) return null;

  const start = parsed.searchParams.get("t") ?? parsed.searchParams.get("start");

  return {
    id: id ?? undefined,
    list: list ?? undefined,
    start: start ? toSeconds(start) : undefined,
  };
}

/** Accepts both `90` and YouTube's `1m30s` time formats. */
function toSeconds(value: string): string | undefined {
  if (/^\d+$/.test(value)) return value;

  const match = value.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/i);
  if (!match || !match.slice(1).some(Boolean)) return undefined;

  const [hours, minutes, seconds] = match
    .slice(1)
    .map((part) => Number(part) || 0);

  return String(hours * 3600 + minutes * 60 + seconds);
}
