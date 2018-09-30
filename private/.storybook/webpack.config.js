const { resolve } = require('path');
const SRC = resolve(__dirname, '../../', 'src');

module.exports = {
    context: SRC,
    plugins: [
      // your custom plugins
    ],
    resolve: {
        extensions: ['.mjs', '.js', '.jsx'],
        modules: [
          'node_modules',
          SRC,
        ],
    },
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: 'react-svg-loader',
        },
        {
          test: /\.story.js$/,
          use: 'babel-loader',
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          loader: require.resolve('url-loader'),
          options: {
              limit: 2048,
              name: 'assets/[name].[hash:8].[ext]',
          },
        }
      ],
    },
  };