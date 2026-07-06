import { visit } from "unist-util-visit";
import { Node, Parent } from "unist";
import { slugify } from "./slugify";

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
      // Only process h3 and h4 headings (depth 3 and 4)
      if (node.depth === 3 || node.depth === 4) {
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
