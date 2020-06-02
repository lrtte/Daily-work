// 2、打印图形

// var str = ''
// for (var i = 5; i > 0; i--) {
//     for (var j = 0; j < i; j++) {
//         str += i

//     }
//     str += '\n'
// }
// for (var i = 2; i <= 5; i++) {
//     for (var j = 1; j <= i; j++) {
//         str += i
//     }
//     str += '\n'
// }
// console.log(str)
var str= ""
for(var i=5;i>0;i--){
    for(var j=0;j<i;j++){
        str+=i
    }
    str+="\n"
}
for (var i=2;i<=5;i++){
    for(var j=1;j<=i;j++){
        str+=i
    }
    str+="\n"
}
console.log(str)