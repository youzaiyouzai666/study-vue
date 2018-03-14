var path = require('path');
const projectRoot = path.resolve(__dirname, '..');

module.exports = {
    entry: path.resolve(projectRoot, './src/js/entry-client.js'),
    output: {
        path: path.resolve(projectRoot, './dist'),
        filename: 'bundle.client.js',
    },
    module: {
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