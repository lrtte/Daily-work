// 查询名字为小羊的数据
// 引入包
const mongoose = require('mongoose');
// 连接数据库
mongoose.connect('mongodb://localhost/db_student', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => {
        console.log('数据库链接成功')
    })
    .catch((err) => {
        console.log(err, '数据库链接失败')
    })
// 创建约束
let studentSchema = new mongoose.Schema({
    username: String,
    name: String,
    email: String,
    age: Number,
    hobbies: Array
})

let Student = new mongoose.model('Student', studentSchema);
// 添加数据
let student=new Student({
    username: '高冷小羊',
    name: '徐艺洋',
    email: '360589261@qq.com',
    age: 22,
    hobbies: ['唱歌', '跳舞', '主持']
})

student.save();

