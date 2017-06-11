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
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            "react",
            ["es2015", { modules: false }],
            "stage-2"
          ],
          plugins: [
            'react-hot-loader/babel',
            'transform-decorators-legacy'
          ],
          babelrc: false
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        PLATFORM_ENV: JSON.stringify('web')
      }
    })
  ]
}
