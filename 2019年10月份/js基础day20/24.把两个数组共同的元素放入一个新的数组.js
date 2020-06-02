// 17. var arr1 = [1, 2, 3, "aaa", "hello", 999, -1];
//       var arr2 = [3, 78, "aaa", "bbb", 99, 1, -1, "hello"];
// 要求，把两个数组共同的元素放入一个新的数组, 并返回新的数组

var arr1 = [1, 2, 3, "aaa", "hello", 999, -1];
var arr2 = [3, 78, "aaa", "bbb", 99, 1, -1, "hello"];
//声明一个空数组
var arr3 = [];
//用for的循环打印出arr1的数组
for (var i = 0; i < arr1.length; i++) {
    // console.log(arr1[i]);
    //用for的循环打印出arr2的数组
    for (var j = 0; j < arr2.length; j++) {
        // console.log(arr2[j])
        //用if判断两个数组共同的元素
        if (arr1[i] == arr2[j]) {
            //两个数组共同的元素放入一个新的数组
           arr3[ arr3.length]=arr1[i]
        }
    }
}
console.log(arr3)