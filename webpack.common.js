import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  entry: {
    home: "./src/index.js",
    projects: "./src/projects-page.js",
  },

  output: {
    filename: "[name].[contenthash].js",

    path: path.resolve(
      import.meta.dirname,
      "dist"
    ),

    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      filename: "index.html",
      chunks: ["home"],
    }),

    new HtmlWebpackPlugin({
      template: "./src/projects.html",
      filename: "projects.html",
      chunks: ["projects"],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
        ],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource",
      },
    ],
  },
};