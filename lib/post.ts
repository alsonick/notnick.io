import { remarkHeadingAnchors } from "./remark-heading-anchors";
import { remarkGithub } from "./remark-github";
import { remarkTweet } from "./remark-tweet";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import remarkRehype from "remark-rehype";
import remarkParse from "remark-parse";
import rehypeRaw from "rehype-raw";
import { unified } from "unified";
import matter from "gray-matter";
import path from "path";
import fs from "fs";

const getDirectory = (dir: string) => {
  return path.join(process.cwd(), dir);
};

export const getSortedPostData = (dir: string) => {
  const directory = getDirectory(dir);

  const fileNames = fs.readdirSync(directory);
  const allNotesData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");

    const fullPath = path.join(directory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      slug,
      ...matterResult.data,
    };
  });

  // Sort posts by date
  return allNotesData.sort(({ date: a }: any, { date: b }: any) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
};

export const getAllPostSlugs = (dir: string) => {
  const directory = getDirectory(dir);
  const fileNames = fs.readdirSync(directory);

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
};

export const getPostData = async (slug: string, dir: string) => {
  const directory = getDirectory(dir);
  const fullPath = path.join(directory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkTweet)
    .use(remarkGithub)
    .use(remarkHeadingAnchors)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...matterResult.data,
  };
};
