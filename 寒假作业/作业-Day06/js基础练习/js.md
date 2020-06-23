## js解答题

1. 算数运算符都有哪些？
+ - * \%
2. NaN和任何值比较的结果都是什么？包括和自身比较吗？
NaN不与任何值相等，包括它本身

3. == 和 === 的区别在哪？
双等是数值相等全等是数值和类型都相等

4. 逻辑运算符有哪些, 逻辑运算的规则有哪些
答： js的逻辑运算符又 && （与） 、 || （或）、 ！（非）

&& 的规则是：只要符号俩边有一个为假就是假

||的规则是：只要符号俩边有一个为真就是真

！的规则是： 如果变量为真，那么！ 之后的结果就是假，如果变量为假，！之后的结果就是真

## js编程题
typeof 无法显示出的数据类型名称有什么？为什么？

`typeof` 无法显示出的数据类型名称有数组
typeof只能判断简单数据类型，不能判断复杂数据类型
判断下面结果的布尔值

333 == '333' // true 666 == [666] // true '999' == [999] // true NaN == NaN // false NaN === NaN // false undefined == null // true undefined === null // false [] == [] // false [] === [] // false [] == 0 // true ![] == 0 // true [] == ![] // true


3. 打印输出下面的结果

```js
 1) true && !true  //false
 2) false || !false //true
 3) false || !true && !false  //false
 4) true && !false || false  //true
 5) undefined && true  //undefined
 6) 2+2 > 5 || 3-3 <=0 && !undefined //true
打印输出下面的结果

 var a = 10;
 var b = a++;
 console.log(b>=a);  //true
 var c = b + 'a';
 console.log(c); //11a
 console.log(c == ('a' + b))  //false  11aa