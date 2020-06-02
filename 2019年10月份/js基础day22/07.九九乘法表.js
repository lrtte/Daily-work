// 7、利用JavaScript完成如下九九乘法表
//外层循环控制行数
for (var i = 1; i <= 9; i++) {
    //声明一个空字符串
    var str='';
    //内层循环控制列数
    for (var j = 1; j <= i; j++) {
        //字符串拼接
        str+=j + '*' + i + '=' + i * j+' ';
    }
    //打印
    console.log(str);
}