// 引入模块
const mongoose=require('mongoose');
// 链接数据库
mongoose.connect('mongodb://localhost/db_system',{
  useNewUrlParser:true,
  useUnifiedTopology:true
})
.then((result)=>{
  console.log('数据库链接成功')
})
// 设置约束
// 应用约束
const User=new mongoose.model('User',new mongoose.Schema({
  username:{
    type:String,
    require:[true,'请输入用户名'],
    minlength:[2,'长度最少2个字符'],
    maxlength:[6,'长度最多6个字符']
  },
  password:{
    type:String,
    require:true
  },
  age:{
    type:Number
  },
  email:{
    type:String,
    require:true
  },
  hobbies:{
    type:[String],
    enum:{
      values:['足球','唱歌','跳舞','主持','追星','睡觉']
    }
  }
}))

// 操作数据
// 查找数据
User.create({
  username:'徐艺洋',
  password:'123456',
  age:20,
  email:'360589261@qq.com',
  hobbies:['唱跳','主持','怼人']
})