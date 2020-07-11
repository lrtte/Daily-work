$(function () {
  // 显示数据
  // 添加点击事件
  $('#add-btn').on('click', function () {
    // console.log(111)
  })
  let formdata = $('form').serialize();
  $.ajax({
    type: 'POST',
    url: '/api/add',
    data: formdata,
    success: function (result) {
      // console.log(result)
      if (result.code == 200) {
        alert(`用户:${result.data.username}添加成功`)
        location.href = '/'
      }
    }
  })
})