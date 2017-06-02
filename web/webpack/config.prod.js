var webpack = require('webpack')
var path = require('path')

var BUILD_DIR = path.resolve(__dirname, '../public')
var APP_DIR = path.resolve(__dirname, '../../app/web')

module.exports = {
  entry: APP_DIR + '/index.web.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: APP_DIR,
        loader: 'babel-loader'
      }
    ]
  }
}
