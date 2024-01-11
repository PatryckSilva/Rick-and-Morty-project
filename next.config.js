/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const withPWA = require("next-pwa")({
//   dest: "public",
//   disable: !isProd,
// });

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["rickandmortyapi.com"],
  },
  env: {
    apiEndpoint: process.env.API_ENDPOINT,
  },
};

module.exports = nextConfig;
