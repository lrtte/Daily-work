// 20.左奇右偶
//     10个整数的数组[26,67,49,38,52,66,7,71,56,87],元素重新排列，所有的奇数保存到数组左边，所有的偶数保存到数组右边。

var arr = [26, 67, 49, 38, 52, 66, 7, 71, 56, 87];
//声明一个空数组
var newArr = []
// 用for的循环打印数组
for (var i = 0; i < arr.length; i++) {
    //用if判断偶数
    if (arr[i] % 2 == 0) {
        //偶数插入到后面
        newArr.push(arr[i])
    } else {
        //奇数插入到后面
        newArr.unshift(arr[i])
    }
}
//输入结果
console.log(newArr);