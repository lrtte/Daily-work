// 需求: 利用JavaScript完成输出如下图形（由“空格”和“*”这两种符号组成)
// var str = '';
// for (var j = 1; j <= 4; j++) {
//     str += ' '
// }
// for (var i = 1; i <= 1; i++) {
//     str += '*'
// }
// console.log(str)

// var str = '';
// for (var j = 1; j <= 3; j++) {
//     str += ' '
// }
// for (var i = 1; i <= 2; i++) {
//     str += '* '
// }
// console.log(str)

// var str = '';
// for (var j = 1; j <= 2; j++) {
//     str += ' '
// }
// for (var i = 1; i <= 3; i++) {
//     str += '* '
// }
// console.log(str)

// var str = '';
// for (var j = 1; j <= 1; j++) {
//     str += ' '
// }
// for (var i = 1; i <= 4; i++) {
//     str += '* '
// }
// console.log(str)

// var str = '';
// for (var j = 0; j < 0; j++) {
//     str += ' '
// }
// for (var i = 1; i <= 5; i++) {
//     str += '* '
// }
// console.log(str)

//总结代码

// for (var k = 0; k < 5; k++) {
//     var str = '';
//     //4 3 2 1 0
//     for (var j = 0; j < 4 - k; j++) {
//         str += ' '
//     }
//     //1 2 3 4 5
//     for (var i = 0; i <= k; i++) {
//         str += '* '
//     }
//     console.log(str)
// }