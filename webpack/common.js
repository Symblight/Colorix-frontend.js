const { resolve } = require('path');

const DIST = resolve(__dirname, '..', 'dist');
const SRC = resolve(__dirname, '..', 'src');

const rules = require('./rules');
const plugins = require('./plugins');

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
        extensions: ['.mjs', '.js', '.jsx'],
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
    plugins: [ ...plugins],
    stats: {
        colors: true,
        children: false,
    },
};

module.exports = {
    config,
    DIST
};  