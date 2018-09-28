const { resolve } = require('path');
const {
  EnvironmentPlugin,
  DefinePlugin,
} = require('webpack');

const HtmlWebPackPlugin = require('html-webpack-plugin');

const DIST = resolve(__dirname, '..', 'dist');
const SRC = resolve(__dirname, '..', 'src');
const { NODE_ENV = 'development' } = process.env;

const rules = require('./rules');

const config = {
    context: SRC,
    target: 'web',
  
    entry: {
      vendor: ['styled-components'],
      index: ['./index'],
    },
    output: {
        path: DIST,
        publicPath: '/',
        filename: '[name].[hash].js',
    },
    optimization: {
        splitChunks: {
          cacheGroups: {
            vendor: {
              chunks: 'initial',
              test: 'vendor',
              name: 'vendor',
              enforce: true,
            },
          },
        },
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
        ...rules
      ]
    },
    plugins: [ 
      new HtmlWebPackPlugin({
        title: 'Colorix',
        template: 'index.tpl.html',
      }),
      new EnvironmentPlugin({
        NODE_ENV,
      }),
    ],
    stats: {
        colors: true,
        children: false,
    },
};

module.exports = {
    config,
    DIST
};  