// 引入包
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/db_user',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{console.log('数据连接成功')})
.catch((err)=>{console.log(err,'数据连接诶失败')})

let userSchema=new mongoose.Schema({
    name:String,
    age:Number,
    address:String,
    hobbies:Array
})
let Usert = new mongoose.model('User', userSchema);
// 引用规则
let user=new User({
    name:'徐艺洋',
    age:20,
    address: '北京市朝阳区大同路夜景花园3号楼2单元1202',
    hobbies: ['唱歌', '主持', '跳舞']
})

user.save();