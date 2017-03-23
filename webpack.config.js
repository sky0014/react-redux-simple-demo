module.exports = {
    devtool: 'source-map',

    entry: __dirname + "/app/js/index.js",
    output: {
        path: __dirname + "/dist/js",
        filename: "bunder.js"
    },

    devServer: {
        contentBase: "./dist", //本地服务器所加载的页面所在的目录
        port: "8001",
        colors: true //终端中输出结果为彩色    
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-3']
                }
            }, {
                test: /\.css$/,
                loader: 'style!css?camelCase=true'
            }, {
                test: /\.styl$/,
                loader: 'style!css!stylus'
            }, {
                test: /\.(png)|(jpg)|(jpeg)$/,
                loader: 'url?limit=50000'
            }
        ]
    }
};