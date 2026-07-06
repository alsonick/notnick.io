import { visit } from "unist-util-visit";
import { Node, Parent } from "unist";
import { slugify } from "./slugify";

interface HeadingNode extends Parent {
  type: "heading";
  depth: number;
}

interface TextNode extends Node {
  type: "text";
  value: string;
}

export type SectionMetaValue = string | number | boolean;

export interface PostSection {
  /** Slug of the section heading (same as the heading's anchor id). */
  id: string;
  /** The section heading text. */
  topic: string;
  meta: Record<string, SectionMetaValue>;
}

// A metadata line looks like "finished: true"
const META_LINE = /^[\w-]+\s*:\s*.+$/;

function getText(node: Node): string {
  let text = "";
  visit(node, "text", (child: TextNode) => {
    text += child.value;
  });
  return text;
}

function parseValue(raw: string): SectionMetaValue {
  if (raw === "true") return true;
  if (raw === "false") return false;
  if (/^-?\d+(\.\d+)?$/.test(raw)) return Number(raw);
  return raw;
}

function parseLines(lines: string[]): Record<string, SectionMetaValue> {
  const meta: Record<string, SectionMetaValue> = {};
  for (const line of lines) {
    const separator = line.indexOf(":");
    const key = line.slice(0, separator).trim();
    meta[key] = parseValue(line.slice(separator + 1).trim());
  }
  return meta;
}

/**
 * Matches a metadata fence starting at children[start]:
 *
 *   ---
 *   finished: true
 *   ---
 *
 * With blank lines around the content this parses as
 * thematicBreak / paragraph / thematicBreak. Without blank lines the
 * closing `---` is swallowed as a setext-heading underline, so the block
 * parses as thematicBreak / heading instead — both shapes are handled.
 * Returns null (leaving the tree untouched) for real horizontal rules.
 */
function matchMetaBlock(
  children: Node[],
  start: number,
): { meta: Record<string, SectionMetaValue>; nodeCount: number } | null {
  if (children[start]?.type !== "thematicBreak") return null;

  const lines: string[] = [];
  const limit = Math.min(start + 5, children.length - 1);

  for (let j = start + 1; j <= limit; j++) {
    const node = children[j];

    if (node.type === "thematicBreak") {
      if (lines.length === 0) return null;
      return { meta: parseLines(lines), nodeCount: j - start + 1 };
    }

    if (node.type === "paragraph" || node.type === "heading") {
      const nodeLines = getText(node)
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);
      if (
        nodeLines.length === 0 ||
        !nodeLines.every((line) => META_LINE.test(line))
      ) {
        return null;
      }
      lines.push(...nodeLines);
      // Compact form: the closing fence became this setext heading's
      // underline, so the block ends here.
      if (node.type === "heading") {
        return { meta: parseLines(lines), nodeCount: j - start + 1 };
      }
      continue;
    }

    return null;
  }

  return null;
}

/**
 * Strips `--- key: value ---` metadata fences that directly follow `###`
 * headings, collects them into file.data.sections, and appends a quiz embed
 * placeholder to every section marked `finished: true`.
 */
export function remarkSectionMeta() {
  return (tree: Node, file: any) => {
    const root = tree as Parent;
    const sections: PostSection[] = [];

    for (let i = 0; i < root.children.length; i++) {
      const node = root.children[i] as HeadingNode;
      if (node.type !== "heading" || node.depth !== 3) continue;

      const block = matchMetaBlock(root.children, i + 1);
      if (!block) continue;

      const topic = getText(node);
      const id = slugify(topic);

      root.children.splice(i + 1, block.nodeCount);
      sections.push({ id, topic, meta: block.meta });

      if (block.meta.finished === true) {
        // Insert the quiz placeholder at the end of the section (right
        // before the next `##`/`###` heading, or at the end of the post).
        let end = i + 1;
        while (end < root.children.length) {
          const sibling = root.children[end] as HeadingNode;
          if (sibling.type === "heading" && sibling.depth <= 3) break;
          end++;
        }
        root.children.splice(end, 0, {
          type: "html",
          value: `<div data-embed="quiz" data-quiz-id="${id}"></div>`,
        } as Node);
      }
    }

    file.data.sections = sections;
  };
}
