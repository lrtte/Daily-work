//字符串连接使用什么符号
// '+'
// 例 var str='张三'
//  var str1='李四'
//  console.log(str+str1)

//如何把一个数字转换成字符串，如何把字符串转换成整数
//   var num=9
//   console.log(String(num))
//   var str='678aa'
//   console.log(parseInt(str))

// 题、i++ 和++i 有什么区别
// i++ 先使用后加1
// ++i 先加1 后使用

// *= 是干什么用的？ 什么意思
// 简写   num*=i//意思是num=num+i

// 求余用哪个符号
// %

// ==和===的区别
// == 值相等
// === 值和类型都相等

// NAN 是什么
// 不是一个数字

// NAN==NAN的结果是
// false //NAN与任何数都不相等 包括它本身

// 如何输出a对象中的name属性
// var a ={
//     name:'张三'
// }
// console.log(a.name)

// 如何删除一个对象中的属性?
// var a ={
//     name:'张三',
//     age:38
// }
// delete a.age
// console.log(a)

// a是一个二维数组,如何打印第2个元素的第4个元素?
// var arr=['a',['s','f','k','h'],'c',]
// console.log(arr[1][3])

// 什么时候使用 .?
// var a ={
//     name:'张三'
// }
// console.log(a.name)
//修改删除输出对象属性时使用

// 编程: 计算1~100之间所有能整除5的数的和?
// var sum=0
// for(var i=1;i<=100;i++){
//     if(i%5==0)
//     sum+=i
// }console.log(sum)

// 分支有几种结构? 都是什么?
// 三种
// 单向分支、双向分支、多项分支

// 如何查看一个变量的类型?
// var num=1
// console.log(typeof num)

// 1 == "1" 是否相等? 0== "0" 是否相等?
//是                   是

// 并且用什么符号表示?
//&&

// 定义一个对象保存姓名和年龄? 然后判断如果年龄大于等于18就显示 XXX已成年,否则显示 XXX 未成年
// var people={
//     age:30,
//     name:'张三'
// }
// if(people.age>18){
//     console.log(people.name+'已成年')
// }else{
//     console.log(people.name+'未成年')
// }

// 与,或,非的特点? js代码的方法?
// 与 都是true才是true  &&
// 或 有一个true就是true ||
// 非 相反值 !

// 如何定义一个对象?
// var people={
//     age:30,
//     name:'张三'
// }

// 如何打印对象中的一个属性?
// var people={
//     age:30,
//     name:'张三'
// }
// console.log(people.age)

// 如何定义一个数组? 如何打印数组的一个元素?
// var arr=['a','e','c',]
// console.log(arr[1])

// 计算1 ~ 100之间所有奇数的和?
// var sun=0
// for(var i=1;i<=100;i++){
//     if(i%2!=0){
//         sun+=i
//     }  
// }
// console.log(sun)

// 定义变量保存学生的分数,根据分类打印优,良,及格,不及格?
// var src=89
// if(src<60){
//     console.log('不及格')
// }else if(src>=60&&src<70){
//     console.log('及格')
// }else if(src>=70&&src<80){
//     console.log('良')
// }else if(src>=80){
//     console.log('优')
// }

// true && false && true && true && false  的结果是 ?
// false

// false || false || false || true 的结果是?
// true

// !false && !true && !false 的结果?
// false

// 如何把一个数字转换为布尔?
// var num=5
// console.log(Boolean(num))
