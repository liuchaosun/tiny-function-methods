"use strict";
const path = require("path");
const { name, version } = require("./package.json");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: `${name}-v${version}.min.js`,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["babel-loader", "eslint-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
