const fs      = require('fs')
const path    = require('path')
const webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: 'source-map',
    entry  : {
        app: path.join(__dirname, 'src', 'app.js')
    },
    output : {
        path      : path.join(__dirname, 'dist'),
        filename  : '[name].js',
        publicPath: '/'
    },
    module : {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.vue$/, loader: 'vue-loader'},
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                }
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'base',
            template: './index.html'
        })
    ],
    resolve: {
        alias: {    
            'vue$': 'vue/dist/vue.common.js',
            '@': resolveSrc('src'),
        },
        extensions: ['.js', '.vue', '.json'],
    }
};

function resolveSrc(dir) {
    return path.join(__dirname, dir)
}
