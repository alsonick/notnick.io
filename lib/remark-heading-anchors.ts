import { visit } from "unist-util-visit";
import { Node, Parent } from "unist";

interface HeadingNode extends Parent {
  type: "heading";
  depth: number;
  children: Node[];
  data?: {
    hProperties?: {
      id?: string;
    };
  };
}

interface TextNode extends Node {
  type: "text";
  value: string;
}

// Convert heading text to URL-friendly slug
function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Extract text from heading node
function getHeadingText(node: HeadingNode): string {
  let text = "";
  visit(node, "text", (child: TextNode) => {
    text += child.value;
  });
  return text;
}

export function remarkHeadingAnchors() {
  return (tree: Node) => {
    visit(tree, "heading", (node: HeadingNode) => {
      // Only process h3 headings (depth 3)
      if (node.depth === 3) {
        const headingText = getHeadingText(node);
        const slug = slugify(headingText);

        // Add an id to the heading node
        if (!node.data) {
          node.data = {};
        }
        if (!node.data.hProperties) {
          node.data.hProperties = {};
        }
        node.data.hProperties.id = slug;
      }
    });
  };
}
