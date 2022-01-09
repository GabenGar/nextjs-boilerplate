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
  /**
   * @param {import("webpack").Configuration} config
   */
  webpack: (config, { isServer }) => {

    if (isServer) {
      // import `.sql` as inline strings
      config.module.rules.push({
        test: /\.sql$/i,
        type: "asset/source",
      });
    }

    return config;
  },
};

module.exports = nextJSConfig;
