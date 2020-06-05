// 1.利用JavaScript打印出所有的"水仙花数"，
// 所谓"水仙花数"是指一个三位数，其各位 数字立方和等于该数本身。
// for(var i=100;i<1000;i++) {
//     var ge =i%10;
//     var shi=(i-ge)/10%10
//     var bai=(i-ge-shi*10)/100
//     if(ge*ge*ge+shi*shi*shi+bai*bai*bai==i){
//         console.log(i)
//     }
// }

// 2.求任意三个数字的最大值和最小值
// var num1=6
// var num2=5
// var num3=8
// if  (num1>num2&&num1>num3 ){
//     console.log('mum1是最大值')
// }else if (num2>num1&&num2>num3){
//     console.log('mum2是最大值')
// }else if (num3>num1&&num3>num2){
//     console.log('mum3是最大值')
// }

// 3. 给一个数字赋值给一个变量num1，求出是奇数还是偶数
// var num1=18
// if(num1%=0){
//     console.log('num1是奇数')
// }else{
//     console.log('num1是偶数')
// }

// 4. 利用JavaScript完成如下功能：
// 给出一个数判断是属于小数还是整数，
// 如：var a= 3.14输出：3.14是小数 
// var num=4.78
// var num1=parseInt(num)
// if(num>num1){
//     console.log('小数')
// }else{
//     console.log('整数')
// }

// 5. 提示用户输入年龄，若用户的年龄大于等于18岁，
// 则弹出“恭喜您，您已经成年”，
// 否则以弹出框的方式提示用户年龄太小。
// var arr=17
// if(arr>=18){
//     alert('恭喜您，您已经成年')
// }else {
//     alert('年龄太小')
// }

// 6. 利用JavaScript完成如下功能：
// 判断如果a>60，则b=1；如果a>70，则b=2；
// 如果a>80，则b=3；如果a>90，则b=4 ,在页面弹出对应b的值
// var a=65
// if (a>60&&a<70){
//     b=1
// }else if(a>70&&a<80){
//     b=2
// }else if(a>80&&a<90){
//     b=3
// }else if(a>90){
//     b=4
// }
// console.log(b)

// 7. 利用JavaScript编写程序：
// 通过用户输入的年龄判断是哪个年龄段的人
// （儿童：年龄＜14；青少年：14<=年龄＜24；
// 青年：24<年龄＜40; 中年：40＜=年龄＜60; 老年：年龄>=60），
//     并在页面上输出判断结果。
// var age=20
// if(age<14){
//     console.log('儿童') 
// }else if(14<=age<24){
//     console.log('青少年')
// }else if(24<=age<40){
//     console.log('青年')
// }else if(40<=age<60){
//     console.log('中年')
// }else if(age>=60){
//     console.log( '老年')
// }

// 8. 接收班长口袋里的钱数？
// 若大于等于2000，请大家吃西餐。
// 若小于2000，大于等于1500，请大家吃快餐。
//     若小于1500，大于等于1000，请大家喝饮料。
// 若小于1000，大于等于500，请大家吃棒棒糖。
// 否则提醒班长下次把钱带够
// var mon=3000
// if(mon>2000){
//     console.log('请大家吃西餐')
// }else if(1500<=mon<2000){
//     console.log('请大家喝饮料')
// }else if (500<mon<1500){
//     console.log('请大家吃棒棒糖')
// }else {
//     console.log('下次把钱带够')
// }

// 9. 分数转换,给一个分数，判定等级。
// 大于等于90  A，大于等于80小于90  B，
// 大于等于70小于80  C ，大于等于60小于70 D，小于60 E
// var score=80
// if(score>90){
//     console.log('A')
// }else if(score>=80&&score<90){
//     console.log('B')
// }else if(score>=70&&score<80){
//     console.log('C')
// }else if(score>=60&&score<70){
//     console.log('E')
// }

