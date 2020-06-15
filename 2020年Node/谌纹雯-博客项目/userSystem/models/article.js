const mongoose = require('mongoose');
// // 链接数据库
// mongoose.connect('mongodb://66.112.215.31:27017/sww_blog', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => {
//     console.log('数据连接成功')
// })
// .catch((err) => {
//     console.log(err)
// })
let Article = new mongoose.model("Article", new mongoose.Schema({
    // 标题
    title: {
      type: String,
      required: true,
      maxlength: 20,
      minlength: 1
    },
    // 作者
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    // 发布时间
    publishDate: {
      type: Date,
      default: Date.now
    },
    // 封面图片
    cover: {
      type: String,
      default: null
    },
    // 内容
    content: {
      type: String,
      required: true
    }
  }));

Article.create({
    // 标题
    title:'把老板怼没了',
    // 作者
    author: '5ed8c02e1b519a2c2c662e77',

    content: "锦瑟无端五十弦，一弦一柱思华年。庄生晓梦迷蝴蝶,望帝春心托杜鹃。沧海月明珠有泪,蓝田日暖玉生烟"
})
module.exports = Article;