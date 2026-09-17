import { visit } from "unist-util-visit";
import { Node, Parent } from "unist";

interface TextNode extends Node {
  type: "text";
  value: string;
}

/**
 * A base character, a caret, then the exponent:
 *
 *   2^12      a number
 *   x^n       a single letter
 *   2^(32-n)  anything, bracketed
 *   2^{12}    the LaTeX-style form, for anyone used to writing it that way
 *
 * Anything longer than a number or a letter has to be bracketed, so ordinary
 * prose that happens to contain a caret is left alone.
 */
const EXPONENT =
  /([\w)\]])\^(?:\(([^()\s]{1,24})\)|\{([^{}\s]{1,24})\}|(-?\d+|[A-Za-z]))/g;

/**
 * Renders exponents written with a caret as real superscripts, so `2^12` reads
 * as 2¹² rather than as the raw text:
 *
 *   12 bits in length = 4096 total VLANs (2^12)
 *
 * Only text is rewritten. Code keeps its carets, since `O(n^2)` in a code span
 * is meant to be read literally, and a raised `2` in a monospace font looks
 * wrong next to the rest of the expression.
 */
export function remarkSuperscript() {
  return (tree: Node) => {
    visit(tree, "text", (node: TextNode, index, parent) => {
      const siblings = (parent as Parent | undefined)?.children;
      if (!siblings || typeof index !== "number") return;

      const replacement: Array<Node> = [];
      let lastIndex = 0;

      for (const match of node.value.matchAll(EXPONENT)) {
        const [full, base, bracketed, braced, bare] = match;
        const start = match.index!;

        const before = node.value.slice(lastIndex, start) + base;
        replacement.push({ type: "text", value: before } as TextNode);
        replacement.push({
          type: "superscript",
          data: { hName: "sup" },
          children: [{ type: "text", value: bracketed ?? braced ?? bare }],
        } as Node);

        lastIndex = start + full.length;
      }

      if (replacement.length === 0) return;

      const rest = node.value.slice(lastIndex);
      if (rest) replacement.push({ type: "text", value: rest } as TextNode);

      siblings.splice(index, 1, ...replacement);
      return index + replacement.length;
    });
  };
}
