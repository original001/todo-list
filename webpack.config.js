'use strict';

const path = require('path');
const webpack = require('webpack');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
        },
        include: [
          path.join(__dirname, 'src'),
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
    //new BundleAnalyzerPlugin({generateStatsFile: true}),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devtool: 'inline-source-maps',
  stats: {children: false},
};
