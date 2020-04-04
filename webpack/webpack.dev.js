const merge = require('webpack-merge');
const path = require('path');

const baseConfig = require('./webpack.config');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  output: {
    filename: '[name].js',
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, '../', 'dist'),
    compress: true,
    hot: true,
    port: 3000,
  },
  optimization: {
    noEmitOnErrors: true,
  },
});
