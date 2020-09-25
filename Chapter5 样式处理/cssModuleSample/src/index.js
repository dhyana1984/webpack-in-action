import styles from './style.css'
//使用css module时，css文件会导出一个对象，需要把这个对象的属性添加到html标签上
document.write(`<h1 class = "${styles.title}"> my webpack app</h1>`)
