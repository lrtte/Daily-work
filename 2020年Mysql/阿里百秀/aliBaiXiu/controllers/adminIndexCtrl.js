
const { findCount } = require('../models/adminIndexModel');
module.exports.indexPage=(req,res)=>{
    findCount(function(results){
        // console.log(results.flat());
        results =results.flat();
        // console.log(results)
        res.render('./admin/index',{
            title:'后台管理系统-首页',
            pcount:results[0].pcount,
            dcount:results[1].dcount,
            cacount:results[2].cacount,
            cocount:results[3].cocount,
            hcount:results[4].hcount
        });
    })
   
}