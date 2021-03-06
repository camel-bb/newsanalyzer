const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {

  mode: 'development',

  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    port: 8081,
    contentBase: path.resolve(__dirname, 'dist')
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader',
          {
          loader: 'css-loader',
          options: {
            importLoaders: 2
          }
          },
          'postcss-loader'
        ]
      }
    ]
  }
});

