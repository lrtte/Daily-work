// 13.将下面对象的属性取出来存储到一个数组中
var person = { name: "one", age: 12, sex: "男" };
var arr = []
for (var key in person) {
    arr.push(person[key])

}
console.log(arr)