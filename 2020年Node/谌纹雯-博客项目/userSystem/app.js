//  导入包
//   1,1 导入express框架
const express = require('express');
// 1.2 导入path模块
const path = require('path');
//  1.3 导入路由模块
const router = require('./routes')
// 设置服务器
const app = express();
// 设置静态资源目录
app.use(express.static(path.join(__dirname, "public")));
// //  连接数据库
require('./models/dbContent');
// //  3 处理请求
// //  3.1 挂载路由
app.use(router);
//  4. 指定端口启动服务
app.listen(80, () => {
    console.log("服务器已经打开  请打开  http://localhost");

})