// 引入模块
const mongoose=require('mongoose');
//链接数据库
mongoose.connect('mongoose://localhost/db_stystem',{
  useNewUrlParser:true,
  useUnifiedTopology:true
}) 