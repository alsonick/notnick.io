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

interface Kind {
  /** The opening prefix, matched at the start of a line in any case. */
  prefix: RegExp;
  /** Heading shown at the top of the box. */
  label: string;
  /** Classes that style it. `post-note` carries the shared box styling. */
  className: Array<string>;
}

const KINDS: Array<Kind> = [
  { prefix: /^\s*note:\s*/i, label: "Note", className: ["post-note"] },
  {
    prefix: /^\s*warning:\s*/i,
    label: "Warning",
    className: ["post-note", "post-warning"],
  },
];

/**
 * Turns a line opening with `Note:` or `Warning:` into a boxed aside for the
 * reader, styled to match the Callout component:
 *
 *   Warning: VLAN 1 and VLANs 1002-1005 cannot be deleted.
 *
 * becomes
 *
 *   <div class="post-note post-warning" role="note">
 *     <p class="post-note-label">Warning</p>
 *     <p>VLAN 1 and VLANs 1002-1005 cannot be deleted.</p>
 *   </div>
 *
 * Inline formatting after the prefix (bold, code, links) is kept. Soft-wrapped
 * lines that follow stay with the aside, and a prefixed line partway through a
 * paragraph is split out so the text above it still renders as normal. Only
 * top-level paragraphs count — a `- Note:` bullet or `> Warning:` quote starts
 * with something else and already has its own styling.
 */
export function remarkNote() {
  return (tree: Node) => {
    visit(tree, "paragraph", (node: ParagraphNode, index, parent) => {
      const root = parent as Parent | undefined;
      if (root?.type !== "root" || typeof index !== "number") return;

      const lines = splitLines(node.children);
      const starts = lines.flatMap((line, i) => {
        const kind = matchKind(line);
        return kind ? [{ at: i, kind }] : [];
      });
      if (starts.length === 0) return;

      const blocks: Array<Node> = [];

      if (starts[0].at > 0) {
        blocks.push({
          ...node,
          children: joinLines(lines.slice(0, starts[0].at)),
        } as ParagraphNode);
      }

      starts.forEach(({ at, kind }, i) => {
        const end = starts[i + 1]?.at ?? lines.length;
        blocks.push(toAside(lines.slice(at, end), kind));
      });

      root.children.splice(index, 1, ...blocks);
      return index + blocks.length;
    });
  };
}

/** The kind a line opens with, as long as it holds something after the prefix. */
function matchKind(line: Array<Node>): Kind | undefined {
  const [first, ...rest] = line;
  if (first?.type !== "text") return undefined;

  const value = (first as TextNode).value;
  return KINDS.find(
    (kind) =>
      kind.prefix.test(value) &&
      (value.replace(kind.prefix, "") !== "" || rest.length > 0),
  );
}

function toAside(lines: Array<Array<Node>>, kind: Kind): Node {
  const [first, ...rest] = joinLines(lines) as [TextNode, ...Array<Node>];
  const text = first.value.replace(kind.prefix, "");

  return {
    type: "aside",
    data: {
      hName: "div",
      hProperties: { className: kind.className, role: "note" },
    },
    children: [
      {
        type: "paragraph",
        data: { hProperties: { className: ["post-note-label"] } },
        children: [{ type: "text", value: kind.label }],
      },
      {
        type: "paragraph",
        children: text ? [{ ...first, value: text }, ...rest] : rest,
      },
    ],
  } as Node;
}
