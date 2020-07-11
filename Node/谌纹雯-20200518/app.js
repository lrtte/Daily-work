// 引入包
const express=require('express');
const path=require('path');
const multer=require('multer');
// 创建后台服务
const app=express();
app.use(express.static(path.join(__dirname,'public')));

// 设置文件上传的路径
let uploader=multer({
    storage
})