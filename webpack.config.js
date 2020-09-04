"use strict";
const path = require("path");
const { name, version } = require("./package.json");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserWebpackPlugin = require('terser-webpack-plugin');

let chunkName = `${name}-v${version}`;
// -后的首字母转大写
let libraryName = (function (str) {
  str = str.toLowerCase();
  let arr = str.split('-');
  if (arr.length > 1) {
    for (let i = 1, len = arr.length; i < len; i++) {
      arr[i] = arr[i].replace(arr[i].charAt(0), (s) => s.toUpperCase());
    }
    return arr.join('');
  }
  return str;
})(name);

module.exports = {
  mode: "development",
  entry: {
    [chunkName]: "./src/index.ts",
    [`${chunkName}.min`]: "./src/index.ts",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].js',
    library: libraryName,
    libraryTarget: 'umd',
    libraryExport: 'default'
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
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        // 只压缩min版本
        include: /\.min.js$/
      })
    ]
  },
  plugins: [new CleanWebpackPlugin()],
};
