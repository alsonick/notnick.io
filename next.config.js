/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.discordapp.com", "i.scdn.co"],
  },
};

module.exports = nextConfig;
