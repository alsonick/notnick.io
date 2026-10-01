import { visit } from "unist-util-visit";
import { Node, Parent } from "unist";
import { joinLines, splitLines, toRawText } from "./caption";

interface ParagraphNode extends Parent {
  type: "paragraph";
  children: Array<Node>;
}

interface ElementData {
  hName?: string;
  hProperties?: { className?: string | Array<string>; [key: string]: unknown };
}

/** `[size=large]`, also accepting quotes around the size. */
const SIZE_LINE = /^\[\s*size\s*=\s*["']?([^"'\]]*?)["']?\s*\]$/i;

/** Any `[size=…]` line, whether or not the size is one it knows. */
const ANY_SIZE_LINE = /^\[\s*size\s*=[^\]]*\]$/i;

/** The class each size renders with, keyed by the name written in the post. */
const SIZES = new Map([
  ["small", "post-size-small"],
  ["base", "post-size-base"],
  ["normal", "post-size-base"],
  ["medium", "post-size-medium"],
  ["large", "post-size-large"],
  ["extralarge", "post-size-extralarge"],
]);

/** Blocks with no text of their own to size, the embeds and captions among them. */
const UNSIZABLE = new Set(["html", "thematicBreak", "definition"]);

/**
 * Resizes the text above a `[size=…]` line — `small`, `base` (or `normal`),
 * `medium`, `large` or `extralarge`:
 *
 *   192.168.1.0
 *   [size=large]
 *
 * Inside a paragraph it sizes the lines above it, back to the start of the
 * paragraph or the previous `[size=…]` line, and anything below it carries on
 * at the normal size as a paragraph of its own. Alone in its own paragraph it
 * sizes the block above instead, which is how a list, table, quote or code
 * block gets one. Sizes scale with what they're applied to, so a sized code
 * block keeps its monospace a touch smaller than the prose around it.
 *
 * Every `[size=…]` line is taken out of the post, so one with a size it doesn't
 * know, or with nothing above it to size, does nothing rather than showing.
 */
export function remarkSize() {
  return (tree: Node) => {
    visit(tree, "paragraph", (node: ParagraphNode, index, parent) => {
      const container = parent as Parent | undefined;
      const siblings = container?.children;
      if (!siblings || typeof index !== "number") return;

      const inListItem = container?.type === "listItem";
      const lines = splitLines(node.children);
      const blocks: Array<Node> = [];
      let pending: Array<Array<Node>> = [];
      let found = false;

      lines.forEach((line, i) => {
        if (!ANY_SIZE_LINE.test(toRawText(line).trim())) {
          pending.push(line);
          return;
        }

        const className = sizeClass(line);
        const above = siblings[index - 1];
        found = true;

        if (className && pending.length > 0) {
          const paragraph = { ...node, children: joinLines(pending) };
          blocks.push(withSize(paragraph, className, inListItem));
          pending = [];
        } else if (
          className &&
          i === 0 &&
          above &&
          !UNSIZABLE.has(above.type)
        ) {
          siblings[index - 1] = withSize(above, className, inListItem);
        }
      });

      if (!found) return;
      if (pending.length > 0) {
        blocks.push({ ...node, children: joinLines(pending) } as ParagraphNode);
      }

      siblings.splice(index, 1, ...blocks);
      return index + blocks.length;
    });
  };
}

function sizeClass(line: Array<Node>): string | undefined {
  const match = toRawText(line).trim().match(SIZE_LINE);
  if (!match) return undefined;

  return SIZES.get(match[1].toLowerCase().replace(/[\s_-]/g, ""));
}

/**
 * A paragraph takes the class itself, rendered as a `<div>` inside a list item
 * because a tight list unwraps its items' `<p>`s and would drop the class with
 * them. Any other block is wrapped in a `<div>` carrying it — a class set on a
 * code block's own node lands on its `<code>`, in place of the `language-…`
 * class the highlighting needs.
 */
function withSize(node: Node, className: string, inListItem: boolean): Node {
  if (node.type !== "paragraph") {
    return {
      type: "sized",
      data: { hName: "div", hProperties: { className: [className] } },
      children: [node],
    } as Node;
  }

  const data = (node.data ?? {}) as ElementData;

  return {
    ...node,
    data: {
      ...data,
      ...(inListItem && { hName: "div" }),
      hProperties: {
        ...data.hProperties,
        className: [data.hProperties?.className ?? [], className].flat(),
      },
    },
  } as Node;
}
