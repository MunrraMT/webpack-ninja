const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.js',
    courses: './src/pages/courses.js',
    vendor: './src/vendor.js',
  },
  output: {
    filename: '[name]-[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpeg|jpg|gif)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      mnt: 'moment',
      $: 'jquery',
      _: 'lodash',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['index', 'vendor'],
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/courses.html',
      chunks: ['courses', 'vendor'],
      filename: 'courses.html',
      base: 'pages',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