// 10. 获取当前时间，判断今年是否为闰年。两种方法判断 
//     1）判断今年是否为闰年；  
//         能被400整除 或 被4整除但不能被100整除
// var nian=2000
// if (nian%400==0 ||nian%4==0&& nian%100!=0){
//     console.log('闰年')
// }else{
//     console.log('不是闰年')
// }

// 11. 本金10000元存入银行，年利率是千分之三，
// 每过1年，将本金和利息相加作为新的本金。
// 计算5年后，获得的本金是多少？  
// var mon=10000  
// for (var i=1;i<=5;i++){
//     mon*=1.003
// }
// console.log(mon)

// 12. 根据输入的数字，判断如果是1-5打印工作日，
// 如果是6，7打印休息日。
// var num=4
// if (num>=1&&num<=5){
//      console.log('工作日')
// }else if(num>=6&&num<=7){
//     console.log('休息日')
// }

// 13. 录入姓名和性别根据输入的姓名，性别，
// 打印欢迎XX先生/女士。（性别用0和1区别。0表示女士，1表示男士）
// var name='张'
// var gender=1
// if (gender=1){
//     console.log('欢迎'+name+'先生')
// }else{
//     console.log('欢迎'+name+'女士')
// }

// 14. 输出该数字打头的一个成语，视为你今天的状态
//     1：一帆风顺
//     2：二话不说
//     3：三心二意
//     4：四面楚歌
//     5：五湖四海
//     6：六亲不认
//     7：七上八下

// var zhuangtai=6
// if(zhuangtai==1){
//     console.log('一帆风顺')
// } else if(zhuangtai==2){
//     console.log('二话不说')
// }else if(zhuangtai==3){
//     console.log('三心二意')
// }else if(zhuangtai==4){
//     console.log('四面楚歌')
// }else if(zhuangtai==5){
//     console.log('五湖四海')
// }else if(zhuangtai==6){
//     console.log('六亲不认')
// }else if(zhuangtai==7){
//     console.log('七上八下')
// }

// 15. 键盘录入学生考试成绩，使用if语句判断成绩等级，并打印出来。
// var score=75
// if(score<50){
//     console.log('D')
// }else if(score>=50&&score<70){
//     console.log('c')
// }else if(score>=70&&score<90){
//     console.log('B')
// }else if(score>=90){
//     console.log('A')
// }

// 16. 录入一个整数,判断它能否被3,5,7整除,并输出以下信息
//     (1)能同时被3,5,7整除
//     (2)能被其中两个数整除(要指出那两个数)
//     (3)只能被其中一个数整除(指出那一个)
//     (4)不能被3,5,7任一个整除

// var num=37
//判断它能否被3,5,7整除
// if(num%3==0){
//     console.log('能被3整除')
// }else{
//     console.log('不能被3整除')
// }
// if(num%5==0){
//     console.log('能被5整除')
// }else{
//     console.log('不能被5整除')
// }
// if(num%7==0){
//     console.log('能被7整除')
// }else{
//     console.log('不能被7整除')
// }

//判断能否同时被3,5,7整除
// if(num%3==0&&num%5==0&&num%7==0){
//         console.log('能同时被3,5,7整除')
// }else{
//     console.log('不能同时被3,5,7整除')
// }

//能被其中两个数整除(要指出那两个数)
// if(num%3==0&&num%5==0){
//     console.log('能被3,5整除')
// }else if(num%5==0&&num%7==0){
//     console.log('能被5,7整除')
// }else if(num%3==0&&num%7==0){
//     console.log('能被3,7整除')
// }

//只能被其中一个数整除(指出那一个)
// if(num%3==0&&num%5!==0&&num%7!==0){
//     console.log('只能被3整除')
// }else if(num%3!==0&&num%5==0&&num%7!==0){     
//     console.log('只能被5整除')
// }else if(num%3!==0&&num%5!==0&&num%7==0){     
//     console.log('只能被7整除')
// }else{
//     console.log('否')
// }

