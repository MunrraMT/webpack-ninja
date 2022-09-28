const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    courses: './src/pages/courses.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: ['dist'],
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['index'],
      inject: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'courses.html',
      template: './src/pages/courses.html',
      chunks: 'courses',
      inject: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path
            .resolve(__dirname, 'src/assets/images/*')
            .replace(/\\/g, '/'),
          to: path.resolve(__dirname, 'dist'),
          context: 'src',
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.s[ca]ss/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        type: 'asset/resource',
      },
    ],
  },
};
