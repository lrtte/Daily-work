// 求出数组var arr = [1, 2, 4, 5, 10, 100, 2, -22]中最小元素的索引，
//声明数组  声明一个最小元素 默认为arr[0] 
// 判断如果arr[i]小于min 就将值赋到 min上 
// 最后用indexOf输出最小元素的索引
//声明数组
var arr = [1, 2, 4, 5, 10, 100, 2, -22]
// 声明一个最小元素 默认为arr[0] 
var min=arr[0]
//循环遍历
for(var i=0;i<arr.length;i++){
    // 判断如果arr[i]小于min 就将值赋到 min上
    if(arr[i]<min){
        min=arr[i]
    }

}
// 最后用indexOf输出最小元素的索引
console.log(arr.indexOf(min))