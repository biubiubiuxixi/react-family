const path = require('path');

module.exports = {
        // 入口
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, 'src/index.js')
    ],

    // 输出到dist文件夹，输出文件名为bundle.js
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    // src文件夹下面的以.js结尾的文件，要使用babel解析
    // cacheDirectory是用来缓存编译结果，下次编译加速
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        }]
    },

    // 配置服务
    // port：配置要监听的端口 默认8080
    // contentBase：URL的根目录。如果不设定的话，默认指向项目根目录
    // historyApiFallback：让所有的404定位到index.html
    // host 指定一个host,默认是localhost, 可以ip访问
    devServer: {
        port: 1267,
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        host: '0.0.0.0',
    },

    // 文件路径优化
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            component: path.join(__dirname, 'src/component'),
            router: path.join(__dirname, 'src/router')
        }
    }
};
