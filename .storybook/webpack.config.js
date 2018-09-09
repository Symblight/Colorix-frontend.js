module.exports = {
    plugins: [
      // your custom plugins
    ],
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: 'react-svg-loader',
        },
        {
          test: /\.story.js$/,
          use: 'babel-loader' 
        }
      ],
    },
  };