// 1、例如101中没有4；104中有一个4；144中有两个4。你要做的是统计出101到200之间的整数一共有多少个4。
// 循环遍历 声明个十百位 声明一个计数变量 sum 分别判断是否等于4 是 sum++
// var sum = 0
// for (var i = 101; i <= 200; i++) {
//     var ge = i % 10;
//     var shi = (i - ge) / 10 % shi
//     var bai = (i - ge - shi * 10) / 100
//     if (ge == 4) {
//         sum++
//     }
//     if (shi == 4) {
//         sum++
//     }
//     if (bai == 4) {
//         sum++
//     }

// }
// console.log(sum)
// // 2、封装函数，实现数组去重，var arr = [9,10,6,6,1,9,3,5,6,4]
// // 声明函数 声明数组 定义一个新数组 循环遍历 判断数组下标是否等于-1 添加进新数组
// function a() {
//     var arr = [9, 10, 6, 6, 1, 9, 3, 5, 6, 4]
//     var newarr = []
//     for (var i = 0; i < arr.length; i++) {
//         if (newarr.indexOf(arr[i]) == -1) {
//             newarr.push(arr[i])
//         }
//     }
//     console.log(newarr)
// }
// a()


// 3、定义一个四位数，按逆序打印出各位数字。例如原数字为5678，应输出8765。
// // 定义一个四位数 取个十百千位 输出
// var num = 5678
// var ge = num % 10
// var shi = (num - ge) / 10 % 10
// var bai = (num - ge - shi * 10) / 100 % 10
// var qian = (num - ge - shi * 10 - bai * 100) / 1000
// console.log(ge * 1000 + shi * 100 +bai * 10 + qian)

// 4、封装一个函数，实现数组var arr = [23,45,78,98,13,89,5]，从大到小排序。
// 声明函数 循环遍历 确定外层循环的范围为数组的长度-1 确定内层循环的范围为 数组的长度-1-i
// function a() {
//     var arr = [23, 45, 78, 98, 13, 89, 5]
//     for (var i = 0; i < arr.length - 1; i++) {
//         for (var j = 0; j < arr.length - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 var temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//     }
//     console.log(arr)
// }
// a()

// 5、求300到400所有不能被3整除的整数的第一个大于2000的和。
// 循环遍历 声明一个变量和 判断能否被3整除 不能 相加 输出大于两千的数 跳出循环
// var sum = 0;
// for (var i = 300; i <= 400; i++) {
//     if (i % 3 != 0) {
//         sum += i
//         if (sum > 2000) {
//             console.log(sum)
//             break;
//         }
//     }
// }
//    let arrA = [1, 2, 3, 3];
//     let arrB = [2, 4, 5, 6];
//     // 又定义了一个数组
//     let arrC = [];
//     //交集
//     for (var i = 0; i < arrA.length; i++) {
//       for (var j = 0; j < arrB.length; j++) {
//         // 判断数组arrA的元素和arrB是否相等
//         if (arrA[i] == arrB[j]) {
//           // 如果相等放入到arrC中
//           arrC.push(arrB[j]);
//         }
//       }
//     }
//     console.log(arrC); // [2]
//     //并集
//     let arrD = Array.from(new Set(arrA.concat(arrB)));
//     console.log(arrD); // [1, 2, 3, 4, 5, 6]


// let arrA = [1, 2, 3, 3];
// let arrB = [2, 4, 5, 6];
// // 又定义了一个数组
// let arrC = [];
// for(var i=0;i<arrA.length;i++){
//     for(var j=0;j<arrB.length;j++){
//         if(arrA[i]==arrB[j]){
//             arrC.push(arrB[j])
//         }
//     }
// }
// console.log(arrC)
// let arrD=Array.from(new Set(arrA.concat(arrB)))
// console.log(arrD)

//     var str = "#";
//     var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
//     for (var i = 0; i < 6; i++) {
//       var num = parseInt(Math.random() * 16);
//       str += arr[num];
//     }
//     console.log(str)

