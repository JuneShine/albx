//当表单提交时默认阻止行为
$('#userForm').on('submit', function () {
    //获取到用户在表单中输入的内容并转化为字符串
    var formData = $(this).serialize();
    // console.log(formData);
    $.ajax({
        type: 'post',
        url: '/users',
        data: formData,
        success: function () {
            //刷新页面
            location.reload();
        },
        error: function () {
            alert('添加失败')
        }
    })
    return false;
});
$('#avatar').on('change', function () {
    var formData = new FormData();
    formData.append('avatar', this.files[0]);
    $.ajax({
        type: 'post',
        url: '/upload',
        data: formData,
        //告诉$.ajax方法不要解析请求参数
        processData: false,
        contentType: false,
        success: function (response) {
            // console.log(response[0].avatar);
            //实现头像预览功能,设置给页面元素
            $('#preview').attr('src', response[0].avatar);
            $('#hiddenAvatar').val(response[0].avatar);
        }
    })
});

$.ajax({
    type: 'get',
    url: '/users',
    success: function (response) {
        // console.log(response);
       var html = template('userTp1', {data: response});
       $('#userBox').html;
    }
})