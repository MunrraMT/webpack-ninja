const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const glob = require('glob');

const PATHS = {
  src: path.join(__dirname, 'src'),
};

module.exports = {
  entry: {
    index: './src/index.js',
    courses: './src/pages/courses.js',
    vendor: './src/vendor.js',
  },
  output: {
    filename: '[name][contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
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
    new CopyPlugin({
      patterns: [
        {
          from: path
            .resolve(__dirname, 'src/assets/images/*')
            .replace(/\\/g, '/'),
          to: path.resolve(__dirname, 'dist').replace(/\\/g, '/'),
          context: 'src',
        },
      ],
    }),
    // new PurgeCSSPlugin({
    //   paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    //   only: ['vendor'],
    // }),
    new BundleAnalyzerPlugin({}),
    new MiniCssExtractPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
