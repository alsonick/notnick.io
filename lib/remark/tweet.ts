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

export function remarkTweet() {
  return (tree: Node) => {
    visit(tree, "paragraph", (node: ParagraphNode, index, parent) => {
      if (node.children.length === 1) {
        const child = node.children[0];
        let tweetUrl: string | null = null;

        if (child.type === "link") {
          tweetUrl = child.url;
        } else if (child.type === "text") {
          tweetUrl = child.value.trim();
        }

        if (tweetUrl) {
          const tweetId = extractTweetId(tweetUrl);
          if (tweetId) {
            const htmlNode: HtmlNode = {
              type: "html",
              value: `<div data-embed="tweet" data-tweet-url="${tweetUrl}" data-tweet-id="${tweetId}"></div>`,
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
      }
    });
  };
}

function extractTweetId(url: string): string | null {
  const patterns = [
    /(?:twitter\.com|x\.com)\/(?:#!\/)?(\w+)\/status(?:es)?\/(\d+)/,
    /(?:twitter\.com|x\.com)\/(?:#!\/)?(\w+)\/statuses\/(\d+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[2]) {
      return match[2];
    }
  }

  return null;
}
