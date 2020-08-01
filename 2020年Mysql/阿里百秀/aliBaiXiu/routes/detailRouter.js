// 引入express框架
const express=require('express');

// 使用express方法提供touter方ad来创建路由
const detailRouter=express.Router();

// 创建具体路由
detailRouter.get('/detail',(req,res)=>{
    // res.send('详情')
    res.render('detail')
})
// 导出路由
module.exports=detailRouter;

