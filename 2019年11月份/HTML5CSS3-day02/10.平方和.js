// 10.定义一个三位数，求各位数的平方和是多少，在控制台输出。
var num=123
let ge = num % 10
let shi = parseInt((num / 10) % 10)
let bai = parseInt(num / 100)
console.log(ge*ge+shi*shi+bai*bai)