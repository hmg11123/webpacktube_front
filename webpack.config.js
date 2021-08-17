"use strict";
// strict Mode는 코드에 더 나은 오류검사를 적용하는 방법
// 참고 사이트 : https://ithub.tistory.com/162
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
 resolve: {
  extensions: [`.js`, `.jsx`],
 },

 entry: {
  main: ["./src/main.js"],
 },
 node: {
  fs: "empty",
  net: "empty",
 },
 output: {
  path: path.resolve(__dirname, "./build"),
  filename: "[name].js",
 },
 module: {
  rules: [
   {
    test: /\.(js|jsx)$/,
    include: path.resolve(__dirname, "./src"),
    loader: "babel-loader",
   },
   {
    test: /\.css$/,
    loader: "style-loader!css-loader",
   },
  ],
 },
 plugins: [
  new CopyWebpackPlugin([
   {
    context: "./public",
    from: "*.*",
   },
  ]),
  new Dotenv(),
 ],
 devServer: {
  contentBase: "./public",
  host: "localhost",
  port: 3000,
  proxy: {
   "**": "http://localhost:7000",
  },
 },
 devtool: "eval-source-map",
};
