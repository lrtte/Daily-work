// 10.. 字符串查找,不使用indexOf,正则，
// substr,substring,contain,slice等现成的方法,实现如下效果：
//     //  a ="34",b="1234567"，返回2
//     //  a = '35', b= "1234567" 返回-1
//     //  a = "355", b = "12354355"  返回5

function index(a, b) {
  var arrA = a.split("");
  var arrB = b.split("");
  var returnIndex = -1;
  console.log(arrA, arrB);
  for (var i = 0; i < arrB.length; i++) {
    if (arrA[0] == arrB[i]) {
      if (arrA[1] == arrB[i + 1]) {
        returnIndex = i;
      }
    }
  }
  return returnIndex;
}
var a = "34",
  b = "1234567";
console.log(index(a, b));
var a = "35",
  b = "1234567";
console.log(index(a, b));
var a = "355",
  b = "12354355";
console.log(index(a, b));