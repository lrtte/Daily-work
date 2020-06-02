// 需求:.10个整数{ 9, 10, 6, 6, 1, 9, 3, 5, 6, 4 } ，保存到数组中。
//  1.去除数组中重复的内容，只保留唯一的元素。
//  2.以下列格式打印数组：[9, 10, 6, 1, 3, 5, 4]
//声明数组
// var arr = [9, 10, 6, 6, 1, 9, 3, 5, 6, 4]
// // 声明一个新数组
// var newArr = []
// // 循环遍历
// for (var i = 0; i < arr.length; i++) {
//     // 判断空数组中有没有遍历的那个数 
//     if (newArr.indexOf(arr[i]) == -1) {
//         // 如果没有 就把遍历的呢个数添加到新数组中
//         newArr.push(arr[i])
//     }

// }
// console.log(newArr)

// function f1() {
//         var num = 123;
//         function f2() {
//           console.log(num);
//           }
//           f2();
//         }
//         var num = 456;
//         f1();

//     console.log(a)
//  function a() {
//     console.log("aa");
//   }

//   var a = 1;
//   console.log(a);
// function f(y){
//         var x = y*y
//          return x
//         }
//      for(x = 0;x<5;x++){
//         y = f(x);
//         console.log(y)
//         }
// f1();
//  console.log(c);
//  console.log(b);
//  console.log(a);

//  function f1() {
//    var a = b = c = 9;
//    console.log(a);
//    console.log(b);
//    console.log(c);
//     }
function test() {
       b();
       var a = 1;
       function b() {
          console.log(a); 
          var a = 2;
          }
        }
     test();