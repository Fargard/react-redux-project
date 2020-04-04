const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const autoPrefixer = require('autoprefixer');

module.exports = {
  entry: {
    app: ['regenerator-runtime/runtime', path.resolve(__dirname, '../', 'src/index.jsx')],
  },
  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, '../', 'src'),
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(ttf|eot|woff2?)(\?[a-z0-9]+)?$/,
        exclude: /node_modules/,
        loader: 'file-loader?name=fonts/[name].[ext]',
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader', options: { injectType: 'singletonStyleTag' } },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoPrefixer],
              sourceMap: false,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, '../', 'src'),
    },
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../', 'public/index.html'),
      favicon: path.resolve(__dirname, '../', 'public/favicon.svg'),
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
          test: /[\\/]node_modules[\\/](regenerator-runtime|react|react-dom)[\\/]/,
          name: 'common',
          chunks: 'all',
        },
      },
    },
  },
};
