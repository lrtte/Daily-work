const express=require('express');
// 设置包
const app=express();

// 接受浏览器并给予响应

//指定端口并启动服务
app.listen(3000,()=>{
    console.log('请打开://localhost:3000')
})