//不能被3,5,7任一个整除
// if(num%3!==0&&num%5!==0&&num%7!==0){
//     console.log('不能被3,5,7任一个整除')
// }else{
//     console.log('否')
// }

// 17. 录入两个整数a和b,若a+b大于100,则输出a+b大于100的部分,
// 否则输出两数之和.
// var a=70
// var b=90
// if(a+b>100){
//     console.log((a+b)-100)
// }else{
//     console.log(a+b)
// }

// 18. 输入三角形的三边，
// 根据输入的三角形的三边判断是否能组成三角形，
// 如果可以进一步 判断三角形的类型
    // 等边三角形(三边相等) 等腰三角形(两边相等)  
// 直角三角形(a平方+b平方=c平方)  其他三角形（不满足上面的）
// var a=10
// var b=10
// var c=10
// if(a*a+b*b>c*c){
//     console.log('是三角形')
// }else{
//     console.log('不是三角形') 
// }
// if(a=b=c){
//     console.log('是等边三角形')
// }
// else if(a==b||a==c||c==b){
//     console.log('是等腰三角形')
// }
// else if(a*a+b*b == c*c){
//     console.log('是平行四边形')
// }else{
//     console.log('其他三角形')
// }

// 19. 录入一个三位数，按逆序打印出各位数字。
// 例如原数字为321，应输出123。
// var num=123
// var ge=num%10
// var shi=(num-ge)/10%10
// var bai=(num-ge-shi*10)/100
// console.log('输出'+ge+shi+bai)                              

//20. 测量一个人的体质指数，
// 体质指数（BMI）=体重（kg）÷身高^2（m），
//     成人的BMI数值：
//     过轻：低于18.5
//     正常：[18.5,23.9]
//     过重：[24,27]
//     肥胖：[28,32]
//     非常肥胖, 高于32
 
// var   weight=80
// var   height=180
// var n =height*height
// var BTM=weight/n
// // var BTM='weight÷(height*height )'   
// if(BTM<18.5){
//     console.log('过轻')
// }else if(18.5<=BTM&&BTM<=23.9){
//     console.log('正常')
// }else if(BTM>=24&&BTM<=27){
//     console.log('过重')
// }else if(BTM>=28&&BTM<=32){
//     console.log('肥胖')
// }else if(BTM>=32){
//     console.log('非常肥胖')
// }

// 21.	录入月份，输出对应的季节
//     (1)键盘录入一个整数(代表月份,范围1-12)
//     (2)输出该月份对应的季节
//    	   3,4,5春季
//    	   6,7,8夏季
//    	   9,10,11秋季
//    	   12,1,2冬季
//     (3)演示格式如下:
//    	   请输入一个月份:3
//    	   控制台输出:3月份是春季"
// var num=12
// if(num==3||num==4||num==5){
//     console.log(num+'月份'+'是春季')
// }else if(num==6||num==7||num==8){
//     console.log(num+'月份'+'是夏季')
// }else if(num==9||num==10||num==11){
//     console.log(num+'月份'+'是秋季')
// }else if(num==12||num==1||num==2){
//     console.log(num+'月份'+'是冬季')
// }

// 22. 录入一个5位数,判断 该五位数是否为回文数。（判断第一位和第五位是否一样，第二位和第四位是否一样）
// var num=77877
// var ge=num%10
// var shi=(num-ge)/10%10
// var bai=(num-ge-shi*10)/100%10
// var qian=(num-ge-shi*10-bai*100)/1000%10                      
// var wan=(num-ge-shi*10-bai*100-qian*1000)/10000
// if(ge==wan&&shi==qian){
//     console.log('是回文数')
// }else{
//     console.log('不是回文数')
// }

// 23. 利用JavaScript完成如下功能：如果今天是星期六，那么1000天后是星期几
// var day=6
// var date =1000
// var x=date%7
// console.log('如果今天是星期六，那么1000天后是星期'+(x+day-7))

