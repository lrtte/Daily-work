// 入口函数
$(function () {
  // fullpage调用
  $('#fullpage').fullpage({
    // 为每一屏设置背景颜色
    sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#fed", "#d04759", "#84d9ed", "#8ac060"],
    navigation: true,
    scrollingSpeed: 1500,
    verticalCentered: false,
    // 第二屏
    afterLoad: function (anchorLink, index) {
      // console.log(index);
      // 1.判断是不是到了第二屏 
      if (index == 2) { // 1.1 如果是第二屏 
        // console.log(1111)
        // 让空的输入框运动到 已经写好的输入框的位置
        $('.qbh-list-empty').show().animate({
          right: 500
        }, 1000, function () {
          // 运动到指定位置之后 让输入框中的字出现
          $('.qbh-list-empty img:last-child').animate({
            opacity: 1
          }, 1000, function () {
            // 让这个输入框隐藏
            $('.qbh-list-empty').css('opacity', 0)
            // 让已经写好的输入框运动到显示器的右上角
            $('.qbh-list-full').show().animate({
              width: 150,
              bottom: 448,
              right: 338
            }, 1000)
            // 沙发列表放大到整个屏幕
            $('.qbh-list-sofas').animate({
              width: 441
            }, 1000, function () {
              // 标语发生变化
              $('.qbh-list-tips img:first-child').hide()
            })
          })
        })
      }
    },
    // index 是当前节的索引
    // nextindex 下一节的索引
    // direction 方向
    onLeave: function (index, nextIndex, direction) {
      if (index == 2 && nextIndex == 3) {
        // console.log(12111);
        // 让第二屏的沙发掉落
        $('.qbh-list-drop').show().animate({
          bottom: -($(window).height() - 250),
          width: 207,
          left: 370
        }, 1000, function () {
          $('.qbh-buy-main div:last-child').show();
        })
      }

    }
  })
})