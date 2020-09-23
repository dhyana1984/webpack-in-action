const path = require('path')

module.exports = {
  context: path.join(__dirname, './src'),
  entry: ['./scripts/index.js'], //此时./是在context定义的<__dirname>/src下
  output: {
    filename: 'boundle.js'
  },
  mode: 'development',
  devServer: {
    port: 3000,
    publicPath: '/dist'
  },
  //模块处理规则
  module: {
    rules: [
      {
        //Webpack只能打包javascript，所以对于css要用loader
        //先用css-loader输出css，再用style-loader输出style
        use: ['style-loader', 'css-loader'], //规定正则匹配的文件使用这个规则，注意顺序，打包时从后往前执行
        //resource是被加载模块
        resource: {
          test: /\.css$/, //正则匹配的使用这条规则
          exclude: /node_modules/
          //exclude优先级比include高，排除exclude中的node_modules的foo和bar以外所有模块
          // exclude: /node_modules\/(?!(foo|bar)\/).*/
        },
        //issuer是加载者
        issuer: {
          test: /\.js$/,
          //只有/src/pages/目录下的js文件引用css文件，这条规则才会生效
          // include:/src/pages/,
          exclude: /node_modules/
        }
      }
    ]
  }
}