//     var str='#'
//     var arr= ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
//     for(var i=0;i<6;i++){
//         var num=parseInt(Math.random()*16);
//         str+=arr[num];
//     }
//     console.log(str)
//     var str='#'
//     var arr=['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
//     for(var i=0;i<6;i++){
//         var num=parseInt(Math.random()*16);
//         str+=arr[num];
//     }
//     console.log(str)
//     var str='#'
//     var arr=['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
//     for(var i=0;i<6;i++){
//         var num=parseInt(Math.random()*16)
//         str+=arr[num]
//     }
//     console.log(str)
//     var str='#'
//     var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
//     for(var i=0;i<6;i++){
//         var num=parseInt(Math.random()*16)
//         // 字符串拼接
//         str+=arr[num]
//     }
//   console.log(str)
// function formateDate() {
//     // 获取当前日期
//     var date = new Date();
//     // 获取年
//     var year = date.getFullYear()
//     // 获取月
//     var month = date.getMonth() + 1 // 
//     // 获取日
//     var day = date.getDate() // 
//     // 获取小时
//     var hours = date.getHours()
//     // 获取分钟
//     var min = date.getMinutes()
//     // 获取秒
//     var seconds = date.getSeconds()

//     // 处理不足10的
//     month = month < 10 ? "0" + month : month;
//     day = day < 10 ? "0" + day : day;
//     hours = hours < 10 ? "0" + hours : hours;
//     min = min < 10 ? "0" + min : min;
//     seconds = seconds < 10 ? "0" + seconds : seconds;

//     //yyyy-mm-dd HH:mm:ss
//     //  return year + '-' + month  + '-' + day + ' ' + hours + ':' + min + ':' + seconds

//     return `${year}-${month}-${day} ${hours}:${min}:${seconds}`

//   }

//   console.log(formateDate())

//   function getmatDat(){
//    var date=new Date;
//     var year=date.getFullYear();
//     var month=date.getMonth()+1;
//     var day=date.getDate();
//     var hours = date.getHours()
//     // 获取分钟
//     var min = date.getMinutes()
//     // 获取秒
//     var seconds = date.getSeconds()
//     month = month < 10 ? "0" + month : month;
//     day = day < 10 ? "0" + day : day;
//     hours = hours < 10 ? "0" + hours : hours;
//     min = min < 10 ? "0" + min : min;
//     seconds = seconds < 10 ? "0" + seconds : seconds;
//     return `${year}-${month}-${day} ${hours}:${min}:${seconds}`
//   }
//   console.log(getmatDat())
//   function getmatDate(){
//   var date=new Date;
//   var year=date.getFullYear();
//   var month=date.getMonth();
//   var day=date.getDate();
//       var hours = date.getHours()
//       // 获取分钟
//       var min = date.getMinutes()
//       var seconds = date.getSeconds()
//       month=month<10?'0'+month:month;
//       day=day<10?'0'+day:day;
//       hours = hours < 10 ? "0" + hours : hours;
//       min = min < 10 ? "0" + min : min;
//       seconds = seconds < 10 ? "0" + seconds : seconds;
//   return `${year}-${month}-${day} ${hours}:${min}:${seconds}`
//   }
//   console.log(getmatDate())

// function getEvens(a) {
//     // 累加
//     var add = 0;
//     for (var i = 0; i < a.length; i++) {
//       if (a[i] % 2 != 0) {
//         add++;
//       }
//     }
//     return add;
//   }
//   // 产生数组
//   var arr = [];
//   for (var i = 0; i < 4; i++) {
//     // 随机数的产生
//     arr.push(parseInt(Math.random() * 50 + 1)); // [0,50)+1===>[1,51)
//   }
//   console.log(getEvens(arr));