// 24.一个加油站为了鼓励车主多加油，所以加的多有优惠。
//   92号汽油，每升6元；如果大于20升，那么超出部分每升5.9；
//   95号汽油，每升7元；如果大于30升，那么超出部分每升6.95
//   编写JS程序，用户输入自己的汽油编号，然后输入自己加多少升，弹出价格。
// var day=92
// var num=30
// if(day==92){
//     console.log(num*6+(num-20)*5.9)
// }
// if(day==95){
//     console.log(num*7+(num-30)*6.95)
// }

// 25. 收先接收用户输入的用户名，判断该用户名是否是admin,如果不是直接程序终止，如果是那么再次提示让用户输入密码,如果密码是88888,那么提示登录成功，否则提示登录失败
// var name='admin'
// var sec=88888
// if(name=='admin'){
//     console.log('用户输入密码')
//     if(sec==88888){
//          console.log('登录成功')
//     }else{
//          console.log('登录失败')
//     }
// }else{
//      console.log('程序终止')
// }

// 26. 100以内7的倍数的总和
// var a=0
//  for(i=1;i<100;i++){
//      if(i%7==0){
//        a+=i    
//      }
//  }
// console.log(a)

// 27.求1!+2!+3!+...+10!的和


// 28.鸡兔同笼：鸡和兔子一共35只，笼子里一共有94只脚，用程序计算出鸡和兔子分别多少只
// var tou=35
// var foot=94
// for(var i=1;i<tou;i++){
//     if(i*2+(tou-i)*4==foot){
//         console.log('鸡有'+i+'只')
//         console.log('兔有'+(tou-i)+'只')
//     }
// }  

// 29.一个数如果恰好等于它的因子之和，这个数就称为 "完数 "。 例如6=1＋2＋3.编程 找出1000以内的所有完数

// 30.输出2-200之间的所有素数（素数就是只能被1和其本身整除的数）

// 31.解释：例如101中没有3；103中有一个3；133中有两个3。你要做的是统计出101到200之间的整数一共有多少个3。

// 32.某同学参加计算机大赛：
// 		如果获得第1名，将参加清华大学组织的1个月夏令营；
// 		如果或得第2名，将奖励联想笔记本电脑一部；
// 		如果获得第3名，将奖励移动硬盘一个；
// 否则没有任何奖励；
// var rank=2
// if(rank==1){
//     console.log('参加清华大学组织的1个月夏令营')
// }else if(rank==2){
//     console.log('奖励联想笔记本一部')
// }else if(rank==3){
//     console.log('奖励移动硬盘一个')
// }else{
//     console.log('没有任何奖励')
// } 

// 33.利用JavaScript完成如下功能：要求在1~1000数字之中，找出所有能被5整除，或者被6整除的数字，并在控制台输出这些数字
// for(var i=1;i<=1000;i++){
//    if (i%3==0||i%6==0) {
//        console.log(i)
//    }           
// }

// 34.求任意一个数字的约数有哪些
// var num=20
// // num%i==0
// for(var i=1;i<20;i++){
//     if(num%i==0){
//         console.log(i)
//     }
// }

// 35.1-100之间所有数的总和 与 平均值

// 36.求1~100以内(包含1和100)能同时被3，5整除的数的和，并将求出的和打印到控制台上.
// for(var i=1;i<=100;i++){
//         if(i%3==0&&i%5===0){
//               console.log(i)
//         }
// }

// 37.要求：圆的面积小于50，请打印出所有符合面积要求的整数半径。

// 38.遍历1到100之间（包含1和100）的所有数字，统计能被5整除的偶数的个数，最后将个数打印在控制台
// var num=0
// for(var i=1;i<=100;i++){
//      if(i%2==0){
//         if(i%5==0){
//             num++
//         }
//      }   
//  } console.log(num)

