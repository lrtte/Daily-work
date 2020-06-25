$(function () {
  $('#add-btn').on('click', function () {
    let formdata = $('form').serialize()
    // console.log(formdata);
    $.ajax({
      type: 'POST',
      url: '/api/add',
      data: formdata,
      success: function (result) {
        console.log(result);
        if (result.code == 200) {
          alert(`用户:${result.data.username}添加成功`)
          location.href = '/'
        }
      }
    })
    // console.log(111)
  })
})


