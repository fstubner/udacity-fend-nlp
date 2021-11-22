const path = require('path');
const webpack = require('webpack');
const HTMLWebPackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        port: 8080,
        static: './dist/',
    },
    entry: './src/client/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HTMLWebPackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html'
        }),
        new FaviconsWebpackPlugin({
            logo: './src/client/images/logo.png',
            favicons: {
                icons: {
                    favicons: true,
                    appleStartup: false,
                    appleIcon: false,
                    android: false,
                    windows: false,
                    yandex: false
                }
            }
        })
    ],
    output: {
        clean: true,
        libraryTarget: 'var',
        library: 'Client',
    },
    stats: {
        nestedModules: true,
        dependentModules: true,
        groupModulesByPath: true
    }
}