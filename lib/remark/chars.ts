import { visit } from "unist-util-visit";
import { Node, Parent } from "unist";
import { joinLines, splitLines, toRawText } from "./caption";

interface ParagraphNode extends Parent {
  type: "paragraph";
  children: Array<Node>;
}

interface TextNode extends Node {
  type: "text";
  value: string;
}

/** The properties a coloured run's `<span>` renders with. */
interface Paint {
  className: Array<string>;
  style?: string;
}

interface ColorRange {
  start: number;
  /** Inclusive. Left off, the range runs to the end of the text. */
  end?: number;
  paint: Paint;
}

/**
 * `[chars=0-25,color=red]`. The end can be `end`, or left off along with the
 * dash to colour a single character. `colour` is accepted too.
 */
const CHARS_LINE =
  /^\[\s*chars\s*=\s*(\d+)\s*(?:-\s*(\d+|end)\s*)?,\s*colou?r\s*=\s*["']?(#(?:[0-9a-f]{3}){1,2}|[a-z]+)["']?\s*\]$/i;

/** Any `[chars=…]` line, whether or not it's one it can apply. */
const ANY_CHARS_LINE = /^\[\s*chars\s*=[^\]]*\]$/i;

/** Named colours, each styled in globals.css with a shade for either theme. */
const COLORS = new Map([
  ["red", "red"],
  ["orange", "orange"],
  ["yellow", "yellow"],
  ["green", "green"],
  ["teal", "teal"],
  ["blue", "blue"],
  ["purple", "purple"],
  ["pink", "pink"],
  ["gray", "gray"],
  ["grey", "gray"],
  ["primary", "primary"],
]);

/**
 * Colours ranges of characters in the text above a `[chars=…]` line, counted
 * from 0 with both ends included:
 *
 *   11000000 10101000 00000001 00000000
 *   [chars=0-25,color=red]
 *   [chars=27-end,color=blue]
 *
 * The colour is one of the names in `COLORS`, or a hex value like `#ff8800`,
 * which is used as written in both themes. Characters are counted in the text
 * as it reads, so the `**` around bold text don't count, and a soft-wrapped
 * line break counts as one. Inline code counts towards the position but keeps
 * its own colour. Where ranges overlap, the later line wins.
 *
 * Like a caption it applies to the rest of its paragraph, or to the block
 * above when it sits alone in its own paragraph — which is where it ends up
 * under a `[size=…]` line, since that splits off whatever follows it. Every
 * `[chars=…]` line is taken out of the post, so one with a colour it doesn't
 * know, or a range starting past the end of the text, does nothing rather than
 * showing.
 */
export function remarkChars() {
  return (tree: Node) => {
    visit(tree, "paragraph", (node: ParagraphNode, index, parent) => {
      const siblings = (parent as Parent | undefined)?.children;
      if (!siblings || typeof index !== "number") return;

      const lines = splitLines(node.children);
      const isDirective = lines.map((line) =>
        ANY_CHARS_LINE.test(toRawText(line).trim()),
      );
      if (!isDirective.some(Boolean)) return;

      const directives = lines.filter((_, i) => isDirective[i]);
      const content = lines.filter((_, i) => !isDirective[i]);

      if (content.length > 0) {
        const paragraph = { ...node, children: joinLines(content) };
        siblings[index] = applyRanges(paragraph as ParagraphNode, directives);
        return index + 1;
      }

      const above = siblings[index - 1];
      if (above) siblings[index - 1] = applyRanges(above, directives);

      siblings.splice(index, 1);
      return index;
    });
  };
}

/** Paints `target` with whichever of the directive lines' ranges fit in it. */
function applyRanges(target: Node, directives: Array<Array<Node>>): Node {
  const length = textLength(target);
  const ranges = directives.flatMap((line) => {
    const range = parseRange(line);
    const fits =
      range && range.start < length && (range.end ?? length) >= range.start;
    return fits ? [range] : [];
  });

  return ranges.length > 0 ? paint(target, ranges, length) : target;
}

function parseRange(line: Array<Node>): ColorRange | undefined {
  const match = toRawText(line).trim().match(CHARS_LINE);
  if (!match) return undefined;

  const [, start, end, color] = match;
  const paint = toPaint(color.toLowerCase());
  if (!paint) return undefined;

  return {
    start: Number(start),
    end:
      end === undefined
        ? Number(start)
        : end.toLowerCase() === "end"
          ? undefined
          : Number(end),
    paint,
  };
}

function toPaint(color: string): Paint | undefined {
  if (color.startsWith("#")) {
    return { className: ["post-color"], style: `--post-color: ${color}` };
  }

  const name = COLORS.get(color);
  return name ? { className: ["post-color", `post-color-${name}`] } : undefined;
}

/** How many characters a block reads as, the way `paint` counts them. */
function textLength(node: Node): number {
  let length = 0;

  visit(node, (child) => {
    if (child.type === "text" || child.type === "inlineCode") {
      length += (child as TextNode).value.length;
    }
  });

  return length;
}

/**
 * Gives every character the paint of the last range covering it, then splits
 * each text node into runs that share one, wrapping the painted runs in spans.
 */
function paint(node: Node, ranges: Array<ColorRange>, length: number): Node {
  const paints: Array<Paint | undefined> = new Array(length);

  for (const { start, end, paint } of ranges) {
    const last = Math.min(end ?? length - 1, length - 1);
    for (let i = start; i <= last; i++) paints[i] = paint;
  }

  let offset = 0;

  const walk = (child: Node): Array<Node> => {
    if (child.type === "text") {
      const runs = toRuns(child as TextNode, offset, paints);
      offset += (child as TextNode).value.length;
      return runs;
    }

    if (child.type === "inlineCode") {
      offset += (child as TextNode).value.length;
      return [child];
    }

    if ("children" in child) {
      const children = (child as Parent).children.flatMap(walk);
      return [{ ...child, children } as Parent];
    }

    return [child];
  };

  return walk(node)[0];
}

function toRuns(
  node: TextNode,
  offset: number,
  paints: Array<Paint | undefined>,
): Array<Node> {
  const runs: Array<Node> = [];
  let start = 0;

  for (let i = 1; i <= node.value.length; i++) {
    const paint = paints[offset + start];
    if (i < node.value.length && paints[offset + i] === paint) continue;

    const text = {
      type: "text",
      value: node.value.slice(start, i),
    } as TextNode;
    runs.push(
      paint
        ? ({
            type: "colored",
            data: { hName: "span", hProperties: { ...paint } },
            children: [text],
          } as Node)
        : text,
    );
    start = i;
  }

  return runs;
}
