// 引入包
const express=require('express');
const path=rrequire('path');
const muter=require('multer');
const data=require('./data');

// 设置包
// 使用express方法创建服务器
const app=express();
//设置静态资源目录
app.use(express.static(path.join(__dirname,'public')));
// 设置multer
let uploader=multer({
    storage:multer.diskStorage({
        diskStorage:(req,file,cb)=>{
            cb(null,file.originalname)
        }
    })
})
// 处理请求并响应

// 获取所有数据
app.get('/api/getAll',(req,res)=>{
    if(!data.get()){
        return res.status(500).send({
            code:500,
            msg:'服务器错误',
            data:null
        })
    }
    return res.status(200).send({
        code:200,
        msg:'数据获取成功',
        data:data.get()
    })
})
// 通过id查找某一条数据
app.get('/api/getDatil',(req,res)=>{
    if(!req.query.id){
        return res.status(404).send({
            code:404,
            msg:'没有找到您的数据',
            data:itemInfo
        })
    }
})
// 添加用户
app.post('/api/add',uploader.single("avatar"),function(req,res){
    // l错误的判断
    // 构建数据结构
    let menber={
        id:+new Date(),
        name:req.body.name,
        avatar:`upload/${req.file.fieldname}`,
        bio:req.body.bio,
        created:new Date()
    };
    data.add(menber);
    res.send({
        code:200,
        message:'用户添加成功',
        data:null
    })
})

//指定端口并启动服务
app.listen(80,()=>{
    console.log('服务器已启动 请打开:http://localhost')
})