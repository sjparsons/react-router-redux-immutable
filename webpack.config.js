var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const PORT = 3000;

module.exports = {
    devtool: '#inline-source-map',

    entry: [
        './src/index'
    ],
    module: {
        loaders: [
            {
                test: /\.(js|jsx)?$/,
                exclude: [/node_modules/],
                loader: 'babel'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './static',
        port: PORT
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: "Example: React Router Redux Immutable"
        })
    ]
};
