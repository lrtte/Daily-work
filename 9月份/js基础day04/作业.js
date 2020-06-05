// 1.在控制台打印输出目前所学的所有数据类型的类型
// var num1=1
// var str='aaa'
// var nu=null
// var arr
// var people={
//     age:1
// }
// var arr1=[1,3,4]
// var bool=true
// console.log(typeof num1)
// console.log(typeof str)
// console.log(typeof nu)
// console.log(typeof arr)
// console.log(typeof people)
// console.log(typeof arr1)
// console.log(typeof bool)



// 2.数据类型的相互转换:
// Number(true)  // 1
// Number(false) // 0
// Number(" ") // 0
// Number( [] ) //0
// Number(['1','2']) //NAN
// Number([1]) // 1
// Number({})   //NAN
// Number({a:1}) //NAN
// Number("3.14") //3.14
// Number(null) // 0
// Number(undefined) //NAN
// Number("12456aaaa") //NAN
// String({}) // [object Object]
// String([]) // 
// String(123) //123
// String(false) //flase
// String(null) //null
// String(undefined) //undefined
// undefined.toString() //undefined 不能用tostring
// null.toString()  //null 不能用tostring
// Boolean(0) // false
// Boolean(0) // false
// Boolean(undefined) //false
// Boolean(null) //false
// Boolean(NaN) //false
// Boolean({}) // true
// Boolean([])  // true


// 3. 将下列结果打印出来下面的题的结果
// var num1 = 123;
// var num2 ="123"
// console.log(num1+num2)  // 123123  有一个字符串所以是拼接字符串
// console.log(num1 + +num2)  // 246   转换成Number（num2）所以用加法
// console.log(num1 + !! num2)  //124  ！！转换成布尔值 123+1
// console.log(num1+Number(num2))  // 246 加法




// 4. 求值
// 2 3
// var a = 1; var b = ++a + ++a;   console.log(b);  //  5
// 1 3
// var a = 1; var b = a++ + ++a;   console.log(b);  // 4
// 1 2
// var a = 1; var b = a++ + a++;   console.log(b);  // 3
// 2 2
// var a = 1; var b = ++a + a++;   console.log(b);  // 4



// 5.输出下面的结果: 
// console.log ( NaN == NaN );//false                   //NAN与任何一个数都不相等，包括它本身
// console.log( NaN === NaN ); //fslse                  //NAN与任何一个数都不相等，包括它本身
// console.log ( undefined == null );//true             //布尔值都是false
// console.log ( undefined === null );//false           //类型不同
// console.log ( 1 + "true" ); // 1true //有一个字符串 起连接作用
// console.log ( 1 + true );  //2 // 1+1 有数字转换成数字
// console.log ( "abc" > "b" ); //false  //从a到b越来越大
// console.log ( "abc" > "aad" ); //true  //从a到b越来越大
// console.log ( [] == [] ); //false  //复杂的数据类型直接false
// console.log ( [] === [] ); //false  //复杂的数据类型直接false
// console.log ( [] == ! [] ); // true  
// console.log ( [] == 0 );//true  
// console.log ( ! [] == 0 );//true 
// console.log ( ! [] == 0    )//true




// 6.输出下面的结果:

// var a = (10 * 3 - 4 / 2 + 1) % 2,  //余数为1 把1赋给a
// 　  b = 3;
// console.log(a++); // 1
// console.log(--b); // 2



// 7.输出下面的结果:
//  console.log(3+2||0&&true)  // 5
// console.log(undefined&&5) // undefined // 写能判断的逻辑的
//  console.log(1&&2&&3) //3
//  console.log(1&&0&&3) //0
//  console.log(2+3>1&&4|| 4&&5%6) // 4
//  console.log(5+10/2&&4>3||7-4)  //true


// // 8. 输出下面的结果:
// var num1 = 20;
// var num2 = 30
// console.log(num1%num2);  // 20 //商0 余数20
// num1+= num2 //num1=num2+num1
// console.log(num1);  // 50
// num1 = num1- num2;  // 将这段代码改写 num1-=num2
// console.log(num1);




// 9.世界上表示气温有两种方法：摄氏度和华氏度。两者的关系是：华氏度=(9/5)*摄氏度+321
//    利用JavaScript编写程序，要求：当输入不同摄氏度，提示出对应的华氏温度

// var tem=32
// var htem=(9/5)*tem+321
// console.log(htem)





// 10.在定义变量名字, 年龄,地址，打印出:我是XXX,今年XX岁了，我来自XXX。
// var name='左君玮'
// var age=18
// var add='山东青岛'
// var arr=`我是${name},今年${age}岁了，我来自${add}`
// var arr1=('我是'+name+',今年'+age+"岁了，我来自"+add)
// console.log(arr)
// console.log(arr1)