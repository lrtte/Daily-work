// function test() {
//     b();
//     var a = 1;
//     function b() {
//         console.log(a);  // ？
//         var a = 2;
//     }
// }
// test();  // 


// 预解析---------------------------------------


// 先将test中的b函数提升 在将变量a提升  在将b函数中的a提升   所以打印结果就是undefined

// function test() {
//     var a
//     function b() {
//         var a
//         console.log(a);  // ？undefined
//         a = 2;
//     }
//     b();
//     a = 1;

// }
// test();  // 