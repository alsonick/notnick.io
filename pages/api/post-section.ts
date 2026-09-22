import { BLOGS_DIR, NOTES_DIR } from "../../lib/constants";
import { getPostMarkdown, getPostSection } from "../../lib/post-sections";
import { page } from "../../lib/page";
import matter from "gray-matter";
import path from "path";
import fs from "fs";

// Next.js
import type { NextApiRequest, NextApiResponse } from "next";

const DIRECTORIES: Record<string, string> = {
  [page.blog.name]: BLOGS_DIR,
  [page.note.name]: NOTES_DIR,
};

/** Post slugs and section ids are both slugs, so anything else is a bad request. */
const SLUG = /^[a-z0-9-]+$/;

/**
 * Serves a post's Markdown for the download buttons: one `###` section with
 * `section`, or the whole post without it. Slicing here rather than shipping
 * the source in the page props keeps a long post's payload as it was.
 */
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { type, slug, section } = req.query as {
    type?: string;
    slug?: string;
    section?: string;
  };

  const directory = type ? DIRECTORIES[type] : undefined;
  if (!directory || !slug || !SLUG.test(slug)) {
    return res.status(400).send("Missing or unknown post.");
  }

  if (section !== undefined && !SLUG.test(section)) {
    return res.status(400).send("Missing or unknown post.");
  }

  const file = path.join(process.cwd(), directory, `${slug}.md`);
  if (!fs.existsSync(file)) {
    return res.status(404).send("No such post.");
  }

  const post = matter(fs.readFileSync(file, "utf8"));

  const found = section
    ? getPostSection(post.content, section)
    : {
        topic: (post.data.title as string | undefined) ?? slug,
        markdown: getPostMarkdown(post.content),
      };

  if (!found) {
    return res.status(404).send("No such section.");
  }

  const name = `${sanitize(found.topic)}.md`;

  res.setHeader("Content-Type", "text/markdown; charset=utf-8");
  res.setHeader(
    "Content-Disposition",
    `attachment; filename="${asciiName(name)}"; filename*=UTF-8''${encodeURIComponent(
      name,
    )}`,
  );
  return res.status(200).send(found.markdown);
}

/** Drops the characters a file name can't hold on Windows or macOS. */
function sanitize(topic: string): string {
  return topic.replace(/[\\/:*?"<>|]/g, "-").trim();
}

/** The plain `filename` is the fallback for clients that ignore `filename*`. */
function asciiName(name: string): string {
  return name.replace(/[^\x20-\x7e]/g, "-").replace(/"/g, "'");
}
