## js解答题

1. 字符串的特性是什么？
1.索引
2.切片
3.操作符
4.字符串连接

2. 使用字符串方法返回指定下标(索引) 对应的字符和不使用字符串方法返回字符的方式分别是什么？

```js
var str = 'abcdefg';
console.log(str.charAt(6));
```
3. 查看某个字符串是否存在于字符串中的某个方法是？其返回值为-1或者0分别代表的是什么？
string.indexOf() 返回-1代表这个字符不存在于字符串中，返回0代表这个字符在字符串中的索引为0
4. 截取字符的三种方法是什么，分别有什么不同？
字符串.slice(开始索引,结束索引) // 从开始下标截取到结束下标的前一个 2）字符串.substr(开始索引,截取的个数) // 从开始下标截取固定个数。若无个数则从开始截取到完 3）字符串.substring(开始索引,结束索引) // 从开始下标截取到结束下标的前一个。然而不同之处是：substring的开始和结束可以互换位置


## js编程题

1. 将字符串 var str="abcdefgh"进行反转，结果是 "hgfedcba"
```js
var str = 'abcdefgh';
var str1 = '';
for (var i = str.length-1; i >= 0; i--) {
  str1 +=  str[i];
}
console.log(str1);
```

2. 截取字符串 “我爱中华人民共和国”  中 '中华' 输出到控制台中
```js
var str = '我爱中华人民共和国';
var index1 = str.indexOf('中');
var index2 = str.indexOf('华');
console.log(str.substring(index1,index2+1));
```

3. 获取url中的用户名和密码 https://www.test.com/login?name=zs&pwd=123,并且控制台输出对象的格式{name:'zs',pwd:123}

```js
var str ='https://www.test.com/login?name=zs&pwd=123';
var str1 = str.split('?')[1]
var arr = str1.split('&')
console.log(arr);
var obj = {};
for (var i = 0; i < arr.length; i++) {
  var arr1 = arr[i].split('=');
  obj[arr1[0]] = arr1[1];
}
console.log(obj);
```
4. var str= 'qweqweoeqweroqweqweodfsfdo'
  1)查找字符串中所有字母 'o'出现的位置
  2)把字符串中的所有字母'o'替换成 '-';

  ```js
  var str= 'qweqweoeqweroqweqweodfsfdo';
  for (var i = 0; i < str.length; i++) {
  if(str[i] == 'o') {
  console.log(i);
   }
  }
  var str1 = str.replace(/o/g,'-');
  console.log(str1);
  ```