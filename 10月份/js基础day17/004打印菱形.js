// 需求: 利用JavaScript，使用循环语句输出如下菱形图案（由“-”和“*”这两种符号组成） （拔高题）
//  ---*
//  --***
//  -*****
//  *******
//  -*****
//  --***
//  ---*
//上
for (var k = 0; k < 3; k++) {
    var str = '';
    for (var i = 0; i < 3 - k; i++) {
        str += '-'
    }
    for (var j = 0; j < 2 * k + 1; j++) {
        str += '*';
    }
    console.log(str)
}
//中
var str = '';
for (var j = 0; j < 7; j++) {
    str += '*'
}
console.log(str)
//下
for (var k = 0; k < 3; k++) {
    var str = '';
    for (var i = 0; i <= k; i++) {
        str += '-'
    }
    //5 3 1
    for (var j = 0; j <- (2 * k) +5; j++) {
        str += '*';
    }
    console.log(str)
}