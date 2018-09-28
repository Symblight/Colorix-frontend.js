const { resolve } = require('path');
const {
  LoaderOptionsPlugin,
  HotModuleReplacementPlugin,
} = require('webpack');
const merge = require('webpack-merge');

const { config, DIST } = require('./common');

const PORT = 3001;

module.exports = merge(config, {
  mode: 'development',

  performance: {
    hints: false,
  },
  plugins: [
    new HotModuleReplacementPlugin(),
  ],

  devServer: {
    contentBase: resolve(__dirname, '..', 'public'),
    hot: true,
    noInfo: false,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false,
    },
    host: 'localhost',
    historyApiFallback: true,
    port: PORT,
    watchOptions: { aggregateTimeout: 300, poll: 1000 },
  },
})