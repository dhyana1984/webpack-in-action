var path = require('path')

//在此配置webpack命令的参数，不用在package.json里再配置参数，会直接读取这里的参数
module.exports = {
  /***  配置context  ***/
  //context是资源入口的前缀，配置context主要目的是让entry的编写更加简洁
  //__dirname就是工程根路径
  context: path.join(__dirname, './src'),

  /***  配置entry  ***/
  //entry是chunk的入口文件。webpack从入口文件开始检索，将具有依赖关系的模块生成一颗依赖树，最终得到一个chunk
  //chunk得到的打包产物称之为boundle
  //1.entry使用字符串
  entry: './src/index.js',
  //2.entry使用数组
  //作用是将多个资源优先合并，数组最后一个元素作为实际入口路径
  // entry:['react', 'react-dom', 'react-router', './src/index.js'],
  //3.entry使用对象
  // entry: {
  //   //chunk name为index, 入口路径为./src/index.js
  //   index: './src/index.js',
  //   //chunk name为lib, 入口路径为./src/lib.js
  //   lib: './src/lib.js',
  //   //对象属性值也可以用数组
  //   main: ['react', 'react-dom', 'react-router', './src/main.js'],
  // },
  //4.entry使用函数
  // entry: () => ({
  //   main: ['react', 'react-dom', 'react-router', './src/main.js'],
  //   lib: './src/lib.js',
  // }),

  /***  配置output  ***/
  //单入口不用设置动态output.filename
  //多入口设置成[name].js
  output: {
    //filename是输出资源的名字，可以添加目录在filename中，目录会自动生成，比如/js/boundle.js，js目录不存在也没关系
    filename: '/js/boundle.js',
    //如果需要为每个bundle指定不同名字，可以使用[<mode>].js来作为filename
    //filename: '[name].js' //自动根据chunk名字生成bundle名字
    //filename: '[name]@[chunkhash].js' //自动根据chunk名字和chunk哈希生成，每次都不一样，控制客户端不从缓存取
    //开发环境不必设置[chunkhash]

    //path指定资源输出的位置，要求必须为绝对路径。webpack4以后默认为dist目录
    //path: path.join(__dirname, ''),

    //配置publicPath
    //publicPath是用来指定资源的请求位置，由js或css所请求的间接资源路径
    //比如由js或者css请求的资源或者异步加载的js，从css请求的图片字体等
    //1.HTML相关
    //可以将publicPath指定为HTML的相对路径，请求这些资源时会以当前页面HTML所在路径加上相对路径，构成请求URL
    //假设当前html地址为 http://example.com/app/index.html
    //异步加载资源名为0.chunk.js
    //publicPath:'' //http://example.com/app/0.chunk.js
    //publicPath: './js' //http://example.com/app/js/0.chunk.js
    //publicPath: '../assets' //http://example.com/assets/0.chunk.js
    //2.Host相关
    //若publicPath的值以'/'开始，则代表此时publicPath是以当前页面的hostname为基础路径的
    //假设当前html地址为 http://example.com/app/index.html
    //异步加载资源名为0.chunk.js
    //publicPath:'/' //http://example.com/0.chunk.js
    //publicPath: '/js/' //http://example.com/js/0.chunk.js
    //2.CDN相关
    //若publicPath使用绝对路径，一般发生于静态资源放在CDN上
    //假设当前html地址为 http://example.com/app/index.html
    //异步加载资源名为0.chunk.js
    //publicPath:'http://cdn.com' //http://cdn.com/0.chunk.js
  },
  mode: 'development',
  //配置dev-server的参数
  devServer: {
    //注意，devServer的publicPath和output的意义不相同
    //这里publicPath作用是指定webpack-dev-server的静态资源服务路径
    //将webpack-dev-server的publicPath与output.path保持一致
    publicPath: '/dist',
  },
}
