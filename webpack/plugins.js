const {
    EnvironmentPlugin,
    DefinePlugin
  } = require('webpack');
const { NODE_ENV = 'development' } = process.env;

const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = [
    new HtmlWebPackPlugin({
        title: 'Colorix',
        template: 'index.tpl.html',
      }),
      new EnvironmentPlugin({
        NODE_ENV,
      }),
    new DefinePlugin({
        __CLIENT__: 'true',
    }),
];