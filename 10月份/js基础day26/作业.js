// 1. 写一个函数，实现对任意数组的排序，var arr = [18, 45, 0, 58, 32,59]
// 声明函数 定义一个形参 声明数组 sort 排序
// function a(arr) {

//     arr.sort(function (a, b) { return a - b })
//     return arr
// }
// var arr = [18, 45, 0, 58, 32, 59]
// console.log(a(arr))

// 2. 写一个函数，求任意数组的元素的和，var arr = [18, 45, 333，5，6，1，5]\
// 声明函数定义一个形参  声明数组 定义一个计数变量 和 
// function a(arr) {
//     var sum = 0
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
// return sum
// }
// var arr = [18, 45, 333, 5, 6, 1, 5]
// console.log(a(arr))

// 3. 写一个函数，求出3在数组 var arr = {3,4,3,5,7,9};中出现的次数
// 声明函数 声明数组 循环遍历 定义一个计数变量sum 判断 arr[i]==3  sum++
// function a() {
//     var arr = [3, 4, 3, 5, 7, 9]
//     var sum = 0
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] == 3) {
//             sum++
//         }
//     }
//     return sum
// }
// console.log(a())

// 6. 写一个函数，判断是否是闰年【能被4整除且不能被100整除，或者能被400整除】
// 声明函数  定义一个变量 为年数 判断
// function a() {
//     var year = 2000
//     if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
//         console.log('是')
//     } else {
//         console.log('否')
//     }
// }
// a()

// 7. 写一个函数,  求圆的面积：PI *r *r，圆的周长
// 声明函数 定义一个形参 园的面积 3.14*r*r 圆的周长 2*3.14*r
// function a(r){
// console.log(3.14*r*r)
// console.log(2*3.14*r)
// }
// var r=1
// a(r)
// 8. 写一个函数,  100到200有多少3 ，解释：例如101中没有3；103中有一个3；133中有两个3。你要做的是统计出到200之间的整数一共有多少个3。
// 声明函数 循环遍历 声明一个计数变量 sum 判断个十百==3 是 sum++
// function a() {

//     var sum = 0
//     for (var i = 100; i <= 200; i++) {
//         var ge = i % 10
//         var shi = (i - ge) / 10 % 10
//         var bai = (i - ge - shi * 10) / 100

//         if (ge == 3) {
//             sum++
//         }
//         if (shi == 3) {
//             sum++
//         }
//         if (bai == 3) {
//             sum++
//         }
//     }

//     return sum
// }
// console.log(a())



// 9. 写一个函数，该函数用于计算一个正数的因子和（比如6的因子和是1+2+3+6=12）
// 声明函数 声明一个正数  num 循环遍历 判断i%num==0 是因子 声明一个计数变量 sum 有一个因子 sum+=i
// function a(num) {
//     var sum = 0
//     for (var i = 1; i <= num; i++) {

//         if (num % i == 0) {
//             sum += i
//         }

//     }
//     return sum
// }
// var num = 6
// console.log(a(num))

// // 10. 写一个函数，求斐波那契数列fibonacci中的第n个数是多少？？1  1  2  3  5   8  13  21 
// // 声明函数 声明三个变量  分别表示第1，2，3个数 循环遍历 从第三个数开始 i<=n 输出 第三个数
// function a(n){
// var num1=1
// var num2=1
// var num3=0
// for(var i=2;i<n;i++){
//     num3=num2+num1
//     num1=num2
//     num2=num3

// }
// return num3

// }
// var n=5
// console.log(a(n))

// // 11.写一个函数，求任意一个数的阶乘
// // 声明函数 定义一个变量 阶乘和sum 循环遍历  sum*=i
// function a(n){
//  var sum=1
//  for(var i=1;i<=n;i++){
//       sum*=i
//  }
//  return sum
// }
// var n=3
// console.log(a(n))
// 12.写一个函数, 用户输入任意3个数的大小，返回最大值
// // 13.写一个函数,求数组中的最大值,  var arr = [18, 45, 0, 58, 32,59]
// // 声明函数 声明数组 循环遍历 声明一个最大值 默认arr[0] 判断大小 
// function a(){
//     var arr = [18, 45, 0, 58, 32,59]
//     var max=arr[0]
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]>arr[0]){
//             max=arr[i]
//         }

//     }
//     console.log(max)

// }
// a()
// 14.写一个函数,去掉数组中重复的元素，var arr = [1,5,4,4,7,6,6]
// 声明函数 声明数组 循环遍历 定义一个新数组 判断新数组下标是否为-1 是 添加到新数组
// function a(){
//     var arr = [1,5,4,4,7,6,6]
//     var newarr=[]
//     for(var i=0;i<arr.length;i++){
//         if(newarr.indexOf(arr[i])==-1){
//             newarr.push(arr[i])
//         }
//     }
//     console.log(newarr)
// }
// a()

// 15.写一个函数，求100 - 200 之间所有数的和
// 声明函数 循环遍历 定义一个变量和sum sum+=i
// function a(){
//     var sum=0
// for(var i=100;i<=200;i++){
//     sum+=i
// }
// console.log(sum)
// }
// a()

// 16.写一个函数, 实现字符串反转,输入：["h","e","l","l","o"],输出：["o","l","l","e","h"]
// 声明函数 声明数组 reverse 反转
// function a(){
// var arr=["h","e","l","l","o"]
// arr.reverse()
// console.log(arr)
// }
// a()

// 17.写一个函数，实现无论用户传入几个数字，都可以求和，例如，console.log(add(1,2,3)); //6   console.log(add(1,2,3,4,5,6)); //21
// 声明函数  定义一个变量 和 sum 循环遍历 用argument 接收输入的实参
// function a(){
//     var sum=0
// for(var i=0;i<arguments.length;i++){
//     sum+=arguments[i]
// }
// return sum
// }
// console.log(a(1,2))

// 18.给定一个整数，写一个函数来判断它是否是 3 的幂次方
// 声明函数 定义一个整数n 循环遍历到这个整数 定义一个变量 sum 循环一次 sum*=3  判断sum==n =true 不等 false
// function a(n){
//     var sum=1
//     for(var i=1;i<n;i++){
//         sum*=3
//         if(sum==n){
//             return true
//         }else if (sum>n){
//             return false
//         }
//     }

// }
// var n=9 
// console.log(a(n))
// 19.给定两个数组，编写一个函数来计算它们的交集。
// 定义函数 声明两个数组 定义一个新的空数组  循环遍历 判断arr[i]==arr[j] 相等 添加到新数组
// function a(){
//     var arr1=[1,2,3]
//     var arr2=[1,3]
//     var newarr=[]
//     for(var i=0;i<arr1.length;i++){
//         for(var j=0;j<arr2.length;j++){
//             if(arr1[i]==arr2[j]){
//                 newarr.push(arr1[i])
//             }
//         }
//     }
//     console.log(newarr)
// }
// a()

// 20.写一个函数，打印九九乘法表
// 声明函数 循环遍历 外层循环控制行数 内层循环控制列数
// function a() {

//     for (var i = 1; i <= 9; i++) {
//         var str = ''
//         for (var j = 1; j <= i; j++) {
//             str += j + '*' + i + '=' + j * i + ' '
//         }
//         console.log(str)
//     }

// }
// a()
// 21.写一个函数，实现n的阶层的和求1+2!+3!+...+n!的和
// 声明函数 声明一个变量代表阶乘 jie 声明一个变量阶乘和 sum 循环遍历 计算阶乘 和阶乘和
// function a(n){
//     var jie=1
//     var sum=0
//     for(var i=1;i<=n;i++){
//         jie*=i
//         sum+=jie
//     }
//     return sum

// }
// console.log(a(3))



// 22.写一个函数， 传入3 个正数，判断能否构成一个三角形



