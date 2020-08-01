// 引入express框架
const express=require('express');

// 使用express方法提供touter方ad来创建路由
const adminPostsRouter=express.Router();
// 引入具体路由
const {postsPage,postsAddPage}=require('../controllers/adminPostsCtrl');
// 创建具体路由
adminPostsRouter.get('/posts',postsPage)
// 显示文章添加页面
adminPostsRouter.get('/posts/add',postsAddPage)
// 导出路由
module.exports=adminPostsRouter;