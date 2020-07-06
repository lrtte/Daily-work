var people = {
    name: '张三',
    id: 2,
    age: 18,
    height: 180,
    weight: '75kg',
    number: 88888888888            //删除属性体重
}
delete people.weight
console.log(people)