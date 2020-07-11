
const express=require('express');
const path=require('path');
const DB=require('./data');
const app=express();
app.use(express.static(path.join(__dirname,'public')));
// 设置中间件
app.use(express.urlencoded({extended:false}))// 接受前端请求
//查找数据
app.get('/api/list',(req,res)=>{
    DB.findAll(function(data){
     res.status(200).send({
         code:200,
         msg:'数据查询成功',
         data:data
     })
    });
})
// 添加数据
app.post('/api/add',(req,res)=>{
    // console.log(req.body);
    let newUser={
        username: req.body.username,
        password: req.body.password,
        age: req.body.age,
        email: req.body.email,
        hobbies: req.body.hobbies
    }
    DB.addOne(newUser,function(data){
    // console.log(data)
    if(data){
        res.status(200).send({
            code:200,
            msg:'用户添加成功',
            data:data
        })
    }
    })
})
app.listen(80,()=>{
    console.log('服务器已经启动,请打开:http://localhost')
})