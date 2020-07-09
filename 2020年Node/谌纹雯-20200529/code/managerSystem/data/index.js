// 引入模块
const mongoose=require('mongoose');
// 链接数据库
mongoose.connect('mongodb://localhost/db_system',{
  useNewUrlParser:true,
  useUnifiedTopology:true
})
.then(result=>{
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
   type:String,
   require:true
  },
  email:{
    type:String,
    require:true
  },
  hobbies:{
    type:[String],
    enum:{
      values:['足球','篮球','橄榄球','敲代码','抽烟','喝酒','烫头']
    }
  }
}))


// User.save();
  // 操作数据
module.exports={
// 查询数据库中的所有数据
  findAll:function(fn){
    User.find()
    // 查询数据成功 返回数据
    .then(data=>{
      fn(data)
      // console.log(data)
    })
    // 查询数据出错   打印数据
    .catch(error=>{
      console.log(data);
    })
  },
  // 查找数据
   addOne:function(newUser,fn){
   User.create(newUser)
   .then((data)=>{
    //  console.log(data)
    fn(data)
    })
   .catch((error)=>{
     console.log(error)
    })
   }
}


