// 15. 求数组中的最大值和最小值, var arr =  [11, 32，55, 47，79，23]


//声明一个变量存储数组
var arr = [11, 32, 55, 47, 55, 79, 23]
//声明一个变量max为数组的第一个元素，假设它就是最大值
var max = arr[0]
var min = arr[0]
// 遍历数组
for (var i = 0; i < arr.length; i++) {
    //拿max和下一位元素作比较
    if (max < arr[i]) {
        //如果max小于下一位，就把下一位赋值给max
        max = arr[i]
    }
    if (min > arr[i]) {
        min = arr[i]
    }
}
//输出
console.log(max, min)


