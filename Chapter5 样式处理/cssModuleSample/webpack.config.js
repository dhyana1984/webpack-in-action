const path = require('path')
const htmlPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true, //开启css module模式
              //指明css代码中的类名会如何来编译，
              //name是模块名，local是原本选择器的标识符,hash是5位哈希值，根据模块和标识计算，所以不同模块不会造成冲突
              localIdentName: '[name]__[local]__[hash:base64:5]'
            }
          }
        ]
      }
    ]
  },
  plugins: [new htmlPlugin({ title: path.basename(__dirname) })],
  devServer: {
    publicPath: '/dist/',
    port: 3000
  }
}
