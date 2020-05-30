// 录入一个四位数,按照逆序打印出各位数.例如原数组为4321应输出1234
//分析:首先我们应该声明一个变量来寸这个数
//通过方法找出三位数的每一位(重要)
//输出的时候反向逆序排
// 声明一个三位数
// var num=321
// //声明另外三位数,十位 百位 各位
// var gw=num%10
// var sw=parseInt(num/10%10)
// var bw=parseInt(num/100)
// console.log(bw);
// //先输出百位 再输出十位 最后输出各位
// console.log(gw+""+sw+""+bw)

// var num=123
// var gw=num%10
// var sw=parseInt(num/10%10)
// var bw=parseInt(num/100)
// // console.log(bw);
// console.log(gw+""+sw+""+bw)

// for (var i = 100; i < 1000; i++) {
//     var gw = i % 10
//     var sw = parseInt(i / 10 % 10)
//     var bw = parseInt(i / 100)
//     if (gw * gw * gw + sw * sw * sw + bw * bw * bw === i) {
//         console.log(i)
//     }
// }

// var count = 0;
// for (var i = 100; i <= 200; i++) {
//     var gw = i % 10
//     var sw = parseInt(i / 10 % 10)
//     var bw = parseInt(i / 100)
//     if(gw===3){
//         count++
//     }
//     if(sw===3){
//         count++
//     }
//     if(bw===3){
//         count++
//     }
// }
// console.log(count)

// var sum=0;
// for(var i=1;i<=100;i++){
//     if(i%3==0&&i%5==0){
//         sum+=i
//     }
// }
// console.log(sum)



// for(var i=1;i<=9;i++){
//     var str='';
//     for(var j=1;j<=i;j++){
//         str+=i+"*"+j+"="+j*i+" "
//     }
//     console.log(str)
// }



// for(var i=1;i=9;i++){
//     var str="";
//     for(var j=1;i<=i;j++){
//         str+=i+"*"+j+"="+j*i+" ";
//     }
//     console.log(str)
// }

// 10.定义一个人的对象，属性有：名字，年龄，性别，方法是：吃饭，把人的名字在控制台打印出来，将人的性别这个属性进行删除？
// var people={
//     name:"Tom",
//     age:18,
//     sex:'man',
//     hobby:'eat',
// };
// console.log(people.name)
// delete people.sex;
// console.log(people)


// 9.join()和split()的区别是什么？
// join函数获取一批字符串，然后用分隔符字符串将它们连接起来，从而返回一个字符串。  
// split()函数获取一个字符串，然后在分隔符处将其断开，从而返回一批字符串。
var arr=[1,2,3]
console.log(arr[2])

// charAt() 获取字符串中的某一个字符
// split() 把一个字符串分隔成字符串组成的数组
// parseInt() 将数字字符串转化为整数
// 字符串合并操作：“ + ”
// indexOf() 查找字符串是否含有某字符


var str = 'asdfj12jlsdkf098';
var str2 = str.split('').reverse().join('');

alert(str2)