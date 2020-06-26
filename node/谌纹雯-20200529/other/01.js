// // 引入包
// const express=require('express');
// // 使用框架创建web服务器
// const app=express();
// app.use('/admin',(req,res,next)=>{
//     let isLogin=false;
//     if(isLogin){
//         next();
//     }else{
//         res.send('您还没有登录,不能访问/admin 页面')
//     }
// })
// // 如果用户登录了 那么您已经登录
// app.get('/admin',(req,res)=>{
//     res.send('您已经登录,可以访问当前也买')
// })
// // 如果用户地址栏乱写了一个地址  那么应该给人返回一个404页面
// app.use((req,res,next)=>{
//     res.status(404).send(`
//     img
//     `)
// })