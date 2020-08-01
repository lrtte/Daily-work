// 公共的代码
$(function () {
  // 功能: 退出登录
  $('#logoutButton').click(function () {
    logout();
  })
  $('#navbarButton').click(function () {
    $('.main,.aside').toggleClass('toggle');
  })
  // 
})
// #region退出登录
function logout() {
  $.ajax({
    type: 'GET',
    url: '/admin/logout',
    data: null,
    success: function (result) {
      if (result.code == 200) {
        location.href = "/admin/login"
      }
    }
  })
}
  // #endregion

