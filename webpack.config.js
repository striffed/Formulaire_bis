const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports ={
    entry: './src/index.js',
    output: {

        filename : '[name].[contentHash].js',
        path: path.resolve(__dirname, 'dist'),
    },

        devServer: {
            contentBase: path.join(__dirname, 'dist'),
        },

        module: {
            rules: [
            {
            test: /\.css$/,
            use: [MinicssExtractPlugin.loader, 'css-loader'],
            }
        ],
    },

    plugins: [
               
        new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: true,
        filename: 'index.html'
        }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
       ],

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
    },

    },
}