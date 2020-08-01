
// 引入express框架
const express=require('express');

// 使用express方法提供touter方ad来创建路由
const adminSettingsRouter=express.Router();

// 创建具体路由
adminSettingsRouter.get('/settings',(req,res)=>{
    // res.render('首页')
    res.render('./admin/settings',{title:'后台管理系统-设置'})
})
// 导出路由
module.exports=adminSettingsRouter;