const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

let mode = "development";
const plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: "./src/index.html",
  }),
];

if (process.env.NODE_ENV === "production") {
  mode = "production";
}

module.exports = {
  mode,
  plugins,

  output: {
    path: path.resolve(__dirname, "./dist"),
    assetModuleFilename: "images/[hash][ext][query]",
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
            plugins: ["babel-plugin-styled-components"],
          },
        },
      },
    ],
  },

  devtool: "source-map",
  devServer: {
    static: "./dist",
    hot: true,
  },
};
