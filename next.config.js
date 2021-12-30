const path = require('path');

/** @type {import('next').NextConfig} */
const nextJSConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "src", "styles")],
  },
}


module.exports = nextJSConfig
