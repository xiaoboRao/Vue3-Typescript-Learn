const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");

const { VueLoaderPlugin } = require('vue-loader/dist/index');
module.exports = {

  target:"web",
  
  resolve:{
    //当引用以下结尾的文件时，不需要加后缀
    extensions:[".js",".json",".mjs","ts",".vue",".tsx",".jsx"],
    alias:{
      //配置别名
      "@":path.resolve(__dirname,'../src'),
      "js":path.resolve(__dirname,'../src/js'),
    }
  },
 

  //有些插件配置是相对于根路径，
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../build"),
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
        test:/\.js$/,
        use:"babel-loader", 
      },{
        test:/\.vue$/,
        use:"vue-loader"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: "asset",
        generator: {
          filename: "img/[name]_[hash:6][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
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

   
    new VueLoaderPlugin()
  ]
};
