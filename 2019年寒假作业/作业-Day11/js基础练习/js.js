
// 1. 使用一个for循环按顺序打印出：`10，8，6，4，2，0，-2`
// var num = 10;
// for (var i = 0; i < 6; i++) {
//   num -= 2;
//   console.log(num);
// }

// 2. 使用一个while循环按顺序打印出：`2，0，-2，-4，-6，-8，-10`
// var num = 2;
// var i = 1;
// while (i <= 7) {
//   console.log(num);
//   num -= 2;
//   i++;
// }
 

// // 3. 使用一个do...while循环打印出：`100`
// var num = 100;
// do {
//   console.log(num);
// } while (false);



// // 4. 使用一个for循环实现：1-100之间所有偶数的打印
    // 要求：使用两种方式实现（其中一个方式必须使用 `continue` 关键字）
//方法一
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//   }
  
//   //方法二
//   for (let i = 0; i <= 100; i++) {
//     if (i % 2 != 0) {
//       continue;
//     }
//     console.log(i);
//   }

// // 5. 找出1-1000中能被6整除的偶数，且个位数不能为0
// for (let i = 0; i <= 1000; i++) {
//     if (i % 10 != 0 && i % 6 == 0) {
//       console.log(i);
//     }
//   }