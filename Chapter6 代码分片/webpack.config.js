const path = require('path')
const htmlPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    //output里面的publicPath是指定入口文件异步调用资源的地址，这里就是指index.js调用utils.js,utils.js所在的目录
    publicPath: '/dist/',
    filename: '[name].js',
    //指定了chunk的名字
    chunkFilename: '[name].js'
  },
  mode: 'development',
  plugins: [new htmlPlugin({ title: path.basename(__dirname) })],
  devServer: {
    publicPath: '/dist/',
    port: 3000
  }
}
