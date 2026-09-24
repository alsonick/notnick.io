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

/**
 * Turns a paragraph made up of a URL followed by an `[embed=true]` flag into a
 * link embed placeholder, which `Post.tsx` swaps for the `LinkEmbed` component:
 *
 *   https://lrc.notnick.io/
 *   [embed=true]
 *
 * The card is built from the site's own Open Graph tags, the way a link pasted
 * into Discord unfurls into a preview. Without the flag the URL is left alone
 * and renders as a plain link, and a YouTube URL still wants `[preview=true]`,
 * which embeds the player itself rather than a card about it.
 */
export function remarkLinkEmbed() {
  return (tree: Node) => {
    visit(tree, "paragraph", (node: ParagraphNode, index, parent) => {
      const raw = toRawText(node.children).trim();

      const match = raw.match(/^(\S+)\s*\[\s*embed\s*=\s*true\s*\]$/i);
      if (!match) return;

      const url = toHttpUrl(match[1]);
      if (!url) return;

      const htmlNode: HtmlNode = {
        type: "html",
        value: `<div data-embed="link" data-link-url="${escapeAttribute(
          url,
        )}"></div>`,
      };

      if (parent && typeof index === "number" && (parent as Parent).children) {
        (parent as Parent).children[index] = htmlNode;
      }
    });
  };
}

/**
 * Rebuilds the markdown source of a paragraph's inline nodes. `[embed=true]`
 * has no matching definition, so remark hands it over as an unresolved link
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

/** Anything that isn't a plain web link is left as the paragraph it was. */
function toHttpUrl(value: string): string | null {
  try {
    const parsed = new URL(value);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:")
      return null;
    return parsed.toString();
  } catch {
    return null;
  }
}

function escapeAttribute(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}
