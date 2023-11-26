/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // skipTrailingSlashRedirect:true,
  // skipMiddlewareUrlNormalize:true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.digikala.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
