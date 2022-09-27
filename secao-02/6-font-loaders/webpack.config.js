const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: 'images/[hash][ext]',
  },
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
        test: /\.(png|jpg|webp|svg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(ttf|woff|woff2)/,
        type: 'asset/resource',
      },
    ],
  },
};
