// Posts that changed section: notes are for study material, the blog for
// everything personal. Their old addresses redirect so shared links still work.
const MOVED_TO_BLOG = [
  "cutting-sugar-from-my-diet",
  "deleting-social-media",
  "how-i-learn-programming",
  "plans-for-the-summer-break",
  "technologies-im-learning-in-2023",
  "why-im-obsessed",
];
const MOVED_TO_NOTES = ["subnetting-explained-in-computer-networking"];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      ...MOVED_TO_BLOG.map((slug) => ({
        source: `/note/${slug}`,
        destination: `/blog/${slug}`,
        permanent: true,
      })),
      ...MOVED_TO_NOTES.map((slug) => ({
        source: `/blog/${slug}`,
        destination: `/note/${slug}`,
        permanent: true,
      })),
    ];
  },
  // Both of these read the markdown in `posts` at runtime from a path built at
  // runtime too, which the file tracer cannot follow. Naming the files they
  // need keeps it from falling back to bundling the whole project directory.
  outputFileTracingIncludes: {
    "/sitemap.xml": ["./posts/**/*"],
    "/api/post-section": ["./posts/**/*"],
  },
  images: {
    qualities: [99, 100],
    remotePatterns: [
      { protocol: "https", hostname: "cdn.discordapp.com" },
      { protocol: "https", hostname: "i.scdn.co" },
      { protocol: "https", hostname: "cdn.notnick.io" },
    ],
  },
};

module.exports = nextConfig;
