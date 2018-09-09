const { resolve } = require('path')
const {
  LoaderOptionsPlugin,
  HotModuleReplacementPlugin,
/* eslint-disable import/no-extraneous-dependencies */
} = require('webpack')
const merge = require('webpack-merge')

const { config, DIST } = require('./common')


module.exports = merge(config, {
  profile: true,
  mode: 'development',

  output: {
    filename: '[name].js',
    path: DIST,
    pathinfo: true,
  },

  performance: {
    hints: false,
  },

  plugins: [
    new LoaderOptionsPlugin({
      debug: true,
      minimize: false,
    }),
    new HotModuleReplacementPlugin(),
  ],

  devServer: {
    contentBase: resolve(__dirname, '..', 'public'),
    hot: true,
    host: 'localhost',
    historyApiFallback: true,
    port: 3001,
  },
})
