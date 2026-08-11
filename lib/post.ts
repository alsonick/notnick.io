import { remarkHeadingAnchors } from "./remark-heading-anchors";
import { remarkSectionMeta, PostSection } from "./remark-section-meta";
import { remarkGithub } from "./remark-github";
import { remarkVideo } from "./remark-video";
import { remarkTweet } from "./remark-tweet";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import remarkRehype from "remark-rehype";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
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

  // Sort posts: pinned ones first, then by date
  return allNotesData.sort((a: any, b: any) => {
    const aPinned = a.pinned === true;
    const bPinned = b.pinned === true;
    if (aPinned !== bPinned) {
      return aPinned ? -1 : 1;
    }
    if (a.date < b.date) {
      return 1;
    } else if (a.date > b.date) {
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
    .use(remarkGfm)
    .use(remarkSectionMeta)
    .use(remarkTweet)
    .use(remarkGithub)
    .use(remarkVideo)
    .use(remarkHeadingAnchors)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeHighlight, { plainText: ["diagram"] })
    .use(rehypeStringify)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  const sections =
    (processedContent.data as { sections?: PostSection[] }).sections ?? [];

  return {
    slug,
    contentHtml,
    sections,
    ...matterResult.data,
  };
};