// function getEvens(a){
//     var add=0;
//     for(var i=0;i<a.length;i++){
//         if(a[i]%2!=0){
//             add++;
//         }
//     }
//     return add;
// }
// var arr=[];
// for(var i=0;i<4;i++){
//     arr.push(parseInt(Math.random()*50+1));
// }
// console.log(getEvens(arr))

// var arr = ["张三丰", "李晓阳", "大张", "刘张伟", "张章"]

// function name(arr) {
//   // 循环遍历数组
//   for (var i = 0; i < arr.length; i++) {
//     // arr[i].charAt(0)或者是 arr[i][0]
//     if (arr[i][0] == "张") {
//       console.log(arr[i])
//     }
//   }
// }
// name(arr) // 张三丰   张章

// var arr = ["张三丰", "李晓阳", "大张", "刘张伟", "张章"]
// function name(arr){
//  for(var i=0;i<arr.length;i++){
//      if(arr[i][0]=='张'){
//          console.log(arr[i])
//      }
//  }
// }
// name(arr)

// var arr=['张三','李四','张子枫','张杰','张总']
// function name(arr){
// for(var i=0;i<arr.length;i++){
//     if(arr[i][0]=='张'){
//         console.log(arr[i])
//     }
// }
// }
// name(arr)
// function gerMax(arr){
// var max=1;
// for(var i=1;i<arr.length;i++){
//   if(arr[i]>max){
//     max+=arr[i]
//   }
//   return max
// }
// gerMax([1,2,3,4,5])
// function getMax(arr){
//   var max=arr[0];
//   for(var i=1;i<=arr.length;i++){
//     if(arr[i]>max){
//       max=arr[i]
//     }
//   }
//   return max;
// }
// // getMax([1,2,3,4,5])
// var re=getMax([1,2,3]);
// console.log(re)
// // 声明函数
// function getMax(arr){
//   // 声明变量
//   var max=arr[0];
//   // 遍历循环
//   for(var i=0;i<=arr.length;i++){
//     // 判断数组里面的元素是否大于max
//     if(arr[i]>max){
//       // 如果大于输出最大值
//       max=arr[i]
//     }
//   }
//   return max;
// }
// var re=getMax([1,2]);
// console.log(re)

// function  getMax(arr){
//   var max=arr[0];
//   for(var i=0;i<=arr.length;i++){
//     if(arr[i]>max){
//       max=arr[i];
//     }
//   }
//   return max;
// }
// var re=getMax([1,3,5])
// console.log(re)

// function getMax(arr){
//   var max=arr[0];
//   for(var i=0;i<=arr.length;i++){
//     if(arr[i]>max){
//       max=arr[i]
//     }
//   }
//   return max;
// }
// var re=getMax([1,2,3]);
// console.log(re)

// function getMax(arr){
//   var max=arr[0];
//   for(var i=0;i<arr.length;i++){
//     if(arr[i]>max){
//       max=arr[i]
//     }
//   }
//   return max;
// }
// var re=getMax([1,2,3,4,5]);
// console.log(re)

// function getMax(){
//    var max=arguments[0];
//    for(var i=1;i<arguments.length;i++){
//      if(arguments[i]>max){
//       max=arguments[i]
//      }
//    }
//    return max;
// }
// console.log(getMax(1,2,3,4,5,6));
// console.log(getMax(1,2,555,4,5,46));
// console.log(getMax(1,24,3,44,55,6));

// var str = "yuan yuan yuan jiang jiang yong aaaaaaaaaaaaa aaaaaaaaaaaaa odpsospoaioaoaoaoaoao"

// var arr=[1,2,3,4,5,6,7,8,9]
// // var num=prompt('请输入一个数字')
// var num=2;
// if(arr[i]%2==0||num%2==0){
//   console.log(arr.replace(arr[i]),num)
// }
// function find(str) {
//   var length = 0;
//   var strArray = str.split(' ');
//   for (var i = 0; i < strArray.length; i++) {
//     length = strArray[i].length > length ? strArray[i].length : length;
//   }
//   return length;
// }
// find("yuan yuan yuan jiang jiang yong aaaaaaaaaaaaa aaaaaaaaaaaaa odpsospoaioaoaoaoaoao");
// console.log(length)


