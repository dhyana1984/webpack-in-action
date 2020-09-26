//这个import不是import npm的module，而是异步加载js模块
//这种import可以出现在任意地方
//通过/*webpackChunkName: "util"*/ 让webpack让间接js资源获得异步chunk的名字，在bundle中使用chunck name
const add = import(/*webpackChunkName: "util"*/ './utils')
//需要用异步调用utils里面export的函数
add.then(({ add }) => console.log(add(2, 3)))
