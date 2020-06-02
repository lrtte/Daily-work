// json一共有两种环境 写在js中 写在json文件中
// 1.js中 json是字符串
// 1.1 对象形式的json
let obj = {
    name: '张三',
    age: 15
}
// 虽然json是对象格式的 但是键必须用双引号 如果值是字符串 也必须用双引号
let objJson = '{"name":"张三","age":15}'

let arr = [1, 2, 3]
// 还是符合数组格式的字符串
let arrJson = '[1,2,3]'
console.log(arrJson)
