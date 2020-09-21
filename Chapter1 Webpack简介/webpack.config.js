// const config ={
//     entry:'./src/index.js',
//     output:{
//         filename:'boundle1.js'
//     },
//     mode:'development',
// }

// export default config

//在此配置webpack命令的参数，不用在package.json里再配置参数，会直接读取这里的参数
module.exports = {
  //配置build的参数
  entry: './src/index.js',
  output: {
    filename: 'boundle.js',
  },
  mode: 'development',
  //配置dev-server的参数
  devServer: {
    publicPath: '/dist',
  },
}
