/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.usamaejaz.com",
      },
    ],
  },
};

module.exports = nextConfig;
