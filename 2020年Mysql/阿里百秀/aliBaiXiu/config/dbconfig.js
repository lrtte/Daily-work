// 引入mysql
const mysql=require('mysql');
// 配置数据库信息
const pool=mysql.createPool({
    // 让node支持多条sql语句
    multipleStatements:true,
    connectionLimit:20,
    host:'localhost',
    user:'root',
    password:'root',
    database:'alibaixiu'
});

module.exports=pool;

const mysql=require('mysql');




