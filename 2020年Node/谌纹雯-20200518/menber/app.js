// 引入包
const express=require('express');
const path=require('path');
// 引入数据  里面的index,js就可以用了
const data=require('./data')
// 引入multer
const multer=require('multer')
// 设置包 
const app=express();
// 静态资源设置
app.use(express.static(path.join(__dirname,'public')))
// 设置multer
let uploader=multer({
  // 确定上传文件在哪里
  storag:multer.diskStorage({
    destinatio:(req,file,cb)=>{
      cb(null,path.join(__dirname,'public','upload'))
    },
    filenam:(req,file,cb)=>{
      cb(null,file.originalname)
    }
  })
})
// 获取所有数据
app.get('/api/getAll',(req,res)=>{
  // console.log(data.get())
  if(!data.get()){
   return res.status(500).send({
     code:500,
     msg:'服务器端错误',
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
app.get('/api/getDetail',(req,res)=>{
  // console.log(req.query.id)
  // console.log(itemInfo)
  if(!req.query.id){
   return res.status(404).send({
     code:404,
     msg:'没有找到您要的数据',
     data:null
   })
  }
  let itemInfo=data.getById(parseInt(req.query.id))
  res.status(200).send({
    code:200,
     msg:'数据查找成功',
     data:itemInfo
  })
})
// 添加用户
app.post('/api/add',uploader.single('avatar'),function(req,res){
  console.log(req.file)
  console.log(req.body)
})
//指定端口 并启动服务
app.listen(80,()=>{
  console.log('请打开 http://localhost')
})



