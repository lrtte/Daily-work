var arr = [{
    name: '张三',
    age: 20,
    gender: '男',
    studentld: 32
},
{
    name: '李四',
    age: 20,
    gender: '男',
    studentld: 32
}]
console.log(arr[1].name)
arr[0].gender = 18
console.log(arr[0].gender)

console.log(arr[0].age + arr[1].age)

// 12.定义一个数组，数组里面放2个对象，对象的属性有name,age,gender,studentId,属性值自己写
// 要求：
// 1.输出第二个对象里面的属性name的值
// 2.将第一个对象里面的属性gender的值修改成数字18
// 3.算出2个对象里面属性是age的和