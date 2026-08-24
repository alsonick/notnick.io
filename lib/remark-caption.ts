import { visit } from "unist-util-visit";
import { Node, Parent } from "unist";

interface ParagraphNode extends Parent {
  type: "paragraph";
  children: Array<Node>;
}

interface TextNode extends Node {
  type: "text";
  value: string;
}

/** `[caption="…"]`, also accepting single quotes or no quotes at all. */
const CAPTION_LINE = /^\[\s*caption\s*=\s*(?:"(.*)"|'(.*)'|([^\]]*?))\s*\]$/i;

/**
 * Pulls a `[caption="…"]` line out of a paragraph and renders it as small
 * muted text directly under whatever the rest of the paragraph produced — an
 * image, a link, or one of the embeds the later plugins swap in:
 *
 *   ![](/post/example.png)
 *   [caption="What the terminal shows after the first ping"]
 *
 *   https://www.youtube.com/watch?v=ntVii_EJc6s
 *   [caption="Jeremy walks through the whole lab"]
 *   [preview=true]
 *
 * The line is stripped before `remarkTweet`/`remarkGithub`/`remarkVideo` run,
 * so those keep matching the paragraph shapes they already understand. A
 * caption sitting alone in its own paragraph captions the block above it,
 * which is how a table or a code block gets one. `[caption=""]` is dropped
 * rather than rendered as an empty line.
 */
export function remarkCaption() {
  return (tree: Node) => {
    visit(tree, "paragraph", (node: ParagraphNode, index, parent) => {
      const siblings = (parent as Parent | undefined)?.children;
      if (!siblings || typeof index !== "number") return;

      const lines = splitLines(node.children);
      const captionIndex = lines.findIndex((line) =>
        CAPTION_LINE.test(toRawText(line).trim()),
      );
      if (captionIndex === -1) return;

      const match = toRawText(lines[captionIndex]).trim().match(CAPTION_LINE)!;
      const text = (match[1] ?? match[2] ?? match[3] ?? "").trim();

      const caption: Array<Node> = text
        ? [
            {
              type: "html",
              value: `<p class="post-caption">${escapeHtml(text)}</p>`,
            } as Node,
          ]
        : [];

      const remaining = joinLines(lines.filter((_, i) => i !== captionIndex));

      if (remaining.length === 0) {
        siblings.splice(index, 1, ...caption);
        return index;
      }

      node.children = remaining;
      siblings.splice(index + 1, 0, ...caption);
    });
  };
}

/**
 * Groups a paragraph's inline nodes into the source lines they came from. A
 * single-newline line ending is a soft break, which lives inside a text node's
 * value rather than as a `break` node, so text has to be split as well.
 */
function splitLines(children: Array<Node>): Array<Array<Node>> {
  const lines: Array<Array<Node>> = [[]];

  for (const child of children) {
    if (child.type === "break") {
      lines.push([]);
      continue;
    }

    if (child.type === "text") {
      const { position, ...rest } = child as TextNode & { position?: unknown };
      rest.value.split("\n").forEach((part, i) => {
        if (i > 0) lines.push([]);
        if (part === "") return;
        lines[lines.length - 1].push({ ...rest, value: part } as TextNode);
      });
      continue;
    }

    lines[lines.length - 1].push(child);
  }

  return lines;
}

/** Stitches lines back together with the soft breaks that separated them. */
function joinLines(lines: Array<Array<Node>>): Array<Node> {
  const kept = lines.filter((line) => line.length > 0);

  return kept.flatMap((line, i) =>
    i === 0 ? line : [{ type: "text", value: "\n" } as Node, ...line],
  );
}

/** Rebuilds the source text of one line's inline nodes. */
function toRawText(children: Array<Node>): string {
  return children
    .map((child: any) => {
      switch (child.type) {
        case "text":
        case "inlineCode":
        case "html":
          return child.value as string;
        case "link":
          return child.url as string;
        case "linkReference":
          return `[${toRawText(child.children ?? [])}]`;
        default:
          return child.children ? toRawText(child.children) : "";
      }
    })
    .join("");
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
