
// 3.按照从大到小的顺序排列 ，var arr= [10, 5, 34, 59, 98],最后打印排序后的数组。

var arr = [10, 5, 34, 59, 98]
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i]; j++) {
        var temp = []
        if (arr[j] < arr[j + 1]) {
            temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
        }
    }


}
console.log(arr)