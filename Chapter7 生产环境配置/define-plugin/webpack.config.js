const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  //切换到生产环境打包模式
  //实际上就是设置了 process.ENV.NODE_ENV:'production'
  mode: 'production',
  plugins: [
    //为生产环境和本地环境添加不同的环境变量，使用webpack.DefinePlugin
    new webpack.DefinePlugin({
      //设置EVN环境变量
      //DefinePlugin在替换环境变量时对于字符串类型的值进行的是完全替换，不加JSON.stringify的话替换后会变成变量名而不是字符串
      ENV: JSON.stringify('production'),
      IS_PRODUCTION: true,
      ENV_ID: 130912098,
      CONSTANTS: {
        TYPES: JSON.stringify(['foo', 'bar'])
      }
    })
  ],
  //打开suorce-map，可以在浏览器的dev tools里面看到js源码
  //css,scss,less需要在use里面单独设置option:{sourceMap:true}
  devtool: 'nosources-source-map',
  devServer: {
    publicPath: '/dist/',
    port: 3000
  }
}
