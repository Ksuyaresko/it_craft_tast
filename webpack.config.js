const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");

module.exports = function(env, argv) {
    return {
        entry: {
            main: './src/app.js',
            ie: './src/ie.js'
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js'
        },
        module: {
            rules: [{
                test: /\.sass$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                    // loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'postcss-loader'
                },{
                    loader: 'sass-loader',
                    options: {
                        includePaths: ['absolute/path/a', 'absolute/path/b']
                    }
                }]
            },
                {
                    test: /\.svg$/,
                    use: [
                        'svg-sprite-loader',
                        'svgo-loader'
                    ],
                    exclude: path.resolve(__dirname, 'src/sass')
                },
                {
                    test: /\.(png|jpe?g|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'img/[name].[ext]',
                            },
                        },
                    ],
                },
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: '[id].css',
            }),
            new SpriteLoaderPlugin(),
            new webpack.LoaderOptionsPlugin({
                options: {
                    postcss: [
                        autoprefixer()
                    ]
                }
            })
        ]
    }
};