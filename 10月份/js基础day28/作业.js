// // 1. 输出下列代码a的值分别是多少？并且把预解析的过程写出来
// var a = 25;
//  function abc() {
//    console.log(a);   // ?  
//    var a = 10;
//  }
// abc();
// console.log(a)  //?

// // 2.输出下列代码a的值分别是多少？并且把预解析的过程写出来
// var a = 25;
//  function abc() {
//    console.log(a);   // ?
//    a = 10;
//  }
// abc();
// console.log(a)  //？

// // 3. 输出下列代码name3的值分别是多少？并且把预解析的过程写出来
// var name3 = "zs";
// function f3() {
//     var name3 = "ls";
//     function f4() {
//         name3 = "ww";
//     }
//     f4();
//     console.log(name3);   // ? 
// }
// f3();
// console.log(name3); // ?

// 4.下列代码控制台打印出的值分别是多少？并且把预解析的过程写出来
// var color = "red";
//    function outer() {
//        var anotherColor = "blue";
//        function inner() {
//            var tmpColor = color;   
//            color = anotherColor; 
//            anotherColor = tmpColor;  
//            console.log(anotherColor);     // ? red
//        }
//        inner();
//    }
//    outer();
//    console.log(color);  // 111111111111111111111111111111111?  blue

// 5. 下列代码控制台打印出的值分别是多少？并且把预解析的过程写出来
// var a = 25;
// function f1() {
//   var a = b = c = 9;
//   console.log(a);    //?  9
//   console.log(b);    // ?  9
//   console.log(c);    // ? 9
// }
//  f1();
//  console.log(a);    //?   25 
// console.log(b);     // ?   9
//  console.log(c);     //? 9

// 6.下列代码控制台打印出的值是多少？并且把预解析的过程写出来
//   (function (num) {
//         console.log(num); // ？  
//         var num = 10;
//       console.log(num);  // ? 
//     }(100))

// // 7.下列代码控制台打印出的值是多少？并且把预解析的过程写出来
// function a(b) {
//       console.log(b);  //? return 123
//       var s = b();
//       console.log(s)  // ?123
//     }
//  a(c);
// function c() { return 123 }
// // 8.下列代码控制台打印出的值是多少？并且把预解析的过程写出来
// var n = 0;
// function a(){
//     var n = 10;
//     function b(){
//         n++;
//         console.log(n);
//     }
//     b();
//     return b;
// }
// var c = a();   //? 11
// c(); //?
// console.log(n); // ? 0

// // 9.下列代码控制台打印出的值是多少？把执行过程写出来
// function a(){
//      console.log('a');
//      c();
//  }
//  function b(){
//      console.log('b');
//      a();
//  }
//  function c(){
//      console.log('c');
//  }
//  a(); // ？  a c
//  b();  // ？b a
//  c();   // ？c c 11111111111111111111111111111
