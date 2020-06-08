// 引入包
const express=require('express');
const path=require('path');
const db=require('./data/db.json');
const fs=require('fs');
// 设置包
// 创建服务器
const app=express();
app.use(express.static(path.join(__dirname,'public')));

// 指定端口 启动服务
app.listen(3000,()=>{
    console.log('请打开 http://localhost:3000')
})