//  <script>
//     // 2.用指定整数替换指定数组中的元素值，要求：
//     // 使用javasctipt实现如下要求完成：
//     // 1).定义一个数组arr，数组arr的值分别是1、2、3、4、5、6、7、8、9
//     // 2).用户输出一个新的的整数num
//     // 3).如果整数num为偶数，则用num替换数组arr中所有的偶数下标的元素值，
//     // 如果整数num为奇数，则用num替换数组arr中所有的奇数下标的元素值
//     // 4).在控制台上打印修改后的数组中的所有的元素值
//     arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//     var num = +prompt('请输入一个整数')
//     if (num % 2 == 0) {
//       for (var i = 0; i < arr.length; i++) {
//       if(i%2==0){
//         arr[i]=num
//       }
//       }
//     }else{
//       for (var i = 0; i < arr.length; i++) {
//       if(i%2!==0){
//         arr[i]=num
//       }
//       }
//     }
//     console.log(arr)
//   </script>

// 6.如下二维数组中存放了员工信息，每一个一维数组表示一条员工信息，
// 每个一维数组中存放了一条员工信息：姓名、职位、管辖区域(信息无序)
// 员工的职位只有“经理”、“职员”两种，区域只有"华北区"、"西南区"、"华中区"3种；
// var staffinfo = [
//   { name: "刘备", post: "经理", district: "华北区" },
//   { name: "诸葛", post: "职员", district: "华北区" },
//   { name: "马谡", post: "职员", district: "华北区" },
//   { name: "袁绍", post: "经理", district: "西南区" },
//   { name: "曹操", post: "经理", district: "华中区" },
//   { name: "许褚", post: "职员", district: "华中区" },
//   { name: "张辽", post: "职员", district: "华中区" },
//   { name: "徐晃", post: "职员", district: "华中区" },
// ]
// 解释：{name:"刘备",post:"经理",district:"华北区"}表示刘备的信息：
// 职位是经理，管辖华北区。
// 1. 定义函数getManager(staffinfo)，统计员工信息中"经理"的总人数。
// 2. 定义函数getAreaSum(staffinfo),计算员工信息中每个大区的总人数，并打印，打印格式要求如下：
// 华北区总人数：3人
// 西南区总人数：1人
// 华中区总人数：4人

// var staffinfo = [
//     { name: "刘备", post: "经理", district: "华北区" },
//     { name: "诸葛", post: "职员", district: "华北区" },
//     { name: "马谡", post: "职员", district: "华北区" },
//     { name: "袁绍", post: "经理", district: "西南区" },
//     { name: "曹操", post: "经理", district: "华中区" },
//     { name: "许褚", post: "职员", district: "华中区" },
//     { name: "张辽", post: "职员", district: "华中区" },
//     { name: "徐晃", post: "职员", district: "华中区" },
//   ]
  
//   function getManager() {
//     var num = 0
//     for (var i = 0; i < staffinfo.length; i++) {
//       if (staffinfo[i].post == '经理') {
//         num++
//       }
//     }
//     return num
//   }
//   console.log(getManager())
  
  
//   function getAreaSum(staffinfo) {
//     var n = 0
//     var s = 0
//     var m = 0
//     for (var i = 0; i < staffinfo.length; i++) {
//       if (staffinfo[i].district == '华北区') {
//         n++
//       } else if (staffinfo[i].district == '西南区') {
//         s++
//       } else if (staffinfo[i].district == '华中区')
//         m++
//     }
//     console.log(`华北区总人数：${n}人`)
//     console.log(`西南区总人数：${s}人`)
//     console.log(`华中区总人数：${m}人`)
//   }
//   getAreaSum(staffinfo)

