// 显示用户页面
let User=require('../model/dbUser');
const mongooseSexPage=require('mongoose-sex-page');
module.exports.showUser=(req,res)=>{
    res.render('user',{
        username:req.session.username
    })
}
// 查找所有用户
module.exports.findUsers=(req,res)=>{
    let {pageNum,pageSize}=req.query;
    // mongooseSexPage(User)
    // res.send({name:'您好'})
    let result=await mongooseSexPage(User)
    .page(parent(pageNum))
    .size(parent(pageSize))
    .display(5)
    .find()
    .exec();
    console.log(result);
    result.status(200).send({
        code:200,
        msg:'数据获取成功',
        data:result
    })
}
// 显示用户编辑页面
module.exports.editUser=(req,res)=>{
    res.render('user-edit')
}