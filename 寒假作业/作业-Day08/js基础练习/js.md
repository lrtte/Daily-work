## js简答题
1. 什么是单向分支、双向分支和多向分支？
   单向分支if (){
           }

   双向分支  if () {
       } else {
   }

   多项分支if (){
           if (){
           }
       } else {
    }

   

2. 三元运算符简化的是什么？简化后是什么？if(a>0)
  三元运算符简化的是双向分支，简化后是 条件？(true):(false);


3. switch中的关键字有哪些？break 关键词

case; break; default;

   ## default 关键词

   default 关键词规定不存在 case 匹配时所运行的代码：

   
   4. switch中的 `default` 的作用是什么？
    没有满足的case，则执行default内的代码


## js编程题
1. 让用户输入一个数字，实现判断该数是奇数还是偶数并告诉用户

    ```js
    <script type="text/javascript">
    var num=prompt('请输入一个数字')
    if(num%2!=0){
    alert('${num}是奇数')
   }
   else{
    alert('${num}是偶数')
}
    </script>
    ```
2. 让用户输入任意内容，随后弹出对应内容

    ```js
    var i = 10;
    if(i>10){
    console.log("大于10")
    }
    else{
    console.log:("小于10")
    }
    ```
3. 让用户输入一个数字，判断该数字是否大于10，并告知用户结果，如果输入的非数字告知用户输入错误


    var num = 10;
    if(num>10){
    console.log("大于10")
    }
    else{
    console.log:("小于10")
    }


4. 让用户输入年龄，并判断该用户年龄是否成年，如果成年并告知：恭喜你已成年，如果还未成年需告知用户还有多少年就成年了，如果用户输入的不是年龄数字提示输入错误
var age = prompt('请输入一个数字');
if (age >= 18) {
alert('你已成年');
} else if (age < 18 && age >= 0) {
alert(`你还有${18-age}年就成年了`);
} else {
alert('输入有误');
}


