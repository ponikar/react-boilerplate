const path = require("path");
module.exports = {
  ...require("./webpack.config"),
  mode: "development",
  devServer: {
    // static: {
    //   // publicPath: "/",
    // },
    compress: true,
    port: 3002,
  },
};
