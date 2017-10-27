const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const config = require('./config')
process.env.NODE_ENV = 'development'

module.exports = merge(require('./webpack.base'), ({
  entry: [
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    'webpack-dev-server/client?http://localhost:' + config.dev.port,
    './src/index.tsx'
  ],

  devtool: 'cheap-module-eval-source-map',

  module: {
    rules: [
      {enforce: 'pre', test: /\.js$/, use: 'source-map-loader'},
      {
        test: /\.(ts|tsx)$/,
        use: [
          {loader: 'react-hot-loader/webpack'},
          {loader: 'awesome-typescript-loader'}
        ]
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'postcss-loader'}
        ]
      },
      {
        test: /\.s[ac]ss/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'sass-loader'},
          {loader: 'postcss-loader'}
        ]
      },
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new FriendlyErrorsPlugin()
  ]
}))
