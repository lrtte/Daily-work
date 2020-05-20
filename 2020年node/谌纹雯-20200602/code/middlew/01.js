// // 引入包
// const express=require('express');
// // 设置包
// const app=express();
// // 当客户端以get方式访问
// app.get('/request',(req,res,next)=>{
//   req.name='Lisa';
//   console.log('111')
//   // 当匹配到了request的时候  我们就让数据流向下一个中间件
//   next()
// })

// app.get('/request',(req,res)=>{
//   console.log('222')
//   console.log(req.name)
// })
// app.listen(3000,()=>{
//   console.log('请打开:http://localhost')
// })

// 引入包
const express=require('express');
// 设置包
const app=express();
// 当客户端以get方式访问
app.get('/request',(req,res,next)=>{
  req.name='Lisa';
  console.log('111')
  // 当匹配到了request的时候  我们就让数据流向下一个中间件
  next()
})

app.get('/request',(req,res)=>{
  console.log('222')
  console.log(req.name)
})
app.listen(3000,()=>{
  console.log('请打开:http://localhost')
})


// // 引入包
// const express=require('express');
// // 设置包
// const app=express();
// // 当客户端以get方式访问
// app.get('/request',(req,res,next)=>{
//   req.name='Lisa';
//   console.log('111')
//   // 当匹配到了request的时候  我们就让数据流向下一个中间件
//   next()
// })

// app.get('/request',(req,res)=>{
//   console.log('222')
//   console.log(req.name)
// })
// app.listen(3000,()=>{
//   console.log('请打开:http://localhost')
// })
