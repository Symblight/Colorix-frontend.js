const { resolve } = require('path');
const {
  LoaderOptionsPlugin,
  HotModuleReplacementPlugin,
} = require('webpack');
const merge = require('webpack-merge');

const { config, DIST } = require('./common');

const PORT = 3001;

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
    noInfo: false,
    inline: false,
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
  },
})