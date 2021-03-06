/**
 * Created by CAOYI on 2018/1/8.
 */
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const WebpackConfig = require('./webpack.config');

const app = express();
const compiler = webpack(WebpackConfig);

app.use(webpackDevMiddleware(compiler, {
    publicPath: '/dist/',
    //控制输出
    stats: {
        colors: true,
        chunks: false
    }
}));

app.use(webpackHotMiddleware(compiler));

app.use(express.static(__dirname));

app.use(function(req, res, next){
    res.sendFile(__dirname+'/index.html');
 
})

app.use(function(err, req, res, next){
    console.error('500',err);
});

const port = process.env.PORT || 3001
module.exports = app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`)
})