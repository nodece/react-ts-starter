const webpackConfig = require('./webpack.prod.config')
const webpack = require('webpack')
const rm = require('rimraf')
const path = require('path')
process.env.NODE_ENV = 'production'

rm(path.resolve('dist'), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')
  })

})
