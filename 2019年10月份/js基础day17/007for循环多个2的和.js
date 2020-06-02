// 需求: 用for循环求2+22+222+2222+22222的和
//1.定义一个数2
//2.定义一个sum 
//3.2*10+2
var a = 2;
var sum = 0;
for (var i = 1; i < 5; i++) {
    a = a * 10 + 2
    sum += a
}
console.log(sum)