const path = require('path');
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname,"./build"),
        filename:"bundle.js"
    },
    module:{
        rules:[
            {
                test:/\.css$/,  //匹配css结尾
                use:[
                    
                    'style-loader',
                    'css-loader',
                    {
                        loader:"postcss-loader",
                        plugins:[
                            require('autoprefixer')
                        ]
                    }
                ]
            },{
                //1.处理less
                test: /.\less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            
        ]
    }
}