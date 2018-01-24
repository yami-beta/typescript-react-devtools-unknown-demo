const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

let entry = {
  index: [path.join(__dirname, "src", "index.tsx")]
};

let plugins = [
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
  }),
  new HtmlWebpackPlugin({
    template: path.join(__dirname, "src", "index.html"),
    inject: true
  })
];

module.exports = {
  entry,
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ["awesome-typescript-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"]
      }
    ]
  },
  plugins,
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    publicPath: "/",
    historyApiFallback: true,
    watchContentBase: true
  }
};
