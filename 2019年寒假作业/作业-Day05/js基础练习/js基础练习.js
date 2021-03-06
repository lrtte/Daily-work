// js解答题
// // 如何判断一个变量是否是数字（需要通过输出true或false进行判断），输出的true或false分别代表着什么含义？
// 判断一个变量是否是数字，可以通过isNaN(变量名)，输出true代表变量不是一个数字，输出false代表变量是一个数字。

// // 100+100结果是200，那么100+‘100’结果是什么，为什么？
// 当+号的两边都是number类型的时候,此时+号代表数学符号+法
// 当 + 号的两边，只要有一边是string类型的时候，此时 + 号代表字符串的连接符

// // 请说说 + 号有几层含义，分别是什么？
// 第一层意义，当 + 号的两边都是number类型的时候，此时 + 号 代表数学符号加法
// 第二层意义，当 + 号的两边，只要有一边是string类型的时候，此时 + 号代表字符串的连接符
// 第三层意义，+可以进行数据类型的隐式转换，给一个string类型的数据前面加上+号，就会把这个字符串变成数字

// // 前--和后--的区别是什么？
// 前-- 遇到赋值运算的时候，会先赋值，再自减1，后--遇到赋值运算的时候，先自减1，再赋值

// // js编程题
// // 如何能够判断一个数字是小数还是整数？


 
// 探究题：详见下面代码

//  isNaN('') // false
//  isNaN('1A') // true
//  isNaN(true) // false
//  isNaN({}) // true
//  isNaN([1,1]) // true
//  // 探究：根据isNaN的作用你是否能说明出现上面现象的原因

// 打印下面的输出结果

//  var num1 = 12, num2 = '12', num3 = '', num4;
//  console.log(num1 + num2);//1212
//  console.log(num1 + +num3);//12
//  console.log(num1 + +num4);//NaN
//  console.log(+num2 + !!num3);//12
//  console.log(!!num2 + !!num4);//1
// 打印下面的输出结果

//  var a = 10,
//       b = ++a,
//       c = a--,
//       d = c++ + ++b + --a;
//   console.log(a, b, c, d);//(9 12 12 32)
 
//   var a = 100,
//       b = --a,
//       c = a-- + b++,
//       d = a - b-- + ++c;
//   console.log(a, b, c, d);//(98 99 199 197)
              