const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.comm.config");

module.exports = merge(commonConfig, {
  //设置模式
  //development 开发阶段
  //production 准备打包上线阶段
  mode: "development",
  devtool: "source-map",
  devServer: {
    //当index.html script访问不到资源时，加载这个资源文件夹，一般用在开发阶段，避免频繁copy耗费性能
    //contentBase/contentBasePublicPath/serveIndex/watchContentBase/watchOptions/staticOptions options were moved to static option
    //现在用contentBase会报错
    static: "./public",
    hot: true,
    port: 7777,
    // compress:true //开启gzip压缩
    //"/api"映射， 开启代理，解决跨域问题，
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:8888",
    //     //不把/api写进路径
    //     pathRewrite: {
    //       "^/api": "",
    //     },
    //     secure: false,
    //     changeOrigin: true,
    //   },
    // },
  },
  
});
