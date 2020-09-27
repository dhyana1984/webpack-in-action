const path = require('path')
const webpack = require('webpack')
const htmlPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js',
    util: './src/util.js'
  },
  output: {
    publicPath: './dist/',
    filename: '[name]@[chunkhash].js'
  },
  mode: 'development',
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: require(path.join(__dirname, 'dll/manifest.json'))
    }),
    new htmlPlugin({ title: path.basename(__dirname) })
  ],
  devServer: {
    publicPath: '/dist/',
    port: 3000
  }
}
