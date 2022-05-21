import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

const notesDirectory = path.join(process.cwd(), "data/notes");

export const getSortedNotesData = () => {
  // Get file names under data/notes
  const fileNames = fs.readdirSync(notesDirectory);
  const allNotesData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get slug
    const slug = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(notesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the slug
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

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       slug: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       slug: 'pre-rendering'
  //     }
  //   }
  // ]

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

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the slug
  return {
    slug,
    contentHtml,
    ...matterResult.data,
  };
};
