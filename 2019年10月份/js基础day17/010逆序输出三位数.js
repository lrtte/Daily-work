// 需求: 声明一个三位数，按逆序打印出各位数字。例如原数字为312，应输出213。
// 1.声明一个变量 3位数
var num = 123;
// 2.声明另外三个变量 分别表示个位 十位 百位
var ge = num % 10;
var shi = parseInt(num / 10 % 10);
var bai = parseInt(num / 100);
// console.log(bw);
// 3.先输出百位 再输出十位 最后输出个位
console.log(ge + '' + shi + "" + bai);