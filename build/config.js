const path = require('path')

module.exports = {
  dev: {
    port: 9000,
    publicPath: ''
  },
  build: {
    publicPath: '',
    buildPath: path.resolve(__dirname, '../dist'),
    productionSourceMap: true
  }
}
