// 2.   求数组最值
// 需求：
// 求数组[5,19,23,6,14,8]中的最大值 最小值
//分析 声明数组  声明一个变量max为数组的第一个元素，假设它就是最大值 历遍循环 
// 判断 数组里的元素是否大于max 大于就让他等于max 继续比较 知道得出最大值 输出 最小值 同理
//声明数组
var arr = [5, 19, 23, 6, 14, 8];
//声明一个变量max为数组的第一个元素
var max = arr[0];
//声明一个变量min为数组的第一个元素
var min = arr[0]
//历遍循环
for (var i = 0; i < arr.length; i++) {
    // 判断 数组里的元素是否大于max 
    if (arr[i] > max) {
        //大于就让他等于max 继续比较 知道得出最大值
        max = arr[i]
    }
}
//输出
console.log(max + '是最大值')
 //历遍循环
for (var i = 0; i < arr.length; i++) {
    // 判断 数组里的元素是否小于min
    if (arr[i] < min) {
     //小于就让他等于min 继续比较 知道得出最小值   
        min = arr[i]
    }
}
//输出
console.log(min + '是最小值')












