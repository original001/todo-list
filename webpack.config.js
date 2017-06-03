'use strict';

const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    app: './index',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: 'app.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-2', 'react'],
          plugins: [
            'css-to-js'
          ],
        },
        include: [
          path.join(__dirname, 'src'),
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'inline-source-maps',
  stats: {children: false},
};
