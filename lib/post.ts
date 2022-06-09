import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import path from "path";
import fs from "fs";

let directoryPath: string;

const getDirectory = (dir: string) => {
  return path.join(process.cwd(), dir);
};

export const getSortedPostData = (dir: string) => {
  const directory = getDirectory(dir);
  directoryPath = directory;

  const fileNames = fs.readdirSync(directory);
  const allNotesData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");

    const fullPath = path.join(directoryPath, fileName);
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

export const getAllNoteSlugs = (dir: string) => {
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

export const getNoteData = async (slug: any, dir: string) => {
  const directory = getDirectory(dir);
  const fullPath = path.join(directory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...matterResult.data,
  };
};
