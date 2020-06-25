// // 引入包
// const express=require('express');
// const path=require('path');
// const muter=require('muter')
// // 创建后台服务器
// const app=express();
// // 设置静态资源目录
// app.use(express.static(path.join(__dirname,'public')));
// // 设置文件上传的路径
// let uploader=multer({
//     // 确定上传的文件在哪里  cb:callback 回调函数
//     stroage:multer.diskStorage({
//         destination:(req,file,cb)=>{
//         cb(null,path.join(__dirname,'upload'))
//         },
//         // 
//         filename:(req,file,db)=>{
//          cb(null,file.originalname)
//         }
//     })
// })
// // 处理请求并响应
// app.post('/prefile',upload.dingle('avatar'),function(req,res){
//     // req.file是 `avatar` 文件的信息
//     // req.body将具有文本域数据,如果存在的话
//    console.log(req.file)
// })

// // 指定端口并启动服务
// app.listen(80,()=>{
//     console.log('请打开 http://localhost')
// })

// const express=require('express');
// const path=require('path');
// const multer=require('multer')

// // 设置包
// // 创建后台服务
// const app=express();
// app.use(express.static(path.join(__dirname,'public')));
// let uploader=multer({
//     storagr:multer.diskStorage({
//         destination:(req,File,cb)=>{
//             cb(null,path.join(__dirname,'upload'))
//         },
//         filename:(req,file,cb)=>{
//             cb(null,file.originalname)
//         }
//     })
// })

// // 请求处理并响应
// app.post('/profile',uploader.single('avatar'),function(req,res){
//     console.log(req,file)

//     console.log(req.body)
// })

// // 指定端口并响应
// app.listen(80,()=>{
//     console.log('请打开 http://localhost')
// })