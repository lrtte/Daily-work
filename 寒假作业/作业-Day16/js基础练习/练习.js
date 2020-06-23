

// ## js编程题
// 1. 写一个函数，求出`3`在数组 var arr = {3,4,3,5,7,9};中出现的次数

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


// 2. 写一个函数，判断一个数是否是素数，并返回结果true 或 false(又叫质数，只能被1和自身整数的数)


// function fn(num) {
//     for (var i = 2; i < num; i++) {
//         if (num % i == 0) {
//             return false;
//         }
//     }
//     return true;
// };
// var result = fn(11);
// console.log(result);



// 3. 写一个函数，求任意一个数的阶乘

function fn(num) {
    var x = 1;
    for (var i = 1; i <= num; i++) {
        x *= i;
    }
    return x;
};
var result = fn(5);
console.log(result);

function fn(num){
    var x =1;
    for(var i=1;i<=num;i++){
        x*=1;
    }
    return x;
};
var result =fn(5);
console.log(result)


// 4. 写一个函数，该函数用于计算一个正数的因子和（比如6的因子和是1+2+3+6=12）


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
