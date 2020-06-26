// index.js的作用就是用来处理members.json或者backup.json文件
// 增加 删除 修改 查询 都要用index.js里面的方法来做

// 引入包
// 1.导入fs包
// 为了读取backup.json文件
const fs = require('fs');
// 2.导入path
const path = require('path');
// 3.导入backup.json文件
const database = require('./backup.json');

// 把方法导出

module.exports = {
  // get: function (){}
  get: () => {
    return database
  },
  getById:(id)=>{
    console.log(id)
    return database.find((item)=>{
      // 如果数组中的元素的id和传入的id一样  那么就返回这个函数
      return item.id===id
    })
    // console.log(info)
  }
}




