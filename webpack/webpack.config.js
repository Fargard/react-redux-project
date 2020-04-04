const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../', 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, '../', 'dist'),
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: path.resolve(__dirname, '../', 'src'),
      exclude: /node_modules/,
      use: ['babel-loader', 'eslint-loader'],
    }],
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, '../', 'src'),
    },
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../', 'src/index.html'),
    }),
    new CleanWebpackPlugin({
      verbose: true,
      cleanOnceBeforeBuildPatterns: ['**/*', '!static-files*'],
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'common',
          chunks: 'all',
        },
      },
    },
  },
};
