// @ts-check
const path = require("path");

/** @type {import('next').NextConfig} */
const nextJSConfig = {
  swcMinify: true,
  eslint: {
    dirs: ["environment", "src"],
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "src", "styles")],
  },
};

module.exports = nextJSConfig;
