const { resolve } = require('path');
const {
  EnvironmentPlugin,
  DefinePlugin,
  HotModuleReplacementPlugin
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
      vendor: ['styled-components', 'styled-theme', 'styled-tools', 'redux' ,'react-color'],
      index: ['./index'],
    },
    output: {
      filename: '[name].js',
      path: DIST,
      pathinfo: true,
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
        template: 'index.html',
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