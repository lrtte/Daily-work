// 一、编程题
// 61.计算从1到100临近两个整数的合并依次输出3(1 + 2), 第二次输出5(2 + 3), 最后一次输出199(99 + 100)
// var a = 0;
// for (var i = 1; i <= 100; i++) {
//     a = i + i + 1
//     console.log(`${a}(${i}+${i + 1})`)
// }

// 62.把1 - 100之间的数字，10个数字为一组，在控制台打印出每组的和，例如，1 - 10的和为一组，输出来，11 - 20的和为一组输出来，依次类推
// var num1 = 0;
// var num2 = 0;
// var num3 = 0;
// var num4 = 0;
// var num5 = 0;
// var num6 = 0;
// var num7 = 0;
// var num8 = 0;
// var num9 = 0;
// var num10 = 0;
// for (var i = 1; i <= 100; i++) {
//     if (i <= 10) {
//         num1 += i
//     } else if (i <= 20 && i > 10) {
//         num2 += i
//     } else if (i <= 30 && i > 20) {
//         num3 += i
//     } else if (i <= 40 && i > 30) {
//         num4 += i
//     } else if (i <= 50 && i > 40) {
//         num5 += i
//     } else if (i <= 60 && i > 50) {
//         num6 += i
//     } else if (i <= 70 && i > 60) {
//         num7 += i
//     } else if (i <= 80 && i > 70) {
//         num8 += i
//     } else if (i <= 90 && i > 80) {
//         num9 += i
//     } else if (i <= 100 && i > 90) {
//         num10 += i
//     }
// }
// console.log(num1);
// console.log(num2);
// console.log(num3);
// console.log(num4);
// console.log(num5);
// console.log(num6);
// console.log(num7);
// console.log(num8);
// console.log(num9);
// console.log(num10);


// 63.开发一个标题为“ FlipFlop”的游戏应用程序。它从 1 计数到100 ，遇到3的倍数输出单词“ Flip”，
// 遇到5的倍数就输出单词“Flop”，遇到即使 3 又是 5 的倍数时则输出单词“ FlipFlop” ，其余情况下输出当前数字
// for (var i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log('FlipFlop')
//     } else if (i % 3 == 0) {
//         console.log('Flip')
//     } else if (i % 5 == 0) {
//         console.log('Flop')
//     } else {
//         console.log(i)
//     }
// }

// 64. 将下列文字分成多行显示, 春眠不觉晓，处处闻啼鸟。 夜来风雨声，花落知多少。
// console.log(`春眠不觉晓，
//             处处闻啼鸟。 
//             夜来风雨声，
//             花落知多少。`)

// 65. 定义一个四位数，按逆序打印出各位数字。例如原数字为4321，应输出1234
// var num = 1234;
// var a = 0;
// var ge = num % 10;
// var shi = (num - ge) / 10 % 10
// var bai = (num - ge - shi * 10) / 100 % 10
// var qian = (num - ge - shi * 10 - bai * 100) / 1000
// console.log(ge, shi, bai, qian)

// 66.定义一个三位数，求各位数的总和是多少，在控制台输出
// var num = 234;
// var a = 0;
// var ge = num % 10;
// var shi = (num - ge) / 10 % 10
// var bai = (num - ge - shi * 10) / 100 % 10
// if (a = ge + shi + bai) {
//     console.log(a)
// }

// 67.计算1 + 1 / 4 + 1 / 9 +….+1 / 400，并且在控制台输出结果





// 68. 计算1 - 100能被3整除，但是不能被5整除的数，在控制台打印出来，并且统计出个数
// var a = 0
// for (var i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 != 0) {
//         console.log(i)
//         a += 1
//     }
// }
// console.log(a)

// 69.输出从2000年（含）到3000年（含）间的所有闰年
// for (var i = 2000; i <= 3000; i++) {
//     if (i % 4 == 0 && i % 100 != 0 || i % 400 == 0) {
//         console.log(i)
//     }
// }




// 70.计算下列表达式的结果：，并写出详细步骤
// var a = 10;
// var b = 2;
// a %= b;//a=a%b=0
// console.log(a);//a=0
// console.log(b++);//b=2

// 二、简答题
// 1.console.log(0.1 + .03)结果是什么，为什么
// console.log(0.1 + .03)//0.13


// 2.怎么将一个小数，取小数点的后2位
// console.log((输出数字).toFixed(2))

// 3.什么是隐式类型转换，什么时候发生
// 当两个不同类型的数据进行比较，js会自动转换成相同类型进行比较

// 4.类型转换时，Number和parseInt的区别是什么
// Number可以转化成小数
// parseInt取整数
