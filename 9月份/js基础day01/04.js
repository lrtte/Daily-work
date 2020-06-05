// 4.声明两个变量,第一个变量为num1,值为123,第二个变量为num2,值为456,实现两个变量值的交换,即让num1为456,让num2为123;
// 要求，用2种方式实现
var num1 = '123'
var num2 = '456'
var num3 = num1
num1 = num2
num2 = num3
console.log(num1, num2)

var num1 = '123'
var num2 = '456'
var num3 = []
num3[5] = num1
num3[0] = num2
num1 = num3[0]
num2 = num3[5]
console.log(num1)
console.log(num2)
