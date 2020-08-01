
// 引入express框架
const express=require('express');

// 使用express方法提供touter方ad来创建路由
const adminUserRouter=express.Router();

// 创建具体路由
adminUserRouter.get('/users',(req,res)=>{
    // res.render('首页')
    res.render('./admin/users',{title:'后台管理系统-用户'})
})
adminUserRouter.get('/users/edit',(req,res)=>{
    // res.render('首页')
    res.render('./admin/profile',{title:'后台管理系统-编辑用户'})
})
// 导出路由
module.exports=adminUserRouter;