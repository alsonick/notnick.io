import { visit } from "unist-util-visit";
import { Node, Parent } from "unist";
import { joinLines, splitLines } from "./caption";

interface ParagraphNode extends Parent {
  type: "paragraph";
  children: Array<Node>;
}

interface TextNode extends Node {
  type: "text";
  value: string;
}

/** `Note:` (any case) opening a line, plus the space after it. */
const NOTE_PREFIX = /^\s*note:\s*/i;

/**
 * Turns a line starting with `Note:` or `note:` into a boxed aside for the
 * reader, styled to match the `info` Callout:
 *
 *   Note: Switchports which carry multiple VLANs are called 'trunk ports'.
 *
 * becomes
 *
 *   <div class="post-note" role="note">
 *     <p class="post-note-label">Note</p>
 *     <p>Switchports which carry multiple VLANs are called 'trunk ports'.</p>
 *   </div>
 *
 * Inline formatting after the prefix (bold, code, links) is kept. Soft-wrapped
 * lines that follow stay with the note, and a `Note:` line partway through a
 * paragraph is split out so the text above it still renders as normal. Only
 * top-level paragraphs count — a `- Note:` bullet or `> Note:` quote starts
 * with something else and already has its own styling.
 */
export function remarkNote() {
  return (tree: Node) => {
    visit(tree, "paragraph", (node: ParagraphNode, index, parent) => {
      const root = parent as Parent | undefined;
      if (root?.type !== "root" || typeof index !== "number") return;

      const lines = splitLines(node.children);
      const starts = lines.flatMap((line, i) => (isNoteLine(line) ? [i] : []));
      if (starts.length === 0) return;

      const blocks: Array<Node> = [];

      if (starts[0] > 0) {
        blocks.push({
          ...node,
          children: joinLines(lines.slice(0, starts[0])),
        } as ParagraphNode);
      }

      starts.forEach((start, i) => {
        blocks.push(toNote(lines.slice(start, starts[i + 1] ?? lines.length)));
      });

      root.children.splice(index, 1, ...blocks);
      return index + blocks.length;
    });
  };
}

/** A line opening with the prefix and holding something after it. */
function isNoteLine(line: Array<Node>): boolean {
  const [first, ...rest] = line;
  if (first?.type !== "text") return false;

  const value = (first as TextNode).value;
  return (
    NOTE_PREFIX.test(value) &&
    (value.replace(NOTE_PREFIX, "") !== "" || rest.length > 0)
  );
}

function toNote(lines: Array<Array<Node>>): Node {
  const [first, ...rest] = joinLines(lines) as [TextNode, ...Array<Node>];
  const text = first.value.replace(NOTE_PREFIX, "");

  return {
    type: "note",
    data: {
      hName: "div",
      hProperties: { className: ["post-note"], role: "note" },
    },
    children: [
      {
        type: "paragraph",
        data: { hProperties: { className: ["post-note-label"] } },
        children: [{ type: "text", value: "Note" }],
      },
      {
        type: "paragraph",
        children: text ? [{ ...first, value: text }, ...rest] : rest,
      },
    ],
  } as Node;
}
