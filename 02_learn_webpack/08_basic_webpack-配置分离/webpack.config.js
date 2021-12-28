const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader/dist/index');
module.exports = {

  target:"web",
  devServer:{
    //当index.html script访问不到资源时，加载这个资源文件夹，一般用在开发阶段，避免频繁copy耗费性能
    //contentBase/contentBasePublicPath/serveIndex/watchContentBase/watchOptions/staticOptions options were moved to static option
    //现在用contentBase会报错
    static: "./public",
    hot:true,
    port:8081,
    // compress:true //开启gzip压缩
    //"/api"映射， 开启代理，解决跨域问题，
    proxy:{
      
      "/api":{
        target:"http://localhost:8888",
        //不把/api写进路径
        pathRewrite:{
          "^/api":""
        },
        secure:false,
        changeOrigin:true
      }
    }

  },
  resolve:{
    //当引用以下结尾的文件时，不需要加后缀
    extensions:[".js",".json",".mjs","ts",".vue",".tsx",".jsx"],
    alias:{
      //配置别名
      "@":path.resolve(__dirname,'./src'),
      "js":path.resolve(__dirname,'./src/js'),
    }
  },
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
        // test: /\.(jpe?g|png|gif|svg)$/,
        // use: [{
        //   loader: "file-loader",
        //   options: {
        //     // outputPath: "img",
        //     //可以直接写路径名
        //     name: "img/[name]_[hash:6].[ext]",
        //   },
        //webpack5不再使用url-loader，file-loader，要使用要配置，esModule:false，type: 'javascript/auto'
        // loader: "url-loader",
        //   options: {
        //     // outputPath: "img",
        //     //可以直接写路径名
        //     name: "img/[name]_[hash:6].[ext]",
        //     //超过300kb进行base打包到bundle.js
        //     //好处：小图片合成到bundlejs，减少网络请求
        //     limit:300*1024,
        //     esModule:false

        //   },
        // {

        // }

        // }],
        //    type: 'javascript/auto'

        //webpack5的写法

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
