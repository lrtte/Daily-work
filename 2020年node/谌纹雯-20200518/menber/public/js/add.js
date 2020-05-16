$(function () {
    // 预览
    // 给图片添加change事件
    $('#input_avatar').on('change', function () {
        // 获取input中的文件对象

        // 创建对象
        let imgSrc = URL.createObjectURL($(this)[0].files[0])
        console.log(imgSrc)
        // 赋值  
        $('#avatar').attr('src', imgSrc)
    })

    // 发起ajax请求
    // 给save添加点击事件
    $('#but_add').on('click', function () {
        // 把需要的数据收集好
        let formdata = new FormData();
        formdata.append('name', $('#input_name').val())
        formdata.append('bio', $('#input_bio').val())
        formdata.append('avatar', $('#input_avatar').val())
        // 发起ajax请求
        $.ajax({
            type: 'POST',
            url: '/api/add',
            data: formdata,
            processData:false,
            contentType:false,
            // 成功时的回调
            success: function (result) {
                console.log(result)
            },
            error: function () {
                alert('用户添加失败')
            }
        })
        return false;
    })


})