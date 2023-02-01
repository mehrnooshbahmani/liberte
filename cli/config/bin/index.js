#! /usr/bin/env node
const shell = require("shelljs");
const fs = require('fs');

const liberte_content = `const path =require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/public/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports={
    entry: './src/index.tsx',
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname,'dist'),
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [HTMLWebpackPluginConfig],
    mode: "development",
    devServer: {
        static:{
            directory: path.join(__dirname,'dist'),
        },
    },
    module: {
        rules: [
            { test: /\\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            },
            {
                test: /\\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
                options: {
                    compilerOptions: {
                        noEmit: false,
                    },
                },
            },
            {test: /\\.scss$/,
                exclude: /(node_modules)/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                ],
            },
            {
                test: /\\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {    test: /\\.(svg|png|jpeg|jpg|gif)$/,
                loader: "file-loader",
            }
        ]
    }
}`

    if (fs.existsSync('webpack.config.ts')){
        const webpack_content=fs.readFileSync('webpack.config.ts',{ encoding: 'utf8' })
        fs.truncateSync('webpack.config.ts',0);
        fs.appendFileSync('webpack.config.ts',`${liberte_content}\n /* ${webpack_content} */`,{ encoding: 'utf8' })
    }
    else {
        fs.writeFileSync( 'webpack.config.ts',`${liberte_content}\n` ,{ encoding: 'utf8' })
    }
    
    const liberte_babel=`{
  "presets": ["@babel/preset-env",["@babel/preset-react",  {"runtime": "automatic"}]],
  "plugins": [
    "syntax-decorators",
    ["transform-decorators-legacy", {
      "legacy": true
    }],
    ["transform-class-properties", {
      "spec": true
    }]
  ]
}`


if (fs.existsSync('.babelrc')){
    const app_babel=fs.readFileSync('.babelrc',{ encoding: 'utf8' })
    fs.truncateSync('.babelrc',0);
    fs.appendFileSync('.babelrc',`${liberte_babel}\n /* ${app_babel} */`,{ encoding: 'utf8' })
}
else {
    fs.writeFileSync( '.babelrc',`${liberte_babel}\n` ,{ encoding: 'utf8' })
}