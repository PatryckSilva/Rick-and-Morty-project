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
    atomicTestnet: process.env.ATOMIC_TESTNET,
    atomicMainet: process.env.ATOMIC_MAINET,
    bloksTestnet: process.env.BLOKS_TESTNET,
    bloksMainet: process.env.BLOKS_MAINET,
    contractAccountMainet: process.env.CONTRACT_ACCOUNT_MAINET,
    contractAccountTestnet: process.env.CONTRACT_ACCOUNT_TESTNET,
    collectionNameMainet: process.env.COLLECTION_NAME_MAINET,
    collectionNameTestnet: process.env.COLLECTION_NAME_TESTNET,
    ga_tracking: process.env.GA_TRACKING,
    chainIdMainet: process.env.CHAIN_ID_MAINET,
    chainIdTestnet: process.env.CHAIN_ID_TESTNET,
    appNameTest: process.env.APP_NAME_TEST,
    appNameMainet: process.env.APP_NAME_MAINET,
    host: process.env.HOST,
  },
};

module.exports = nextConfig;
