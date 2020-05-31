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
                    test: /\.html$/,
                    use: {
                        loader: "html-loader"
                    }
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [{loader: 'file-loader',}],
                      },
            {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
             test:/\.scss$/,
             use: ['style-loader',
             { loader: 'css-loader', options: { importLoaders: 1 } },
             {
                 loader: 'postcss-loader',
                 options:{
                     plugins: (loader) => [
                     require('autoprefixer')({
                         browsers: ["last 2 versions", 'ie > 8']
                     }
                     ),
                    ]
                
                 }
             },
            'sass-loader']
            }
        ],
    },


    resolve:{extensions: ['.js','.scss']},

    plugins: [
               
        new HtmlWebpackPlugin({
        template: './src/connexion.html',
        inject: true,
        filename: 'connexion.html'
        }),
        
        new HtmlWebpackPlugin({
            template: './src/inscription.html',
            inject: true,
            filename: 'inscription.html'
            }),
            
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
       ],

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
    },
}