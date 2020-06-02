// 1.用函数实现任意数组从小到大的排序，不允许使用sort 
// 声明函数 定义一个数组 冒泡排序 确定外层循环的次数 规律是 数组的长度-1 
// 确定内层循环的次数 规律是 数组的长度-1-i 
// 声明一个临时变量 判断大小 交换位置
function a(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}
var arr = [2, 3, 1, 6, 5]
console.log(a(arr))