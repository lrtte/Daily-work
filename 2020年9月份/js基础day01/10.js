// 10.定义一个数组，里面放都是数字的类型
// 要求：
// 1.把下标是3对应的元素获取到
// 2.把数组第一个元素修改成数字666
// 3.求出下标是2和4对应的元素的和赋值给下表是1
var arr = [1, 2, 3, 4, 4, 5, 9086, 46, 4, 3]

console.log(arr[3])
arr[0] = 666
console.log(arr)
arr[1] = arr[2] + arr[4]
console.log(arr)