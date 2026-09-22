import { findSectionEnd, getText, isScrollUp } from "./section-meta";
import { getPostSections } from "../post-sections";
import { slugify } from "../utils/slugify";
import { Node, Parent } from "unist";

interface HtmlNode extends Node {
  type: "html";
  value: string;
}

interface Options {
  /**
   * Whether the post is long enough to be read a section at a time. Long posts
   * get a download per `###` section; the rest get one for the whole post.
   */
  perSection?: boolean;
}

/**
 * Adds the download placeholders `Post.tsx` swaps for `DownloadSection`.
 *
 * In a section the placeholder goes at the very end, under the packet tracer
 * lab and the quiz. Run this after `remarkSectionMeta`, which is what puts the
 * quiz there and takes the metadata fences out.
 *
 * Which sections get one is decided by `getPostSections`, the same function the
 * download endpoint slices the file with, so a button is never offered for
 * something the endpoint would not serve.
 */
export function remarkSectionDownload(options: Options = {}) {
  return (tree: Node, file: any) => {
    const root = tree as Parent;

    if (!options.perSection) {
      root.children.splice(endOfPost(root.children), 0, placeholder());
      return;
    }

    const topics = new Map(
      getPostSections(String(file.value)).map((section) => [
        section.id,
        section.topic,
      ]),
    );

    for (let i = 0; i < root.children.length; i++) {
      const node = root.children[i] as Node & { depth?: number };
      if (node.type !== "heading" || node.depth !== 3) continue;

      const id = slugify(getText(node));
      const topic = topics.get(id);
      if (!topic) continue;

      const at = findSectionEnd(root.children, i + 1);
      root.children.splice(at, 0, placeholder(id, topic));

      // Carry on from the node that ended this section.
      i = at;
    }
  };
}

function placeholder(id?: string, topic?: string): HtmlNode {
  const attributes =
    id && topic
      ? ` data-download-section="${id}" data-download-name="${escapeAttribute(
          topic,
        )}"`
      : "";

  return {
    type: "html",
    value: `<div data-embed="download"${attributes}></div>`,
  };
}

/** The end of the post, keeping the scroll-up button last. */
function endOfPost(children: Node[]): number {
  let end = children.length;
  while (end > 0 && isScrollUp(children[end - 1])) end--;
  return end;
}

function escapeAttribute(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}
