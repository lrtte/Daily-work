// 9. 录入一个三位数，按逆序打印出各位数字。例如原数字为321，应输出123。
let num = 123
let ge = num % 10
let shi = parseInt((num / 10) % 10)
let bai = parseInt(num / 100)
console.log('' + ge + shi + bai)