$(function () {
  // 显示数据
  // 打开index.html的时候显示数据
  showData();
  // 删除数据
  // 修改数据

})
// 功能  当打开页面的时候显示数据
function showData() {
  $.ajax({
    // 请求方式
    type: 'GET',
    // 请求地址
    url: '/api/list',
    // 请求数据
    data: null,
    // 成功时的回调
    success: function (result) {
      //  console.log(result)
      // 使用art-template渲染数据
      if (result.code == 200) {
        let htmlStr = template('list_templ', result)
        // console.log(htmlStr)
        $('tbody').html(htmlStr)
      }
    }
  })
}

