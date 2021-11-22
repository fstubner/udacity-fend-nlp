const path = require('path');
const webpack = require('webpack');
const HTMLWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    mode: 'production',
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
            },
            {
                test: /.s?css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ]
    },
    plugins: [
        new HTMLWebPackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({ filename: "[name].css" }),
        new WorkboxPlugin.GenerateSW(),
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
        library: 'Client'
    },
    optimization: {
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin(),
        ],
    },
    stats: {
        nestedModules: true,
        dependentModules: true,
        groupModulesByPath: true
    }
}