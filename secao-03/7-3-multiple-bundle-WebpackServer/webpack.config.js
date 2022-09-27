const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    products: './src/products.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext]',
  },
  devServer: {
    static: './dist',
    client: {
      progress: true,
    },
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index',
      template: 'src/index.html',
      chunks: ['index'],
    }),
    new htmlWebpackPlugin({
      filename: 'products',
      template: 'src/products.html',
      chunks: ['products'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { modules: true } },
        ],
      },
      {
        test: /\.s[ca]ss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { modules: true } },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /.(png|jpeg|svg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(tff|woff|woff2)$/,
        type: 'asset/resource',
      },
    ],
  },
};
