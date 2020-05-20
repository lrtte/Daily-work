// app.use的两种用法
// app.use 匹配所有的请求方式，可以直接传入请求处理函数，代表接收所有的请求。
// app.use 第一个参数也可以传入请求地址，代表不论什么请求方式，只要是这个请求地址就接收这个请求。

//引入express框架
const express=require('express')
// 使用框架创建web服务器
const app=express();
// 当客户端一get的方式访问
app.use((req,res,next)=>{
  console.log('111')
  next()
})
app.get('/',(req,res)=>{
  console.log('我是路由/的请求')
  res.send('我是路由的请')
})
app.listen(80,()=>{
  console.log('请打开http://localhost')
})

// 不要用use来接受请求
// 1.有的时候 同意的路由 因为请求方式不同 结果是不同的


