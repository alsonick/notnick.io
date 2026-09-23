/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
