const config = require('./config')
const webpack = require('webpack')

module.exports = {
  output: {
    filename: '[name].js',
    path: config.build.buildPath,
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.publicPath
      : config.dev.publicPath
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
      {
        enforce: 'pre', test: /\.(ts|tsx)$/, use: 'tslint-loader',
      },
      {
        enforce: 'pre', test: /\.js$/, use: 'source-map-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        tslint: {
          emitErrors: true,
          failOnHint: true
        }
      }
    })
  ]
}
