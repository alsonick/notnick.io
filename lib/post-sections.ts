import { findSectionEnd, getText, matchMetaBlock } from "./remark/section-meta";
import { slugify } from "./utils/slugify";
import { Node, Parent } from "unist";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import { unified } from "unified";

export interface PostSectionSource {
  /** Slug of the section heading, the same id the heading anchor uses. */
  id: string;
  /** The section heading text, e.g. "Day 16 (Part 1 - VLANs)". */
  topic: string;
  /** The section's own markdown, heading included. */
  markdown: string;
}

/**
 * Slices a post's markdown into its `###` sections, so a reader can take one
 * day of notes away as its own file.
 *
 * The source is parsed rather than split on `###` text, because a heading-like
 * line inside a fenced code block is not a heading. The `--- finished: true ---`
 * fence under a heading is bookkeeping that drives the quizzes, so it is left
 * out of what the reader downloads.
 *
 * Sections with a heading but no content yet (a day that hasn't been written
 * up) are skipped — there would be nothing in the file.
 */
export function getPostSections(source: string): PostSectionSource[] {
  const children = parse(source);
  const sections: PostSectionSource[] = [];

  for (let i = 0; i < children.length; i++) {
    const heading = children[i] as Node & { depth?: number };
    if (heading.type !== "heading" || heading.depth !== 3) continue;

    const start = heading.position?.start.offset;
    if (start === undefined) continue;

    const end = findSectionEnd(children, i + 1);
    const stop = children[end]?.position?.start.offset ?? source.length;
    const markdown = tidy(
      cut(source.slice(start, stop), metaRange(children, i), start),
    );
    const topic = getText(heading);

    // A heading on its own is not worth a file.
    if (!hasBody(markdown)) continue;

    sections.push({ id: slugify(topic), topic, markdown });
  }

  return sections;
}

/**
 * The whole post as one file, for posts short enough not to be read a section
 * at a time. The metadata fences come out here too, so a reader never
 * downloads the bookkeeping.
 */
export function getPostMarkdown(source: string): string {
  const children = parse(source);
  const ranges: Array<[number, number]> = [];

  for (let i = 0; i < children.length; i++) {
    const heading = children[i] as Node & { depth?: number };
    if (heading.type !== "heading" || heading.depth !== 3) continue;

    const range = metaRange(children, i);
    if (range) ranges.push(range);
  }

  return tidy(cut(source, ranges, 0));
}

function parse(source: string): Node[] {
  const tree = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .parse(source) as Parent;
  return tree.children as Node[];
}

/** Offsets of the metadata fence under the heading at `index`, if it has one. */
function metaRange(children: Node[], index: number): [number, number] | null {
  const meta = matchMetaBlock(children, index + 1);
  if (!meta) return null;

  const start = children[index + 1].position?.start.offset;
  const end = children[index + meta.nodeCount].position?.end.offset;
  if (start === undefined || end === undefined) return null;

  return [start, end];
}

/**
 * Removes `ranges` (offsets into the original source) from `text`, which starts
 * at `offset` in that source.
 */
function cut(
  text: string,
  ranges: Array<[number, number]> | [number, number] | null,
  offset: number,
): string {
  if (!ranges) return text;
  const list = Array.isArray(ranges[0])
    ? (ranges as Array<[number, number]>)
    : [ranges as [number, number]];

  let out = "";
  let taken = 0;

  for (const [start, end] of list) {
    out += text.slice(taken, start - offset);
    taken = end - offset;
  }

  return out + text.slice(taken);
}

/** The one section matching `id`, or null when the post has no such section. */
export function getPostSection(
  source: string,
  id: string,
): PostSectionSource | null {
  return getPostSections(source).find((section) => section.id === id) ?? null;
}

/** True when there is something under the heading line. */
function hasBody(markdown: string): boolean {
  return markdown.split("\n").slice(1).join("\n").trim().length > 0;
}

/** A line holding one of the `<div data-embed="...">` placeholders. */
const EMBED_LINE = /^[ \t]*<div\s+data-embed="[^"]*"[^>]*><\/div>[ \t]*$\n?/gm;

/** A line holding one of the post directives the remark plugins act on. */
const DIRECTIVE_LINE =
  /^[ \t]*\[\s*(?:caption|lab|preview|embed)\s*=[^\]]*\][ \t]*$\n?/gim;

/**
 * Takes out what only makes sense on the site:
 *
 *   - the `<div data-embed="...">` placeholders standing in for the tweet,
 *     video, lab, quiz, community and scroll-up components;
 *   - the `[caption=…]`, `[lab=…]`, `[preview=true]` and `[embed=true]`
 *     directives the remark plugins act on, which are instructions to the site
 *     rather than prose.
 *
 * What those directives decorate stays: the image above a caption, and the URL
 * a `[preview=true]` or `[embed=true]` sits under. Other HTML in a post
 * (`<sup>`, `<img>`, `<audio>`) is content, so it stays as well.
 *
 * Then closes up the gaps: cutting the metadata fence, the placeholders and the
 * directives out leaves blank lines behind, and the `---` dividing one section
 * from the next separates nothing once the section stands on its own.
 */
function tidy(markdown: string): string {
  const body = markdown
    .replace(EMBED_LINE, "")
    .replace(DIRECTIVE_LINE, "")
    .trim()
    .replace(/\n{3,}/g, "\n\n");

  return `${body.replace(/\n\n-{3,}[ \t]*$/, "")}\n`;
}
