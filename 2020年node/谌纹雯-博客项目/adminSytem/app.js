const express=require('express');
// 导入path模块
const path=require('path');
// 引入关于用户的路由
const userRouter = require('./routes/userRouter');
// 引入关于文章的路由
const articleRouter = require('./routes/articleRouter');
// 引入登录页面路由
const indexRouter = require('./routes/indexRouter');
// 引入express-session
const session=require('express-art-template');
// 设置包
const app=express();

app.use(express.static(path.join(__dirname,'public')));

// 用的模板引擎是art-template
app.engine('html', require('express-art-template'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
// 2.4 POST请求处理中间件
app.use(express.urlencoded({ extended: false }))
// 2.5 连接数据库
require('./model/dbContent');

// 设置express-session
app.use(session({
    secret:'keyboard cat'
    // resave:false
}))
// 处理请求(挂载路由)
app.use('/user',userRouter);
app.use('/article',articleRouter);
app.use(indexRouter)
app.listen(3000,()=>{
    console.log('请打开 http://localhost:3000')
})

