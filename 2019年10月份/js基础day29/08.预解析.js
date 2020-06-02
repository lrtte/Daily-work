// // // 8.下列代码控制台打印出的值是多少？写出执行过程
// function n() {
//     if (2 > 1) {
//         arr = 10;
//         brr = 10;
//         let arr;
//         var brr;
//         console.log(arr); // ？
//         console.log(brr); // ？
//     }
// }
// n();

// //解析---------------------------------------------

// // 8.下列代码控制台打印出的值是多少？写出执行过程
function n() {
    if (2 > 1) {
        arr = 10;
        brr = 10;
        let arr;
        var brr;
        console.log(arr); // ？报错  
        console.log(brr); // ？10
    }
}
n();