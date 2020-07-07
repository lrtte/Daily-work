// 一、编程题
// 41.入职薪水10K，每年涨幅5 %，输出50年后工资多少
// var mon = 10000
// for (var i = 1; i <= 50; i++) {
//     mon = mon * 1.05
// }
// console.log(mon)

// 42.求出1 - 1 / 2 + 1 / 3 - 1 / 4…..-1 / 100的和（拔高题）


// 43.用for循环求2 + 22 + 222 + 2222 + 22222的和
// var a = 0
// for (var i = 2; i <= 22222; i++) {
//     var ge = i % 10
//     var shi = (i - ge) / 10 % 10
//     var bai = (i - ge - shi * 10) / 100 % 10
//     var qian = (i - ge - shi * 10 - bai * 100) / 1000 % 10
//     var wan = (i - ge - shi * 10 - bai * 100 - qian * 1000) / 10000
//     if (i < 10 && ge == 2) {
//         a += i
//     } else if (i < 100 && shi == 2 && shi == ge) {
//         a += i
//     } else if (i < 1000 && shi == 2 && shi == ge && ge == bai) {
//         a += i
//     } else if (i < 10000 && shi == 2 && shi == ge && ge == bai && ge == qian) {
//         a += i
//     } else if (i < 100000 && shi == 2 && shi == ge && ge == bai && ge == qian && ge == wan) {
//         a += i
//     }
// }
// console.log(a)

// 44.定义一个人的对象，有name, age, gender, height等属性，
// 要求：1) 获取name的值
// 2) 通过2种方式给对象添加一个新的属性weight, 值自己写
// 3) 删除属性名height
// var people = {
//     name: '张三',
//     age: 16,
//     gender: '男',
//     height: 180,
// }
// console.log(people.name)
// people.weight = 140;
// var attrName = 'weight';
// people[attrName] = 140;
// delete people.height
// console.log(people)

// 45.定义一个数组，取出下标是3的值，计算下表是2和下表是4对应的元素的和，并且赋值给一个变量，在控制台输出
// var arr = [2, 3, 4, 5, 6, 7,]
// console.log(arr[3])
// console.log(arr[0] = arr[2] + arr[4])
// console.log(arr)

// 46.定义一个二维数组，var arr = [1, 2, ’3’, true, [22, 33, 55, 66]], 将55输出在控制台上
// var arr = [1, 2, '3', true, [22, 33, 55, 66]]
// console.log(arr[4][2])

// 47.猴子偷桃  第一天吃一半 + 1个，第二天吃剩下的一半 + 1个，以后都吃剩下的一半 + 1个
// 第10天只剩一个了 问第一天摘了多少桃子？0
// var a = 1
// for (var i = 1; i <= 10; i++) {
//     a = (a + 1) * 2
// }
// console.log(a)


// 48.控制台输出：计算 1 + 1 / 2! + 1 / 3! + 1 / 4! +...1 / 20!的和
// var sum1 = 1;
// var sum2 = 0;
// for (var i = 1; i <= 20; i++) {
//     for (var j = 1; j <= i; j++) {
//         sum1 = sum1 * j;
//     }
//     sum2 = (1 / sum1) + sum2;
// }
// console.log(sum2);


// 49.控制台输出：求1 x 2 x 3 x 4 x ...x 19 x 20的结果
// var a = 1;
// for (var i = 1; i <= 20; i++) {
//     a *= i
// }
// console.log(a)

// 50.控制台输出：从100到500所有自然数中不含数字4的自然数共有多少个？
// var a = 0;
// for (var i = 100; i <= 500; i++) {
//     if (i % 4 != 0) {
//         a += 1
//     }
// }
// console.log(a)

// 二、简答题
// 1.怎么将别的数据类型转换成字符串类型
// 1.string(属性名)
// 2.属性名.tostring()

// 2.怎么定义一个对象，并且给获取对象的属性，给对象添加和删除属性
// var 对象名 = {
//     属性名：属性值
// }
// 对象名.属性名 = 属性值 //添加属性
// delete 对象名.属性名 //删除属性
// console.log(对象名.属性名) //获取对象的属性

// 3. == 和 === 的区别是什么？
// == 值相等
// === 值和类型都相等

// console.log(1 == “1”)和console.log(1 === false)的结果是什么，并解释为什么
// console.log(1 == '1')//true 值相等
// console.log(1 === false)//false 类型不同

// 4.前++ 后++的区别是什么
// 前++ 先加一后使用
// 后++ 先使用后加一