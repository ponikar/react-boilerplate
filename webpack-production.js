const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const path = require("path");
module.exports = {
  ...require("./webpack.config"),
  mode: "production",
  output: {
    path: path.resolve(process.cwd(), "dist"),
    publicPath: "/", // instead of publicPath: '/build/'
    filename: "main.[fullhash].js",
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin(), new UglifyJsPlugin()],
  },
};
