import {
  AVATAR_FILE_EXTENSION,
  AVATAR,
  DOMAIN,
  THEME,
  CDN,
} from "./constants";
import {
  type MediaGalleryItem,
  type ComponentEmbed,
  type ContainerChild,
  type TextDisplay,
  type LinkButton,
  type Thumbnail,
  type Separator,
  LINK_BUTTON_STYLE,
  ComponentType,
} from "../types/discord-embed";
import { truncateText } from "./truncate-text";
import { social } from "./social-links";
import { readTime } from "./read-time";
import { convertDate } from "./date";
import { page } from "./page";

// Discord reads the payload from a script tag with exactly this id, and only
// when the type attribute is exactly "application/json".
export const COMPONENT_EMBED_SCRIPT_ID = "discord:component-embed";

// Documented ceilings. Going over any of them invalidates the payload, at
// which point Discord silently falls back to the Open Graph card — so we'd
// rather drop the embed ourselves than ship one we know Discord will reject.
const MAX_MEDIA_URL_LENGTH = 2048;
const MAX_PAYLOAD_BYTES = 3000;
const MAX_COMPONENTS = 40;

// Not Discord's limits, ours — a preview is a glance, not the page.
const MAX_DESCRIPTION_LENGTH = 240;
const MAX_TITLE_LENGTH = 110;

const avatarUrl = `${CDN}/branding/${AVATAR}.${AVATAR_FILE_EXTENSION}`;

/** "#30D158" -> 3199320, the integer form Discord wants for `accent_color`. */
const hexToAccentColor = (hex: string) => {
  const parsed = Number.parseInt(hex.replace("#", ""), 16);
  return Number.isNaN(parsed) ? undefined : parsed;
};

const ACCENT_COLOR = hexToAccentColor(THEME);

/** Discord fetches these itself, so relative paths are no use to it. */
export const toAbsoluteUrl = (url: string) => {
  const absolute = url.startsWith("http") ? url : `https://${DOMAIN}${url}`;
  return absolute.startsWith("https://") ? absolute : null;
};

/**
 * Text Display content is Discord markdown, so anything from a post title or
 * frontmatter has to be neutered before it lands in the payload — an unpaired
 * bracket in a title would otherwise eat the link around it.
 */
export const escapeMarkdown = (text: string) =>
  text.replace(/([\\*_~`|[\]<>])/g, "\\$1");

const text = (content: string): TextDisplay => ({
  type: ComponentType.TextDisplay,
  content,
});

const button = (label: string, url: string): LinkButton | null => {
  const absolute = toAbsoluteUrl(url);
  if (!absolute) return null;
  return {
    type: ComponentType.Button,
    style: LINK_BUTTON_STYLE,
    url: absolute,
    label,
  };
};

const thumbnail = (url: string, description?: string): Thumbnail | null => {
  const media = mediaItem(url, description);
  return media
    ? { type: ComponentType.Thumbnail, ...media }
    : null;
};

const mediaItem = (
  url: string,
  description?: string,
): MediaGalleryItem | null => {
  const absolute = toAbsoluteUrl(url);
  if (!absolute || absolute.length > MAX_MEDIA_URL_LENGTH) return null;
  return { media: { url: absolute }, ...(description ? { description } : {}) };
};

const separator: Separator = { type: ComponentType.Separator, spacing: 1 };

/**
 * A heading that links back to the page, with the description beneath it.
 * Both are trimmed here rather than at the call sites: a long description is
 * what pushes a payload past the byte limit, and losing the tail of a sentence
 * beats losing the whole preview.
 */
const headline = (title: string, url: string, description: string) => {
  const absolute = toAbsoluteUrl(url);
  const label = escapeMarkdown(truncateText(title, MAX_TITLE_LENGTH));
  const heading = absolute ? `## [${label}](${absolute})` : `## ${label}`;
  const body = escapeMarkdown(truncateText(description, MAX_DESCRIPTION_LENGTH));
  return text(body ? `${heading}\n${body}` : heading);
};

const countComponents = (components: unknown[]): number =>
  components.reduce<number>((total, component) => {
    if (!component || typeof component !== "object") return total;
    const { components: children, accessory, items } = component as Record<
      string,
      unknown
    >;
    return (
      total +
      1 +
      (Array.isArray(children) ? countComponents(children) : 0) +
      (accessory ? countComponents([accessory]) : 0) +
      (Array.isArray(items) ? items.length : 0)
    );
  }, 0);

/**
 * Serializes the payload for the inline script tag, or returns null when it
 * breaks one of Discord's limits. `<` is escaped so a stray "</script>" inside
 * a title cannot close the tag early; the escaped form still parses as JSON.
 */
export const serializeComponentEmbed = (embed: ComponentEmbed) => {
  if (countComponents([embed.component]) > MAX_COMPONENTS) return null;

  const json = JSON.stringify(embed).replace(/</g, "\\u003c");

  const bytes =
    typeof TextEncoder === "undefined"
      ? Buffer.byteLength(json, "utf8")
      : new TextEncoder().encode(json).length;

  return bytes > MAX_PAYLOAD_BYTES ? null : json;
};

const container = (components: (ContainerChild | null)[]): ComponentEmbed => ({
  component: {
    type: ComponentType.Container,
    components: components.filter(Boolean) as ContainerChild[],
    ...(ACCENT_COLOR === undefined ? {} : { accent_color: ACCENT_COLOR }),
  },
});

interface PageEmbedOptions {
  description: string;
  title: string;
  url: string;
}

/** The preview every page falls back to: headline, avatar and a link row. */
export const buildPageEmbed = (options: PageEmbedOptions): ComponentEmbed => {
  const accessory = thumbnail(avatarUrl, DOMAIN);
  const links = [
    button("Open", options.url),
    button(social.github.name, social.github.link),
    button(social.x.name, social.x.link),
  ].filter(Boolean) as LinkButton[];

  return container([
    accessory
      ? {
          type: ComponentType.Section,
          components: [headline(options.title, options.url, options.description)],
          accessory,
        }
      : headline(options.title, options.url, options.description),
    links.length ? separator : null,
    links.length
      ? { type: ComponentType.ActionRow, components: links }
      : null,
  ]);
};

interface PostEmbedOptions {
  type: "note" | "blog";
  description: string;
  cover?: string;
  title: string;
  date?: string;
  mins?: string;
  url: string;
  tag?: string;
}

/**
 * Posts get the richer treatment: the same card the Open Graph image uses,
 * plus the tag, date and read time as subtext and a way back to the index.
 */
export const buildPostEmbed = (options: PostEmbedOptions): ComponentEmbed => {
  const index = options.type === "blog" ? page.blog : page.note;
  const read = button("Read", options.url);
  const cover = options.cover ? mediaItem(options.cover, options.title) : null;

  const meta = [
    options.tag,
    options.date ? convertDate(options.date) : null,
    options.mins ? readTime(options.mins) : null,
  ]
    .filter(Boolean)
    .map((part) => escapeMarkdown(part as string))
    .join(" · ");

  const links = [
    button(index.title, index.link),
    button(DOMAIN, "/"),
  ].filter(Boolean) as LinkButton[];

  return container([
    read
      ? {
          type: ComponentType.Section,
          components: [headline(options.title, options.url, options.description)],
          accessory: read,
        }
      : headline(options.title, options.url, options.description),
    cover ? { type: ComponentType.MediaGallery, items: [cover] } : null,
    meta ? text(`-# ${meta}`) : null,
    links.length ? separator : null,
    links.length
      ? { type: ComponentType.ActionRow, components: links }
      : null,
  ]);
};
