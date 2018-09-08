const { resolve } = require('path');

const HtmlWebPackPlugin = require("html-webpack-plugin");

const { NODE_ENV = 'development' } = process.env;
const IS_PROD = NODE_ENV === 'production';
const IS_DEV = NODE_ENV === 'development';
const IS_TEST = NODE_ENV === 'test';

const DIST = resolve(__dirname, '..', 'dist');
const SRC = resolve(__dirname, '..', 'src/client');

const config = {
    context: SRC,
    target: 'web',

    entry: {
        index: ['./index'],
    },

    output: {
        path: DIST,
        publicPath: '/',
    },
    
    resolve: {
        extensions: ['.mjs', '.js'],
        modules: [
          'node_modules',
          SRC,
        ],
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                }
             },
           {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader"
              }
            ]
           }
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: "index.html"
          })
    ],

    stats: {
        colors: true,
        children: false,
    },

};

module.exports = {
    config,
  
    IS_DEV,
    IS_PROD,
    IS_TEST,
  
    DIST,
    SRC,
};