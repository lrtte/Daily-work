// 6.自定义一个对象：对象拥有年龄，学号，姓名，身高，体重，手机号等属性(这个代码敲三遍，创建3个不同的对象，非常重要)
// 要求：
//   1. 通过2种方式定义对象

var people = {
    name: '张三',
    id: 2,
    age: 18,
    height: 180,
    weight: '75kg',
    number: 88888888888
}
var people1 = {
    name: '李四',
    id: 3,
    age: 16,
    height: 183,
    weight: '65kg',
    number: 66666666666
}
var people2 = {
    name: '小五',
    id: 4,
    age: 19,
    height: 182,
    weight: '75kg',
    number: 222222222222
}
console.log(people, people1, people2)







var people = new Object({
    name: '张三',
    id: 2,
    age: 18,
    height: 180,
    weight: '75kg',
    number: 88888888888
})
var people1 = new Object({
    name: '李四',
    id: 3,
    age: 16,
    height: 183,
    weight: '65kg',
    number: 66666666666
})
var people2 = new Object({
    name: '小五',
    id: 4,
    age: 19,
    height: 182,
    weight: '75kg',
    number: 222222222222
})
console.log(people, people1, people2)