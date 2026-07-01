import { BLOGS_DIR, DOMAIN, NOTES_DIR } from "../lib/constants";
import { getAllPostSlugs } from "../lib/post";
import { page } from "../lib/page";

// Next.js
import type { GetServerSideProps } from "next";

const STATIC_PATHS = [
  page.home.path,
  page.experience.path,
  page.note.path,
  page.blog.path,
  page.projects.path,
  page.talks.path,
  page.articles.path,
  page.guestbook.path,
  page.socials.path,
  page.music.path,
  page.branding.path,
  page.specs.path,
  page.contributors.path,
];

const url = (path: string, priority: string) => {
  return `<url><loc>https://${DOMAIN}${
    path === "/" ? "" : path
  }</loc><priority>${priority}</priority></url>`;
};

const generateSiteMap = () => {
  let posts: string[] = [];
  try {
    const blogs = getAllPostSlugs(BLOGS_DIR).map(
      ({ params }) => `${page.blog.path}/${params.slug}`
    );
    const notes = getAllPostSlugs(NOTES_DIR).map(
      ({ params }) => `${page.note.path}/${params.slug}`
    );
    posts = [...blogs, ...notes];
  } catch (error) {
    console.error("Failed to read posts for sitemap:", error);
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${STATIC_PATHS.map((path) => url(path, path === "/" ? "1.0" : "0.8")).join("\n")}
${posts.map((path) => url(path, "0.6")).join("\n")}
</urlset>`;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "text/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate"
  );
  res.write(generateSiteMap());
  res.end();

  return { props: {} };
};

const SiteMap = () => null;

export default SiteMap;
