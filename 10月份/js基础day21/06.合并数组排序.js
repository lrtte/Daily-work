// 6.现在有2个数组，var arr1 = [1,7,9,11,8,15,10,19],var arr2 =[2,1,6,8,10]
// 将2个数组合并为一个数组，并将数组去重，然后按照升序进行排列

//声明两个数组
var arr1 = [1, 7, 9, 11, 8, 15, 10, 19]
var arr2 = [2, 1, 6, 8, 10]
//用concat合并数组
var arr3 = arr1.concat(arr2)
//声明一个空数组
var newArr = [];
// 循环遍历
for (var i = 0; i < arr3.length; i++) {
    // 声明一个变量 假设没有重复的为true 
    var canAdd = true;
    // 循环遍历新数组
    for (var j = 0; j < newArr.length; j++) {
        //判断数组里面的元素是否重复
        if (arr3[i] == newArr[j]) {
            // 重复为false
            canAdd = false;
            //跳出循环
            break;
        }
    }
    //不重复
    if (canAdd) {
        //将数组的元素赋值到新数组
        newArr[newArr.length] = arr3[i];
    }
}
//遍历数组
for (var i = 0; i < newArr.length - 1; i++) {
    
    for (var j = 0; j < newArr.length - 1 - i; j++) {
        if (newArr[j] > newArr[j + 1]) {
            var temp = newArr[j];
            newArr[j] = newArr[j + 1];
            newArr[j + 1] = temp;
        }
    }
}
console.log(newArr);




















// var arr1 = [1, 7, 9, 11, 8, 15, 10, 19]
// var arr2 = [2, 1, 6, 8, 10]
// var arr3 = arr1.concat(arr2)
// var newArr = []
// for (var i = 0; i < arr3.length; i++) {

//     for (var j = 0; j < newArr[i]; j++) {
//         if (newArr[i] == arr3[i]) {
//             break;
//         }
//         if (newArr[i] != arr3[i]) {
//             newArr[i] = arr3[i]
//         }

//         var temp = []

//         if (newArr[j] > newArr[j + 1]) {
//             temp = newArr[j]
//             newArr[j] = newArr[j + 1]
//             newArr[j + 1] = temp
//         }

//     }
//     console.log(newArr[i])
// }






