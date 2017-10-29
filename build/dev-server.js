const webpack = require('webpack')
const WebpackDerServer = require('webpack-dev-server')
const config = require('./webpack.dev.config')
const opn = require('opn')
const port = require('./config').dev.port
const host = 'localhost'

process.env.NODE_ENV = 'development'

new WebpackDerServer(webpack(config), {
  quiet: true,
  publicPath: '/',
  hot: true,
  hotOnly: true,
  historyApiFallback: true,
  overlay: true,
}).listen(port, host, function (err, result) {
  if (err) {
    console.log(err)
  }
  console.log('Listening at ' + host + ':' + port)
  opn('http://' + host + ':' + port)
})
