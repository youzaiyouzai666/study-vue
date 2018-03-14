const path = require('path');
const projectRoot = path.resolve(__dirname, '..');

module.exports = {
    target: 'node',
    entry: path.resolve(projectRoot, './src/js/entry-server.js'),
    output:{
        path: path.resolve(projectRoot, './dist'),
        filename: 'bundle.server.js',
        libraryTarget: 'commonjs2',
    },
    module:{
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: projectRoot,
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    }
}