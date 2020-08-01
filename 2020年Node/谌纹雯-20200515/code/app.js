$(function (){
   window.category="";
   window.status="";
   $('#filterBtn').on('click',function (e){
      e.preventDefault();
      let category=window.category=$('select[name="category"]').val();
      let status=window.status=$('select[name="status]').avl();
      // 表单序列化
      console.log($('#filterFrom').serialze());
      // 通过条件去查询数据
      $.ajax({
         type:'GET',
         url:"/admin.posts/findsByFilter",
         data:{
            category:category,
            status:status,
            pagenum:1,
            pagesize:5
         },
         success:function(results){
         console.log(results)
         if(results.code==200){
            let listStr=template('list_temp',results);
            $('tbody').html(listStr);
         }
         }
      })
   })

  $('pageination').on('click','a',function(){
     let category=window.category;
     let status=window.status;
     console.log(category,status);
     let pagenum=$(this).data('page');
     console.log(pagenum);
     let pagesize=5;
     $.ajax({
        type:'GET',
        url:"/admin/posts/findsByPaging",
        data:{
           category,
           status,
           pagenum,
           pagesize
        },
        success:function(results){
           console.log(results);
        }
     })
  })
})