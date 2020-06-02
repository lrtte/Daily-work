// 拓展运算符是解构数组的一种方法 ...数组
let arr=[1,2,3,4]
console.log(...arr)

// 拓展运算符连接数组
let arr1=[1,2,3]
let arr2=[2,7,8]
let arr3=[...arr1,...arr2]
console.log(arr3)