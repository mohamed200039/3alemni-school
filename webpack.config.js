const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/main.js",

  output: {
    filename: "js/main.bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),

    new HtmlWebpackPlugin({
      template: "./public/student-one.html",
      filename: "student-one.html",
    }),

    new HtmlWebpackPlugin({
      template: "./public/student-two.html",
      filename: "student-two.html",
    }),

    new HtmlWebpackPlugin({
      template: "./public/login.html",
      filename: "login.html",
    }),

    new HtmlWebpackPlugin({
      template: "./public/register.html",
      filename: "register.html",
    }),
  ],
};