// var str="qwe qdsvijifdjd daihfus adjiaaaaa aaaaaaaaaaaaaaa"
// var arr=str.split(' ')
// console.log(arr)
// var max=arr[0]
// for(var i=1;i<=arr.length;i++){
//   if(arr[i]>max){

//   }
// }

// // 1.找字符串里面的最长的单词和单词的长度
// // var str = "yuan yuan yuan jiang jiang yong aaaaaaaaaaaaa aaaaaaaaaaaaa odpsospoaioaoaoaoaoao"
// function name() {
//     var str = "yuan yuan yuan jiang jiang yong aaaaaaaaaaaaa aaaaaaaaaaaaa odpsospoaioaoaoaoaoao"
//     var arr = str.split(' ')
//     // console.log(arr)
//     for (var i = 0; i < arr.length; i++) {
//       for (var j = 0; j < arr.length; j++) {
//         if (arr[i].length < arr[j].length) {
//           var temp = arr[i]
//           arr[i] = arr[j]
//           arr[j] = temp
//         }
//       }
//       console.log(arr[i].length)
//       return arr[i]
//     }
//   }
//   console.log(name())
// var str = "yuan yuan yuan jiang jiang yong aaaaaaaaaaaaa aaaaaaaaaaaaa odpsospoaioaoaoaoaoao";
// var arr = str.split(" ");
// var maxStr=arr[0];
// for(var i=1;i<arr.length;i++){
//   if(maxStr.length<arr[i].length){
//     maxStr=arr[i]
//   }
// }
// console.log(maxStr,maxStr.length)

// var str = "yuan yuan yuan jiang jiang yong aaaaaaaaaaaaa aaaaaaaaaaaaa odpsospoaioaoaoaoaoao";
// var arr=str.split(" ");
// var  maxStr=arr[0];
// for(var i=1;i<arr.length;i++){
//   if(maxStr.length<arr[i].length){
//     maxStr=arr[i];
//   }
// }
// console.log(maxStr,maxStr.length)

// var str = "yuan yuan yuan jiang jiang yong aaaaaaaaaaaaa aaaaaaaaaaaaa odpsospoaioaoaoaoaoao";
// var arr=str.split(" ");
// var maxStr=arr[0];
// for(var i=1;i<arr.length;i++){
//   if(maxStr.length<arr[i].length){
//     maxStr=arr[i];
//   }
// }
// console.log(maxStr,maxStr.length)


// var str = "yuan yuan yuan jiang jiang yong aaaaaaaaaaaaa aaaaaaaaaaaaa odpsospoaioaoaoaoaoao";
// var arr=str.split(" ");
// var maxStr=arr[0];
// for(var i=1;i<arr.length;i++){
//   if(maxStr.length<arr[i].length){
//     maxStr=arr[i];
//   }
// }
// console.log(maxStr,maxStr.length)


// var num=prompt('请输入一个数字')
// if(num/1000>=1){
//   console.log(num)
// }else if(num/100>=1){
//   console.log(`0${num}`)
// }else if(num/10>=1){
//   console.log(`00${num}`)
// }else{
//   console.log(`000${num}`)
// }

  // 2.用指定整数替换指定数组中的元素值，要求：
    // 使用javasctipt实现如下要求完成：
    // 1).定义一个数组arr，数组arr的值分别是1、2、3、4、5、6、7、8、9
    // 2).用户输入一个新的的整数num
    // 3).如果整数num为偶数，则用num替换数组arr中所有的偶数下标的元素值，
    //    如果整数num为奇数，则用num替换数组arr中所有的奇数下标的元素值
    // 4).在控制台上打印修改后的数组中的所有的元素值

    // var arr=[1,2,3,4,5,6,7,8,9]
    // var num=prompt('请输入一个数字')
    // if(num%2==0)

    // var arr = [1,{name:"zs",age:18},[1,22,3,4],"888"]
    // console.log(obj.name)