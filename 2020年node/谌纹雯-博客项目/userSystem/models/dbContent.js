const mongoose=require('mongoose');

// 链接数据库
mongoose.connect('mongodb://66.112.215.31:27017/sww_blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('数据连接成功')
})
.catch((err) => {
    console.log(err)
})