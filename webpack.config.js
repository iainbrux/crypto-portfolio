const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { webpack } = require("webpack");

module.exports = {
  entry: "./src/index.js",
  devServer: {
    open: true,
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "src/index.html" })],
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
  },
};
