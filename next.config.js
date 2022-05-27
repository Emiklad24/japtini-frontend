/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ["api.japtini.ceeless.com"],
  },
};

module.exports = nextConfig;
