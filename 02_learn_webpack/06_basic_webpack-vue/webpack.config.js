const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader/dist/index');
module.exports = {

  //设置模式
  //development 开发阶段
  //production 准备打包上线阶段
  mode: "development",
  //建立js映射文件，方便调试代码和错误
  devtool:"source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "js/bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/, //匹配css结尾  
        use: [
          //1.
          //1{loader:'css-loader'}
          //2.从上往下
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            //也可以单独放到一个配置文件中post.config.js
            // plugins:[
            //     require('autoprefixer')
            // ]
          },
        ],
      },
      {
        //1.处理less
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
      
        test: /\.(jpe?g|png|gif|svg)$/,
        type: "asset",
        generator: {
          filename: "img/[name]_[hash:6][ext]",
        },
        parser: {
            dataUrlCondition: {
                //限制最大尺寸
              maxSize: 300 * 1024
            }
          }

      },
      // {
      //   test: /\.js$/,
      //   use:{
      //     loader:"babel-loader",
      //     options:{
      //       // plugins:["@babel/plugin-transform-arrow-functions"]
      //       //babel对js预设的设置，还可以单独放到一个独立的配置文件
      //       presets:[
      //         "@babel/preset-env"
      //       ]
            
      //     }
      //   }
      // },
      {
        test:/\.js$/,
        use:"babel-loader", 
      },{
        test:/\.vue$/,
        use:"vue-loader"
      },
      {
        
            test: /\.(eot|ttf|woff2?)$/,
            type: "asset/resource",
            generator: {
              filename: "font/[name]_[hash:6][ext]"
            }
          
      }
    ],
  },
  plugins:[
    new CleanWebpackPlugin(),
    //自定义打包入口文件模板
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "public"
    }),
    new DefinePlugin({
      BASE_URL: "'./'", //定义BASE_URL变量，在自定义的index.html中替换为当前路径
      __VUE_OPTIONS_API__: true,      //vue3兼容vue2 options api，默认为true，不写vue2可关闭
      __VUE_PROD_DEVTOOLS__: false    //不将vue-tool打包到生产环境中
      }),

    //复制插件
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          to: "./",
          globOptions: {
            ignore: [
              "**/index.html"
            ]
          }
        }
      ]
    }),
    new VueLoaderPlugin()
  ]
};
