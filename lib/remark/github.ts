import { visit } from "unist-util-visit";
import { Node, Parent } from "unist";

interface ParagraphNode extends Node {
  type: "paragraph";
  children: Array<TextNode | LinkNode>;
}

interface TextNode extends Node {
  type: "text";
  value: string;
}

interface LinkNode extends Node {
  type: "link";
  url: string;
  children: Array<TextNode>;
}

interface HtmlNode extends Node {
  type: "html";
  value: string;
}

export function remarkGithub() {
  return (tree: Node) => {
    visit(tree, "paragraph", (node: ParagraphNode, index, parent) => {
      if (node.children.length === 1) {
        const child = node.children[0];
        let url: string | null = null;

        if (child.type === "link") {
          url = child.url;
        } else if (child.type === "text") {
          url = child.value.trim();
        }

        if (url && isGithubIssueOrPr(url)) {
          const htmlNode: HtmlNode = {
            type: "html",
            value: `<div data-embed="github" data-github-url="${url}"></div>`,
          };
          if (
            parent &&
            typeof index === "number" &&
            (parent as Parent).children
          ) {
            (parent as Parent).children[index] = htmlNode;
          }
        }
      }
    });
  };
}

function isGithubIssueOrPr(url: string): boolean {
  return /https?:\/\/(www\.)?github\.com\/[^/]+\/[^/]+\/(issues|pull)\/\d+/.test(
    url
  );
}
