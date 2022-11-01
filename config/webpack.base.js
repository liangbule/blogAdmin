const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const cont = process.env.NODE_ENV === "production"
//自定义loader
const getStyleLoader = (pre) => {
    return [
        cont ? MiniCssExtractPlugin.loader : "style-loader", 'css-loader',
        {
            // 配合packge.json 文件browserslist处理兼容问题
            loader: "postcss-loader",
            options: {
                postcssOptions: {
                    plugins: [
                        "postcss-preset-env",
                    ]
                }
            }
        },
        pre,
    ].filter(Boolean)
}
module.exports = {
    //    模式
    mode: "development",
    //入口
    entry: '../src/index.tsx', // 相对路径
    // 输入
    output: {
        //    文件输出路径
        path: cont ? path.resolve(__dirname, '../dist') : undefined,
        //    文件名
        filename: "js/[name].js",
        chunkFilename: "js/[name].chunk.js",
        clean: true
    },
    //    加载器
    module: {
        rules: [
            {test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.(ts|tsx)$/, loader: 'ts-loader', exclude: /node_modules/},
            //    loader配置
            {
                test: /\.css$/, // 检测.css结尾文件
                use: getStyleLoader()
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    "postcss-preset-env",
                                ]
                            }
                        }
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [{
                    loader: "css-loader"
                },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    "postcss-preset-env",

                                ]
                            }
                        }
                    },
                    {
                        loader: "sass-loader",
                    }]
            },
            {
                test: /\.(jpe?g|png|gif|svg|woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
        ],
    },
    // 缓存构建速度
    // cache: {
    //     type: 'filesystem',
    //     // 可选配置
    //     buildDependencies: {
    //         config: [__filename], // 当构建依赖的config文件（通过 require 依赖）内容发生变化时，缓存失效
    //     },
    //     name: 'development-cache',
    // },
    //   插件
    plugins: [
        new HtmlWebpackPlugin({
            title: '管理后台',
            template: path.resolve(__dirname, "../public/index.html"),
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name]-[hash:3].css",
        }),
    ],
    // 解析模块
    resolve: {
        extensions: ['*', '.js', '.jsx', ".json", ".tsx", ".ts"],
    },
}
