// 1.引入express
const express = require('express');
// 2.使用express的方法来创建路由

const userRouter = express.Router();
// 3.创建路由
userRouter.get('/',showUser)
// 获取所有用户
userRouter.get('/findAll',findUsers)
userRouter.get('/edit',editUser)
// 4.导出
module.exports = userRouter;