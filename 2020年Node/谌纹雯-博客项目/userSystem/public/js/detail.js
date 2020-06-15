$(document).ready(function(){
let url=new URLSearchParams(localtion.search).get('id');
getDetailDate(id);
})
function getDetailDate(id){
  $.get(`/api/detail?id=${id}`,null,function(result){
    // for(let i=0;i<result.data.records.length;i++){
    //   // console.log(moment(result.data.records[i].publishDate).format('YYYY-MM-DD')
    //   result.data.records[i].publishDate=moment(result.data.records[i].publishDate).format('YYYY-MM-DD')
    //   }
    result.data.publishDate=moment(result.data.publishDate).format('YYYY-MM-DD')
      console.log(result)

      // 处理时间
      // 渲染模板
      let articleStr=template('article_templ',result.data);
      $('.container').prepend(articleStr);
  });
}