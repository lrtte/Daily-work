// 1.下列代码控制台打印出的值是多少 ? 写出执行过程
// function b(x, y, a) {
//     a = 10
//     console.log(arguments[2]);//？
// }

// b(1, 2, 3);

// 2.下列代码控制台打印出的值是多少？写出执行过程
// function fn() {
//     console.log("我们是全局的fn");
// }
// function fn2() {
//     console.log(fn);  // ？
//     fn = 3;
//     return;
//     function fn() {
//         console.log("我是fn2里面的");
//     }
// }
// fn2();

// 3.下列代码控制台打印出的值是多少？写出执行过程
// function test() {
//     b();
//     var a = 1;
//     function b() {
//         console.log(a);  // ？
//         var a = 2;
//     }
// }
// test();  // 
// 4.下列代码控制台打印出的值是多少？写出执行过程
// var foo = function () {
//     console.log(2)
// }
// function foo() {
//     console.log(1)
// }
// foo();   // ?


// 5.下列代码控制台打印出的值是多少？写出执行过程
// console.log(a);    // ?
// var a = '666';
// function a() { console.log('我是函数') }
// console.log(a);    // ?

// 6.下列代码控制台打印出的值是多少？写出执行过程
// function test() {
//     let x = 31;
//     if (true) {
//         let x = 71;
//         console.log(x) // ?
//     }
//     console.log(x) // ? 
// }
// test()
// 7.下列代码控制台打印出的值是多少？写出执行过程
// function test() {
//     var x = 31;
//     if (true) {
//         var x = 71;
//         console.log(x) // ?
//     }
//     console.log(x) // ?
// }
// test()
// 8.下列代码控制台打印出的值是多少？写出执行过程
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
// 9.下列代码控制台打印出的值是多少？
// (function f(num) {
//     function num() { };
//     console.log(num); // ？
//     var num = 10
//     console.log(num); // ？
// }(100))

// 10.下列代码控制台打印出的值是多少？
// var a = [];
// for (var i = 0; i < 10; i++) {
//     a[i] = function () {
//         console.log(i);
//     };
// }
// a[6](); // ?
// a[7](); // ?
// a[8](); // ?
// a[9](); // ?

// 11.下列代码控制台打印出的值是多少？
// var a = [];
// for (let i = 0; i < 10; i++) {
//     a[i] = function () {
//         console.log(i);
//     };
// }
// a[6](); // ?
// a[7](); // ?
// a[8](); // ?
// a[9](); // ?
// 12. 对象字面量的方式创建一个对象狗， 狗有颜色，大小，名字，狗能跑，能汪汪叫
// 13.将下面对象的属性取出来存储到一个数组中
// var person = { name: "one", age: 12, sex: "男" };
// 14.给下面的对象添加一个属性color, 值是一个数组['red', 'black', 'white'], 在添加一个属性bark, 值是一个方法
// var myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
// }


