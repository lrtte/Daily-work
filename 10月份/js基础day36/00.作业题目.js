// 1.将字符串 var str="abcdefgh"进行反转，结果是 "hgfedcba"
// 2.截取字符串 “我爱中华人民共和国”  中 '中华' 输出到控制台中
// 3.获取url中的用户名和密码 https://www.test.com/login?name=zs&pwd=123,并且控制台输出对象的格式{name:'zs',pwd:123}
// 4. var str= 'qweqweoeqweroqweqweodfsfdo'
//   1)查找字符串中所有字母 'o'出现的位置
//   2)把字符串中的所有字母'o'替换成 '-';
// 5.删除一个字符串中出现最多的字符, var str="assdfscfwssseee"
// 6. var str="hello world 378nihao",分别统计出字符串中的英文字母、数字、空格的个数

// 7.将字符串变成驼峰法var str = "get-element-by-id"， 结果是 "getElementById"
// 8. 去掉字符串两端和中间的空格，var str = '   ab  cd    ';
// 9.已知字符串："this is a test of java"
// (1) 取出子字符串"test"
// (2) 将'java'替换为'JAVASE'
// 10.. 字符串查找,不使用indexOf,正则，substr,substring,contain,slice等现成的方法,实现如下效果：
//     //  a ="34",b="1234567"，返回2
//     //  a = '35', b= "1234567" 返回-1
//     //  a = "355", b = "12354355"  返回5
// 求任意数组的最大值
function getArrMax(arr){
var max=arr[0];
for(var i=1;i<=arr.length;i++){
    if(arr[i]>max){
        max=arr[i]
    }
}
return max
}
// getArrMax([1,2,3]);
var ar= getArrMax([1,2,390]);
console.log(ar)