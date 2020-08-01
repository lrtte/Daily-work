// 引入数据库连接池
const pool = require('../config/dbconfig');

// 在数据库中 只有四种操作 方法只有四种前缀

// create delete update find
// 代表创建(Create)、更新(Update)、读取(find)和删除(Delete) 
module.exports.findCount = ( callback) => {
pool.query(`
SELECT COUNT(*) AS pcount FROM posts;
SELECT COUNT(*) AS scount FROM posts WHERE STATUS='drafted';
SELECT COUNT(*) AS caount FROM categories;
SELECT COUNT(*) AS cocount FROM comments;
SELECT COUNT(*) AS hcount FROM comments WHERE STATUS='held';
`,function(error,results){
    if(error)throw error;
    // callback(results)
    console.log(results);
});
}

let a=[
    [  { pcount: 4 } ],
    [  { scount: 3 } ],
    [  { caount: 4 } ],
    [  { cocount: 7 } ],
    [  { hcount: 4 } ]
  ]
  console.log(a.flat())
