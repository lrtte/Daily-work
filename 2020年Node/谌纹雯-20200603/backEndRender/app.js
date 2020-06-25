const express = require('express');
const path=require('path')
const app = express();
// 设置模板引擎
app.engine('art',require('express-art-template'));
app.set('views',path.join(__dirname,'views'));
app.set('view enfine','art');
// 当客户daunt以get方式访问/路由时
//访问localhost的时候  我们在页面显示  首页
app.get('/', (req, res) => {
    let str='首页'
    // res.send('首页')
    res.render('index')
})
// 访问localhost/about的时候  我们在页面显示  关于
app.get('/about', (req, res) => {
    res.send('关于')
})
// 访问localhost/list的时候   我们在页面是显示  列表
app.get('/list', (req, res) => {
    res.send(' 列表')
})
app.listen(3000, () => {
    console.log('请打开 http://localhost')
})