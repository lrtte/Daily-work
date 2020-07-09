const express=require('express');
// 使用框架创建web服务器
const app=express();
app.get('/',(req,res)=>{
    res.send('您好')
})
app.get('/about/:id/:name/:age',(req,res)=>{
    // res.send('我不好')
    res.send(req.params)
})
app.listen(3000,()=>{
    console.log('请打开 http://localhost')
})



// const express=require('express');
// const app=express();
// app.get('/',(req,res)=>{
//     res.send('您好')
// })
// app.get('/about/:id/:name/:age',(req,res)=>{
//     res.send(req.params)
// })
// app.listen(3000,()=>{
//     console.log('请打开 http://localhost')
// })