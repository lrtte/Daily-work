// 1.   求数组和及平均值
// 需求：
// 求数组 [5,19,23,6,14,8] 里面所有元素的和以及平均值
//分析 声明数组 声明一个变量求和 声明平均值
//声明数组
var arr = [5, 19, 23, 6, 14, 8];
//声明一个变量求和
var sum = 0;
//声明平均值
var avg=0;
//遍历数组
for (var i = 0; i < arr.length; i++) {
    //求和
    sum += arr[i]
    // 求平均值
    avg=sum/arr.length

}
//输出和和平均值
console.log(sum)
console.log(avg)
