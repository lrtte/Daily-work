// 4.10个整数{9,10,6,6,1,9,3,5,6,4}，保存到数组中。
//     1.去除数组中重复的内容，只保留唯一的元素。
//     2.以下列格式打印数组：[9,10,6,1,3,5,4]

//声明数组
var arr = [9, 10, 6, 6, 1, 9, 3, 5, 6, 4]
//声明一个新的空数组
var newArr = [];
//循环遍历
for (var i = 0; i < arr.length; i++) {
    //循环遍历新数组
    for (var j = 0; j < newArr.length; j++) {
        // 判断数组里面的元素是否重复 如果重复
        if (arr[i] == newArr[j]) {
            // 跳出循环
            break;
        }
    }
    //如果不重复
    if (arr[i] != newArr[j]) {
        //将数组里的元素赋值到新数组
        newArr[newArr.length] = arr[i];
    }
}
// 输出新数组
console.log(newArr);




// var arr = [9, 10, 6, 6, 1, 9, 3, 5, 6, 4]
// var sum=0;
// for (var i = 0; i < arr.length; i++) {
//     for(var j=0;j<arr[i];j++){
//         if (arr[j] == arr[j + 1]) {
//             sum++

//          }

//     }



// }
