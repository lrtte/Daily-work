//2. 通过2种方式给对象添加一个属性 gender,值是"男"
var people = {
   name: '张三',
   id: 2,
   age: 18,
   height: 180,
   weight: '75kg',
   number: 88888888888
}
people.gender = '男'
console.log(people)




var people1 = {
   name: '张三',
   id: 2,
   age: 18,
   height: 180,
   weight: '75kg',
   number: 88888888888
}
var attrName = 'gender'
people1.attrName = '男'
console.log(people1)
