const path = require("path");
// const assetsDir = '../assets';

module.exports = {
  mode: "development",
  entry: { main: "./main.scss" },

  output: {
    // path: path.resolve(__dirname, "/"),
    filename: "main.js",
    publicPath: "",
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].css",
            },
          },
          {
            loader: "extract-loader",
          },
          {
            loader: "css-loader?-url",
          },
          // {
          //   loader: "postcss-loader",
          // },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },

  watch: true,
};
