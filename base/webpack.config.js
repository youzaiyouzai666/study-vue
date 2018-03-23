const fs      = require('fs')
const path    = require('path')
const webpack = require('webpack')

module.exports = {
    devtool: 'inline-source-map',
    entry  : {
        app: path.join(__dirname, 'src', 'app.js')
    },
    output : {
        path      : path.join(__dirname, 'dist'),
        filename  : '[name].js',
        publicPath: '/dist/'
    },
    module : {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.vue$/, loader: 'vue-loader'}
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        alias: {    'vue$': 'vue/dist/vue.common.js'  },
        extensions: ['.js', '.vue', '.json'],
    }
};