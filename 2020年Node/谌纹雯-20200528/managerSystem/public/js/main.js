$(function () {
  // 显示数据
  showData()
  // 删除数据
  // 修改数据

})
function showData() {
  $.ajax({
    type: 'GET',
    url: '/api/list',
    data: null,
    success: function (result) {
      // console.log(result)
      if (result.code == 200)
        let htmlStr = template('list_templ', result);
      $('tbody').html(htmlStr)
    }
  })
}