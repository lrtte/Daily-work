// 引入包
const express = require('express')
const path = require('path')
const DB = require('./data')
// 设置包
const app = express()
app.use(express.static(path.join(__dirname, 'public')))
// 这是获取host的中间键
app.use(express.urlencoded({ extended: false }))
// 接收前端请求并处理返回响应

app.get('/api/list', (req, res) => {
    DB.findAll(function (data) {
      res.status(200).send({
        code: 200,
        msg: '数据查询成功',
        data: data
      })
    });
  })
  // 添加数据
  app.post('/api/add',(req,res)=>{
    // console.log(req.body)
    let newUser = {
      username:req.body.username,
      password:req.body.password,
      age:req.body.age,
      email:req.body.email,
      hobbies:req.body.hobbies
    }
    DB.addOne(newUser,function(){
      if(data){
        res.status(200).send({
          code:200,
          msg:'用户添加成功',
          data:data
        })
      }
    })
  })


// 指定端口并启动服务
app.listen(80, () => {
    console.log("服务已启动，请打开http://localhost")
})