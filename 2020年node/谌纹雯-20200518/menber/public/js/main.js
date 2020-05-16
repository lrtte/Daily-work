$(document).ready(function(){
    // 发起ajax请求
    $.ajax({
        // 请求方式
        type:'GET',
        // 请求地址
        url:'/api/getAll',
        // 请求数据
        data:null,
        // 成功时的回调函数
        success:function(result){
            // console.log(data)
            let htmlStr=template('list_templ',{
                list:result.data
            });
            $('#members').html(htmlStr);
        }
    })
})