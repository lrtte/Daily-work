const Article = require('../models/article');
const mongooseSexPage = require('mongoose-sex-page');
// Schema hasn't been registered for model "User". 调用User约束
require('../models/user')

module.exports.getArticle = async (req, res) => {
// console.log(req.query);
let pageNum=parseInt(req.query.pageNum);
let pageSize=parseInt(req.query.pageSize)
  let result = await mongooseSexPage(Article).page(pageNum).size(pageSize).display(5).find().populate("author").exec();
  // console.log(result);
  res.send({
    code: 200,
    msg: "数据获取成功",
    data: result
  })
}

// 获取文章详情
module.exports.getDetail=(req,res)=>{
  // console.log(req.query)
  let result=await Article.findOne({_id:req.query.id}).populate('author')
  // console.log(result)
  res.send({
    code:200,
    msg:'数据获取成功',
    data:result
  })
}