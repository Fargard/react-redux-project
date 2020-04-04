const merge = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');

const baseConfig = require('./webpack.config');

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'nosources-source-map',
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new CompressionPlugin({
      filename: '[path].gz[query]',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.7,
    }),
  ],
});
