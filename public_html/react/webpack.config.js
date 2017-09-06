const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const statConf = {
  assets: false,
  chunks: false,
  hash: false,
  version: false,
  errors: true,
  errorDetails: true,
  warnings: true
}
module.exports = {
  entry: ['babel-polyfill', './app/main.js'],
  output: {
    filename: './dist/bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx?)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react']
            }
          }
        ]
      },
      {
        test: /\.styl$/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'stylus-loader']
        }))
      },
      {
        test: /\.(img|png|svg)$/,
        use: 'url-loader'
      }
    ]
  },
  devServer: {
    stats: statConf,
    port: '3000'
  },
  plugins: [
    new ExtractTextPlugin('./dist/bundle.css')
  ]
}
