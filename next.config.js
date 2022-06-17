const withPWA = require("next-pwa");
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");
/* eslint-disable */
const withLess = require("@zeit/next-less");
const withCSS = require("@zeit/next-css");

module.exports = withCSS(
  withLess(
    withPWA({
      pwa: {
        disable: true,
        dest: "public",
      },
      lessLoaderOptions: {
        javascriptEnabled: true,
        localIdentName: "[local]___[hash:base64:5]",
      },
    })
  )
);
