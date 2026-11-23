import { remarkHeadingAnchors } from "./remark/heading-anchors";
import { remarkSuperscript } from "./remark/superscript";
import { remarkSectionDownload } from "./remark/section-download";
import { remarkSectionMeta, PostSection } from "./remark/section-meta";
import { remarkGithub } from "./remark/github";
import { remarkCaption } from "./remark/caption";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import { remarkLinkEmbed } from "./remark/link-embed";
import { remarkVideo } from "./remark/video";
import { remarkTweet } from "./remark/tweet";
import { remarkNote } from "./remark/note";
import { remarkSize } from "./remark/size";
import { remarkChars } from "./remark/chars";
import { remarkLab } from "./remark/lab";
import remarkRehype from "remark-rehype";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { unified } from "unified";
import { LONG_POST_LINE_COUNT } from "./constants";
import { PostAudio } from "../types/post";
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

  // Sort posts: pinned ones first, oldest first so they read in the order they
  // were started; everything else newest first.
  return allNotesData.sort((a: any, b: any) => {
    const aPinned = a.pinned === true;
    const bPinned = b.pinned === true;
    if (aPinned !== bPinned) {
      return aPinned ? -1 : 1;
    }
    const order = aPinned ? -1 : 1;
    if (a.date < b.date) {
      return order;
    } else if (a.date > b.date) {
      return -order;
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

  // Long posts are read a section at a time, so they get a download per
  // section; the rest get one for the whole post.
  const lineCount = matterResult.content.split("\n").length;

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkSectionMeta)
    .use(remarkSectionDownload, {
      perSection: lineCount >= LONG_POST_LINE_COUNT,
    })
    .use(remarkCaption)
    .use(remarkTweet)
    .use(remarkGithub)
    .use(remarkVideo)
    .use(remarkLinkEmbed)
    .use(remarkLab, { dir: matterResult.data.labs })
    .use(remarkNote)
    .use(remarkSize)
    .use(remarkHeadingAnchors)
    .use(remarkSuperscript)
    .use(remarkChars)
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
    lineCount,
    ...matterResult.data,
    // After the frontmatter, so its `audio: false` opt-out can't take the slot.
    audio: getPostAudio(`${path.basename(dir)}/${slug}`),
  };
};

// Written by `yarn audio` (scripts/generate-audio.mjs). Posts without a
// recording get null, since Next can't serialize undefined props.
const getPostAudio = (key: string): PostAudio | null => {
  try {
    const manifest = JSON.parse(
      fs.readFileSync(getDirectory("lib/data/post-audio.json"), "utf8"),
    );
    const entry = manifest[key];
    return entry
      ? {
          src: entry.src,
          duration: entry.duration,
          // Only if they were made from the recording that's there now.
          timings:
            entry.timings && entry.timingsFor === entry.hash
              ? entry.timings
              : null,
        }
      : null;
  } catch {
    return null;
  }
};
