

$(function(){
    // 获取用户第一页数据
    getUsers();
})
function getUsers(pagenum,pagesize){
    $.ajax({
        type:'GET',
        url:'/user/findAll',
        data:{
            pageNUm:pagenum||1,
            pageSize:pagesize||5
        },
        success:function(result){
            console.log(result)
        }
    })
}


