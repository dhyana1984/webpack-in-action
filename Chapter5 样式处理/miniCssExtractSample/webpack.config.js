const path = require('path')
const ExtractCssPlugin = require('mini-css-extract-plugin')
const htmlPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['./index.js'],
  output: {
    filename: '[name].js'
  },
  mode: 'development',
  devServer: {
    port: 3000,
    publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: ExtractCssPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new ExtractCssPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new htmlPlugin({ title: path.basename(__dirname) })
  ]
}
