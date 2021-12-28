const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.comm.config');
module.exports =merge(commonConfig,{
    //设置模式
    //development 开发阶段
    //production 准备打包上线阶段
    mode: "production",
    plugins: [
      //复制插件
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "public",
            to: "./",
            globOptions: {
              ignore: ["**/index.html"],
            },
          },
        ],
      }),
      new CleanWebpackPlugin(),
    ],
  }) 
