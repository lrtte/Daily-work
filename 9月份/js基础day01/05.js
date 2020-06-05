// 5.输出如下代码的执行结果:
//  var myVarVariable = 666
//  const myConstVariable = 2;
//  console.log(myVarVariable); //?
//  console.log(myConstVariable); // ?
//  myVarVariable = 888;
//  myConstVariable = 5;  
//  console.log(myVarVariable); //?
//  console.log(myConstVariable); // ？
var myVarVariable = 666
const myConstVariable = 2;
console.log(myVarVariable); //666
console.log(myConstVariable); // 2
myVarVariable = 888;
myConstVariable = 5;  //常数不可改值，所以报错。
console.log(myVarVariable); //报错
console.log(myConstVariable); // 报错