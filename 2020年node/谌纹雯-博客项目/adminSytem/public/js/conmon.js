// // 显示用户页面
// let User=require('../model/dbUser');

// const mongooseSexPage=require('mongoose-sex-page');
// module.exports.showUser=(req,res)=>{
//     res.render('user',{
//         username:req.session.username
//     })
// }
// //查找所有用户
// module.exports.findUsers=(req,res)=>{
//     let {pageNum,pageSize}=req.query;
//     let result=await mongooseSexPage(User)
//     .page(parent(pageNum))
//     .size(parent(pageSize)
//     .display(5)
//     .find()
//     .exec();
//     console.log(result);
//     result.status(200).send({
//      code:200,
//      msg:'数据获取成功',
//      data:result
//     })
// }
// module.exports.editUser=(req,res)=>{
//     res.render('user-edit')
// }

const express=require('express');

const path=require('path');

const userRouter=require('./routes/userRouter');

const articleRouter=require('./')
