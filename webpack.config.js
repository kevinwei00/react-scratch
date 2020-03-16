const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  output: {
    filename: "[name].bundle.js", // easier debugging (app.bundle.js)
    path: path.resolve(__dirname, "build"), // output to local disk directory
    //publicPath: "/assets/" // public URL of output (localhost:8080/assets/)
  },
  devServer: {
    port: 8080,
    contentBase: path.resolve(__dirname, "src") // serve from project directory for live reload
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./public/index.html"
    })
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  }
};
