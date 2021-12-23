const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
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
      {
        
            test: /\.(eot|ttf|woff2?)$/,
            type: "asset/resource",
            generator: {
              filename: "font/[name]_[hash:6][ext]"
            }
          
      }
    ],
  },
};
