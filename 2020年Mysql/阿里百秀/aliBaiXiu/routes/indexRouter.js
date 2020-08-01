// 引入express框架
const express=require('express');

// 使用express方法提供touter方ad来创建路由
const indexRouter=express.Router();

// 创建具体路由
indexRouter.get('/',(req,res)=>{
    // res.send('首页')
    res.render('index');
})
// 导出路由
module.exports=indexRouter;



