const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    compress: true,
    port: 10000,
    allowedHosts: [
      'localhost'
    ],
    historyApiFallback: true,
    hot: true,
    https: false,
    open: true,
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
  ]
});
