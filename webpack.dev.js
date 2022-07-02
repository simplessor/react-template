const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { DefinePlugin } = require('webpack');

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
    open: false,
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new DefinePlugin({
      __REACT_DEVTOOLS_GLOBAL_HOOK__: '({ isDisabled: true })'
    }),
  ]
});
