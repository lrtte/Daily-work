// 现在有2个数组，var arr1 = [1,7,9,11,8,15,10,19],var arr2 =[2,1,6,8,10]
// 声明两个数组 将2个数组合并为一个数组，并将数组去重，然后按照升序进行排列
// 用concat 合并成一个数组 定义一个新数组 循环遍历 
// 判断数组里面的元素是否重复 没有重复就赋值到新的数组里
// 声明两个数组
var arr1 = [1, 7, 9, 11, 8, 15, 10, 19]
var arr2 = [2, 1, 6, 8, 10]
// 用concat 合并成一个数组
var arr3 = arr1.concat(arr2)
// 定义一个新数组
var newarr = []
// 循环遍历
for (var i = 0; i < arr3.length; i++) {
    // 判断数组里面的元素是否重复
    if (newarr.indexOf(arr3[i] === -1)) {
        // 没有重复就赋值到新的数组里
        newarr.push(arr3[i])
    }

}

console.log(newarr)