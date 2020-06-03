// 需求: 利用JavaScript完成输出如下图形（由“空格”和“*”这两种符号组成）
//     *********
//    *******
//   *****
//  ***      
// * 

// var str = '';
// for (var i = 0; i < 4; i++) {
//     str += ' '
// }
// for (var j = 0; j < 9; j++) {
//     str += '*'
// }
// console.log(str)

// var str = '';
// for (var i = 0; i < 3; i++) {
//     str += ' '
// }
// for (var j = 0; j < 7; j++) {
//     str += '*'
// }
// console.log(str)

// var str = '';
// for (var i = 0; i < 2; i++) {
//     str += ' '
// }
// for (var j = 0; j < 5; j++) {
//     str += '*'
// }
// console.log(str)

// var str = '';
// for (var i = 0; i < 1; i++) {
//     str += ' '
// }
// for (var j = 0; j < 3; j++) {
//     str += '*'
// }
// console.log(str)

// var str = '';
// for (var i = 0; i < 0; i++) {
//     str += ' '
// }
// for (var j = 0; j < 1; j++) {
//     str += '*'
// }
// console.log(str)

//总结代码
for (var k = 0; k < 5; k++) {
    var str = '';
    for (var i = 0; i < 5 - k; i++) {
        str += ' '
    }
    //9 7 5 3 1
    for (var j = 0; j < -(2 * k)+9; j++) {
        str += '*'
    }
    console.log(str)
}