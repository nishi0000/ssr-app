module.exports = {
  entry: "./server/index.js",
  target: "node",
  output: {
    path: `${__dirname}/build`,
    filename: "index.js",
  },
  devServer: {
    static: {
      directory: "./dist",
    },
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  mode: "development",
  module: {
    rules: [
      { test: /\.tsx$/, loader: "babel-loader", exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/, // 画像ファイルの拡張子を追加
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]", // 画像ファイルの名前を保持
              outputPath: "images/", // 出力ディレクトリを指定
            },
          },
        ],
      },
    ],
  },
};
