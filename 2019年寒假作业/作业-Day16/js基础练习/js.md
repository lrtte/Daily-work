## js简答题

1. arguments对象和数组的相同点和不同点有哪些？
相同点: 数组的length
不同点: arguments没有数组的方法

2. rest参数作为函数的形参只能是最后一个参数，谈谈你的理解
rest会把剩余没有传入形参的所有实参，封装进rest数组中

3. 什么是函数表达式？

函数表达式: 声明一个变量，该变量的值是一个函数
4. 谈谈你对自调用函数的理解，格式是什么？
自己调用自己只执行一次
没有 return
一般用于初始化

## js编程题
1. 写一个函数，求出`3`在数组 var arr = {3,4,3,5,7,9};中出现的次数
 ```js
function fn(arr) {
   var num = 0;
   for (var i = 0; i < arr.length; i++) {
       if (arr[i] == 3) {
           num++;
       }
   }
   return num
};
var arr = [3, 4, 3, 5, 7, 9];
var result = fn(arr);
console.log(result);
 ```  


2. 写一个函数，判断一个数是否是素数，并返回结果true 或 false(又叫质数，只能被1和自身整数的数)
```js

function fn(num) {
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
};
var result = fn(11);
console.log(result);
```


3. 写一个函数，求任意一个数的阶乘
```js
function fn(num) {
    var x = 1;
    for (var i = 1; i <= num; i++) {
        x *= i;
    }
    return x;
};
var result = fn(5);
console.log(result);

```


4. 写一个函数，该函数用于计算一个正数的因子和（比如6的因子和是1+2+3+6=12）
```js

function fn(num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        if (num % i == 0) {
            sum += i;
        }
    }
    return sum;
};
var result = fn(6);
console.log(result);
```



