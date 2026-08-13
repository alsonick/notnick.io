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

interface Options {
  /**
   * Directory the post's lab files live in, relative to `public`, e.g.
   * "networking/jeremys-it-lab/labs". Comes from the post's `labs`
   * frontmatter field.
   */
  dir?: string;
}

/**
 * Turns a paragraph made up of a lab file name into a download placeholder,
 * which `Post.tsx` swaps for the `DownloadLab` component.
 *
 *   [lab=Day 04 Lab - Basic Device Security.pkt]
 *
 * The file is resolved against the post's `labs` frontmatter directory, so
 * the note only ever names the file. Without that field, or for a name that
 * isn't a plain file name, the paragraph is left alone.
 */
export function remarkLab(options: Options = {}) {
  return (tree: Node) => {
    visit(tree, "paragraph", (node: ParagraphNode, index, parent) => {
      const raw = toRawText(node.children).trim();

      const match = raw.match(/^\[\s*lab\s*=\s*(.+?)\s*\]$/i);
      if (!match) return;

      const file = match[1];
      if (!options.dir || !isPlainFileName(file)) return;

      const href = `/${trimSlashes(options.dir)}/${encodeURIComponent(file)}`;

      const htmlNode: HtmlNode = {
        type: "html",
        value: `<div data-embed="lab" data-lab-href="${href}" data-lab-file="${escapeAttribute(
          file,
        )}"></div>`,
      };

      if (parent && typeof index === "number" && (parent as Parent).children) {
        (parent as Parent).children[index] = htmlNode;
      }
    });
  };
}

/**
 * Rebuilds the markdown source of a paragraph's inline nodes. `[lab=...]` has
 * no matching definition, so remark hands it over as an unresolved link
 * reference rather than literal text.
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

/** Keeps the directive to a file name, so it can't walk out of `labs`. */
function isPlainFileName(file: string): boolean {
  return !file.includes("/") && !file.includes("\\") && !file.includes("..");
}

function trimSlashes(value: string): string {
  return value.replace(/^\/+|\/+$/g, "");
}

function escapeAttribute(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}
