import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

const notesDirectory = path.join(process.cwd(), "data/notes");

export const getSortedNotesData = () => {
  const fileNames = fs.readdirSync(notesDirectory);
  const allNotesData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");

    const fullPath = path.join(notesDirectory, fileName);
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

export const getAllNoteSlugs = () => {
  const fileNames = fs.readdirSync(notesDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
};

export const getNoteData = async (slug: any) => {
  const fullPath = path.join(notesDirectory, `${slug}.md`);
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
