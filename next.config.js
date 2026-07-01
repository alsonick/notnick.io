/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingIncludes: {
    "/sitemap.xml": ["./posts/**/*"],
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
