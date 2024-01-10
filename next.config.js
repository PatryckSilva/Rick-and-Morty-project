/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const withPWA = require("next-pwa")({
//   dest: "public",
//   disable: !isProd,
// });

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "ipfs.io",
      "atomichub-ipfs.com",
      "cloudflare-ipfs.com",
      "s3-us-west-2.amazonaws.com",
      "twitter.com",
      "banners-draft.s3.us-east-1.amazonaws.com",
      "res.cloudinary.com",
    ],
  },
  env: {
    apiEndpoint: process.env.API_ENDPOINT,
  },
};

module.exports = nextConfig;
