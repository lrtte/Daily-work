let objJson='{"name":"张三","age":15}'
// 上面数据的本质是字符串 我们能操作的变量 数组 对象
// 如果要把json字符串变成js对象 用的方法 JSON.parse(字符串)
console.log(typeof objJson) //string
console.log(JSON.parse(objJson))


let arrJson='[1,2,3]'
console.log(arrJson)
let arr=JSON.parse(arrJson)
console.log(Array.isArray(arr))//判断是不是数组 true