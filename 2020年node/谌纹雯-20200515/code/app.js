// 导入包
const express=require('express');
const path=require('path')
const fs=require('fs')
// 设置包
// 使用express创建服务器
const app=express();
// 设置静态页面目录
app.use(express.static(path.join(__dirname,'public')))
// 设置post请求参数获取中间件
// false可以是字符串或数组  如果true'则为任何数据
// 查看数据的格式
app.use(express.urlencoded({extended:false}));
// 接受浏览器请求并给予响应

// 添加学生信息接口
app.post('/addInfo',(req,res)=>{
//   console.log(req.body);
// 构造需要的数据
let useInfo={
   id:+new Data(),
   name:req.body.suename,
   age:req.body.age,
   gender:req.body.gender,
   email:req.body.email,
   hobbies:req.body.hobbies,
   school:req.body.school,
   date:req.body.date
}
// 判断数据是否全部都没问题
if(useInfo.name&&useInfo.age&&useInfo.gender&&useInfo.email&&useInfo.hobbies&&useInfo.school&&useInfo.date){
// 把数据写入data.json
let useArr=[];
useArr.push(useInfo);
}
// 把数据写入到data.json
// console.log(useArr)
fs.writeFile(path,join(__dirname,'data','db.json'),JSON.stringify(useArr),(err)=>{
if(err!=null){
   console.log(err)
   res.status(500).send('服务器加载错误');
   return
}
res.status(200).send({
   code:200,
   msg:'学生数据添加成功'
})
})

})
// 指定端口并启动服务
app.listen(3000,()=>{
   console.log('请打开 http://localhost:3000')
})


