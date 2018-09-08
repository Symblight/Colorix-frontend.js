const { resolve } = require('path');
const merge = require('webpack-merge');

const { config, DIST } = require('./common');

module.exports = merge(config, {
    profile: true,
    mode: "development",
  
    output: {
      filename: '[name].js',
      path: DIST,
      pathinfo: true,
    },
  
    performance: {
      hints: false,
    },
  
    plugins: [
     // new HotModuleReplacementPlugin(),
    ],
  
    devServer: {
      contentBase: resolve(__dirname, '..', 'public'),
      // hot: true,
      noInfo: true,
      historyApiFallback: true,
      inline: false,
      stats: {
        colors: true,
        chunks: false,
        children: false,
      },
      watchOptions: {
        aggregateTimeout: 300,
        poll: true,
      },
      port: 3001,
      host: 'localhost',
    },
  })