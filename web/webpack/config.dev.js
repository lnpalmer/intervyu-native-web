var webpack = require('webpack')
var path = require('path')

var BUILD_DIR = path.resolve(__dirname, '../public')
var APP_DIR = path.resolve(__dirname, '../../app/web')

module.exports = {
  entry: [
    'react-hot-loader/patch',
    APP_DIR + '/index.web.js'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: APP_DIR,
        loader: 'babel-loader',
        query: {
          presets: [
            "react",
            ["es2015", { modules: false }]
          ],
          plugins: [
            'react-hot-loader/babel'
          ]
        }
      }
    ]
  }
}
