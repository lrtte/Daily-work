js简答题

1. 常量的命名规则和变量是否一样？常量命名中的字母一般采用什么形式的？

// 2. 常量和变量的区别是什么
// 常量的值是不变的   变量的值是改变的
// 3. 说出你目前学过的数据类型有哪些（中英文）
// 数据类型有:1:简单数据类型(Number),(String),(Boolean),(null),(undefined)
//            2:复杂数据类型(Object),(Array)

4. 反斜杠 `\` 和反引号 ` 的作用分别是什么，有什么共同点？

js编程题
// 1. 请将变量a与变量b的变量值互换位置


   var a = 10, b = 20; // 互换使得b=10，a=20
       

// 2. 根据要求完成下面填空


    1) var yinhao = ____; 
       console.log(yinhao); // 输出结果为【'""】
    2) var yinhao = ____;
      console.log(yinhao); // 输出结果为【'""】
    3) var num = 99;
      console.log(`就差___分我就满分了`)； // 利用num变量完完成填空
// 3. 分别使用反斜杠和反引号使下面结果成功输出且三行显示


   //使用反斜杠：
   console.log(古体诗是诗歌体裁。
   从诗句的字数看，有所谓四言诗、五言诗和七言诗等。
   四言是四个字一句，五言是五个字一句，七言是七个字一句。)
   //使用反引号：
   console.log(古体诗是诗歌体裁。
   从诗句的字数看，有所谓四言诗、五言诗和七言诗等。
   四言是四个字一句，五言是五个字一句，七言是七个字一句。)

// 4. 请利用代码证明你所说的遇到undefined的情况
var num=
console.log(num)//声明一个变量没有赋值时,会返回undefined
var arr=[1]
console.log(arr[1])//当下标超过数组或字符串的长度时会但会undefined
//当return没有返回值时,会返回undefined
var obj={
    name:"Lisa",
    age:18,
}
console.log(obj.height)//当对象调用不存在的属性时,会返回undefined
