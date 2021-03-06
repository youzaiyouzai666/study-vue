/**
 * Created by CAOYI on 2018/1/8.
 */
const path = require('path');

const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const WebpackConfig = require('./webpack.config');

const app = express();
const compiler = webpack(WebpackConfig);

console.log('WebpackConfig.output.publicPath,',WebpackConfig.output.publicPath);
app.use(webpackDevMiddleware(compiler, {
    publicPath: WebpackConfig.output.publicPath,
    //控制输出
    stats: {
        colors: true,
        chunks: false
    }
}));

app.use(webpackHotMiddleware(compiler));

// app.use(express.static(path.join(__dirname,'dist')));

const port = process.env.PORT || 3004
module.exports = app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`)
})