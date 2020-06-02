// 1. 定义数组 var arr = [11,22,33,44,55],要求：使用for循环将arr数组的中的元素全部打印到控制台
// var arr = [11,22,33,44,55]
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// 2. 定义数组 var arr = [11,22,33,44,55],要求：求数组中所有的元素的和
// var arr = [11,22,33,44,55]
// var sum=0;
// for(var i=0;i<arr.length;i++){
//     sum+=arr[i]
// }
// console.log(sum)

// 3. 定义数组 var arr = [11,22,33,44,55],要求：将arr数组中为偶数的元素打印到控制台
// var arr = [11,22,33,44,55]
// for(var i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         console.log(arr[i])
//     }
// }

// 4. 定义数组 var arr =[11,22,33,44,55],要求：使用for循环将arr数组的中的元素全部倒叙打印到控制台
// var arr = [11,22,33,44,55]
// for(var i=arr.length-1;i>=0;i--){
//     console.log(arr[i])
// }


// 5. 分析以下需求并实现
//    1.定义一个用于存放班级分数的数组var score = [80,90,85,90,78,88,89,93,98,75];
//    2.求出班级不及格人数(分数低于60分的就是不及格) ?? 
//    3.求出班级的平均分
//    4.求出班级的总分数
// var score = [80,90,85,90,78,88,89,93,98,75]
// var sum=0;
// var avg=0;
// var num=0;
// var zongFen=0;
// for(var i=0;i<score.length;i++){
//     if(score[i]<60){
//         sum++
//     }
//     num++
//     zongFen+=score[i]
//     avg=zongFen/num

// }
// console.log('不及格人数'+sum+'人')
// console.log(zongFen)
// console.log(avg)


// 6.  var arr = [1,1,2,2,3,4,5,4,3,2,1], 打印出数字2出现的次数。
// var arr = [1,1,2,2,3,4,5,4,3,2,1]
// var sum=0;
// for(var i=0;i<arr.length;i++){
//     if(arr[i]==2){
//         sum++
//     }
// }
// console.log(sum)

// 7.   已有数组var nums = [5,10,15],要求创建一个新数组
//     1.新数组的长度和已知数组相同
//     2.新数组每个元素的值，是已知对应位置元素的2倍
//     3.在控制台中打印新数组的所有元素
// var nums = [5,10,15]
// var newNums=[]
// for(var i=0;i<nums.length;i++){
//     newNums.push(nums[i]*2)
// }
// console.log(newNums)


// // 8.定义一个整数数组，包含元素[1,3,4,7,8]，获取数组中数组角标和对应的元素都为偶数的元素与个数，并在控制台打印输出。
// var arr=[1,3,4,7,8]
// var sum=0
// for(var i=0;i<arr.length;i++){
//     if(i%2==0&&arr[i]%2==0)
//     console.log(arr[i])
// }

// 9.var oldArr[]={1,3,4,5,0,0,6,6,0,5,4,7,6,7,0,5}; 
//     要求将以上数组中的0项去掉，将不为0的值存入一个新的数组，生成新的数组为 
//     var newArr=[1,3,4,5,6,6,5,4,7,6,7,5];
// var arr=[1,3,4,5,0,0,6,6,0,5,4,7,6,7,0,5]
// var newArr=[]
// for(var i=0;i<arr.length;i++){
//        if(arr[i]==0){
//            continue;
//        }else{
//            newArr.push(arr[i])
//        }
// }
// console.log(newArr)

// 11.  var arr = [1,888,4,66,7,8]
// 要求，可以把数组中的下标为 3 的元素移到数组的开头
// var arr=[1,888,4,66,7,8]
// arr.unshift(arr[3])
// arr.splice(4,1)
// console.log(arr)

// 12.var arr = ['张三'，'李四'，‘王五’]
// 要求，将数组中的每一个数据拼接在一起，每个数据之间用 | 符合拼接。 如：‘张三|李四|王五
// var arr = ['张三', '李四', '王五']
// var str = "";
// for (var i = 0; i < arr.length - 1; i++) {
//     str += arr[i] + "|"
// }
// console.log(str +arr[arr.length - 1])

// 13.定义2个长度为5的字符串数组arrA和arrB，arrA包含元素["a","b","c","d","e"];
// 遍历arrA中的所有元素并按逆序存储在数组arrB中，并按arrB下标增长的顺序在控制台打印输出arrB数组中所有元素，arrB的结果如下，var arrB = ["e","d","c","b","a"]
// 声明 数组
// var arrA=["a","b","c","d","e"]
// // 声明一个新数组
// var arrB=[]
// // 循环遍历 倒叙
// for(var i=arrA.length-1;i>=0;i--){
    
//     arrB.push(arrA[i])
// }
// console.log(arrB)

// 14.已知数组{"周兴迟","刘一飞","赵本善","孙妍姿","王妃","陈怡迅"}.
//     请查找出数组中是否有孙妍姿、汪菲。 
//     如果有，请给出索引；
//     如果没有给出-1。
// var arr=["周兴迟","刘一飞","赵本善","孙妍姿","王妃","陈怡迅"]
// console.log(arr.indexOf('孙妍姿'))
// console.log(arr.indexOf('汪菲'))

// 15. 有一个数组，var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
// 要求如下:
//    1.从第 0 位开始删除 1 个元素，插入"parrot"、"anemone"和"blue"
//    2.从第 2 位开始删除 2 个元素
//    3.从第 1 位开始删除 0 个元素，插入“drum” 和 "guitar"
// var myFish = ['angel', 'clown', 'trumpet', 'sturgeon']
// myFish.splice(0,1,"parrot","anemone","blue")
// myFish.splice(2,2)
// myFish.splice(1,0,"drum","guitar")
// console.log(myFish)

// 16.某班考试成绩如下，利用二维数组存储这些数据，统计出全班的平均成绩
//   第一组： 89，66，54
//   第二组： 77，93，68
//   第三组： 55,   45,  88
//   第四组： 71,   76,  75
// var arr = [[89, 66, 54], [77, 93, 68], [55, 45, 88], [71, 76, 75]]
// var zong=0
// var num=0
// var avg=0
// for(var i=0;i<arr.length;i++){
//     for(var j=0;j<arr[i].length;j++){
//         num++
//         zong+=arr[i][j]
//        avg=zong/num
//     }
// }
// console.log(avg)

// 17.  如下二维数组：
// var arr = [
// [23,45,78,98,67,89,100], // 张三
// [2,55,77,57,67,89,11],    // 李四
// [3,43,78,45,67,99,10],    // 王五
// ]
//   1、获取李四的数学成绩： arr[1][0]
//   2、使用二维数组遍历展示所有同学的所有成绩
//   3、计算数学平均成绩：(arr[0][0]+ arr[1][0]+ arr[2][0])/3
// var arr = [
// [23,45,78,98,67,89,100], // 张三
// [2,55,77,57,67,89,11],    // 李四
// [3,43,78,45,67,99,10],    // 王五
// ]
// var avg=0
// var num=0
// var zong=0
// console.log(arr[1][0])
// for(var i=0;i<arr.length;i++){
//     for(var j=0;j<arr[i].length;j++){
//         console.log(arr[i][j])
//     }
//     for(var j=0;j<arr[i].length;j++){
//         num++
//         zong+=arr[i][0]
//         avg=zong/num
//     }
//     console.log(avg)
// }


// 18.求出数组var arr= [1,2,4,5,10,100,2,-22]中最小元素的索引
// var arr= [1,2,4,5,10,100,2,-22]
// var min=arr[0]
// for(var i=0;i<arr.length;i++){
//     if(arr[i]<min){
//         min=arr[i]
//     }
// }
// console.log(arr.indexOf(min))

// 19.按照从大到小的顺序排列 ，var arr= [10, 5, 34, 59, 98],最后打印排序后的数组。
// var arr= [10, 5, 34, 59, 98]
// for (var i = 0; i < arr.length - 1; i++) {
//     var temp = 0
//     for (var j = 0; j < arr.length - 1 - i; j++) {
//         if (arr[j]<arr[j+1]){
//             temp=arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=temp
//         }
//     }
// }
// console.log(arr)

// 20.将数组var arr= [1,3,2,8,6,11,9]，采用冒泡排序，按照从小到大排序
// 声明数组 循环遍历 外层范围arr.length-1 内层 arr.length-1-i 声明空变量 arr[j] arr[j+1]判断大小 交换位置
// var arr= [1,3,2,8,6,11,9]
// for(var i=0;i<arr.length-1;i++){
//     for(var j=0;j<arr.length-1-i;j++){
//         if(arr[j]>arr[j+1]){
//             var temp=arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=temp
//         }
//     }
// }
// console.log(arr)

// 21.数组[10, 5, 34, 59, 98], 使用for循环找出里面的最大值? 使用while循环找出里面的最小值?
// var arr=[10, 5, 34, 59, 98]
// var max=arr[0]
// for(var i=0;i<arr.length;i++){
//    if(arr[i]>max){
//        max=arr[i]
//    }
// }
// console.log(max)
// var i=0
// var min=arr[0]
// while(i<arr.length){
//     if(arr[i]<min){
//         min=arr[i]
//     }
//     i++
// }
// console.log(min)

// 22. 求数组中的最大值和最小值, var arr =  [11, 32，55, 47，79，23]
// var arr = [11, 32, 55, 47, 79, 23]
// var max=arr[0]
// for(var i=0;i<arr.length;i++){
//     if(arr[i]>max)
//     max=arr[i]
// }
// console.log(max)
// var min=arr[0]
// for(var i=0;i<arr.length;i++){
//     if(arr[i]<min)
//     min=arr[i]
// }
// console.log(min)

// 23.现有二维数组，var  array=[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]];                                       
//    1. 遍历打印二维数组的所有元素
//    2. 计算二维数组中所有元素的和
//    3. 求二维数组中所有元素的最大值。
// var  array=[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]
// var he=0
// for(var i=0;i<array.length;i++){
//     for(var j=0;j<array[i].length;j++){
//       he+=array[i][j]
//       var max=array[0][0]
//       if(array[i][j]>max){
//           max=array[i][j]
//       }
//       var min=array[0][0]
//       if(array[i][j]<min){
//           min=array[i][j]
//       }
//     }
// }
// console.log(he)
// console.log(max)
// console.log(min)

// 24.10个整数{9,10,6,6,1,9,3,5,6,4}，保存到数组中。
//       1.去除数组中重复的内容，只保留唯一的元素。
//       2.以下列格式打印数组：[9,10,6,1,3,5,4]
// var arr=[9,10,6,6,1,9,3,5,6,4]
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i])
// }


// 25.已知arr数组内容[1, 3, 5, 8, 10, 11, 16]，编码实现：数组中所有奇数加1，偶数-1,最后打印数组内容
// var arr = [1, 3, 5, 8, 10, 11, 16]
// for (var i = 0; i < arr.length; i++) {
//     if(arr[i]%2==0){
//         arr[i]-=1
//     }else if(arr[i]%2!=0){
//         arr[i]+=1
//     }

// }
// console.log(arr)
// 26.  将下面的数组元素前后互换
//          [11, 32，55, 47，79，23]	
//           置换后的数组元素为：
//           [23, 79, 47, 55, 32, 11]

// 27.将下面的数组元素前后互换，不能定义新的数组，在原数组上面操作，需要第一个元素和最后一个元素互换位置，第二个元素和倒数第二个元素互换位置，依次类推
//                   [11, 32，66, 47，79，23，89]	
//                 置换后的数组元素为：
//                   [89, 23, 79, 47, 66, 32, 11]
//声明变量 循环遍历 遍历范围是数组长度/2 声明一个空变量 让空变量=当前值 让当前值=arr[arr.length-1-i]  让arr[arr.length-1-i]=空变量  输出
// var arr=[11, 32,66, 47,79,23,89]
// for(var i=0;i<arr.length/2;i++){
//     var temp=arr[i]
//     arr[i]=arr[arr.length-1-i]
//     arr[arr.length-1-i]=temp

// }
// console.log(arr)

// 28. 在数组中 查询数据第二次55出现的位置,打印第二次出现的索引（索引指从0开始）[11, 32，55, 47，55, 79，23]
// var arr=[11, 32,55, 47,55, 79,23]
// var count=0
// for (var i=0;i<arr.length;i++){
//     if(arr[i]==55){
//         count++
//         if(count==2){
//             console.log(i)
//         }
//     }    
// }




// 29. var arr1 = [1, 2, 3, "aaa", "hello", 999, -1];
//       var arr2 = [3, 78, "aaa", "bbb", 99, 1, -1, "hello"];
// 要求，把两个数组共同的元素放入一个新的数组, 并返回新的数组
// var arr1 = [1, 2, 3, "aaa", "hello", 999, -1]
// var arr2 = [3, 78, "aaa", "bbb", 99, 1, -1, "hello"]
// var arr3=arr1.concat(arr2)
// console.log(arr3)



// 30.左奇右偶
//     10个整数的数组[26,67,49,38,52,66,7,71,56,87],元素重新排列，所有的奇数保存到数组左边，所有的偶数保存到数组右边。
// var arr = [26, 67, 49, 38, 52, 66, 7, 71, 56, 87]
// var newArr = []
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 != 0) {
//         newArr.unshift(arr[i])
//     } else if (arr[i] % 2 == 0) {
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr)

// 32.现在有2个数组，var arr1 = [1,7,9,11,8,15,10,19],
// var arr2 =[2,1,6,8,10]将2个数组合并为一个数组，并将数组去重，然后按照升序进行排列
//定义数组arr3 用concat 拼接  定义一个空的新数组 循环遍历 判断元素下标为-1 就push到新数组
// var arr1 = [1,7,9,11,8,15,10,19]
// var arr2 =[2,1,6,8,10]
// var arr3=arr1.concat(arr2)
// var newArr=[]
// for(var i=0;i<arr3.length;i++){
//     if(newArr.indexOf(arr3[i])==-1){
//         newArr.push(arr3[i])
//     }
// }
// console.log(newArr)

// 34.请编程实现数组最大的与第一个元素交换，最小的与最后一个元素交换，
// 然后打印数组内容, var arr = [1,2,4,5,7,7,666,0,-1,-2,-3]

// 声明数组 循环遍历 找出最大元素和最小元素 声明空变量用于交换位置

// var arr = [1,2,4,5,7,7,666,0,-1,-2,-3]
// var max=arr[0]
// var min=arr[0]
// var maxA=0;
// var minA=0;
// for(var i=0;i<arr.length;i++){
//          if(arr[i]>max){
//              max=arr[i]
//              maxA=i
//          }
//          if(arr[i]<max){
//             min=arr[i]
//             minA=i
//         }
// }
// var temp=arr[maxA]
// arr[maxA]=arr[0]
// arr[0]=temp
// var temp1=arr[arr.length-1]
// arr[arr.length-1]=arr[minA]
// arr[minA]=temp1
// console.log(arr)

// 35.将一个一维数组，var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
//     通过一定方法，转成二维数组 var newarr = [[1,2,3,4,5,6],[7,8,9,10,11,12],[13,14,15,16,17,18]]

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
// var newarr = [];
// for(var i=0;i<arr.length;i+6){
//     newarr.push(arr.splice(i,6))
// }
// console.log(newarr);

// 36.找出一个数组中有哪些重复元素，并且这些元素各重复了几次,var arr = [0,1,3,1,1,5,5,8,8,8,0,9,5]
// 声明数组 排序 循环遍历 定义一个计数变量 if判断 arr[i]==arr[j]  计数变量+1 判断计数变量>1 输出元素arr[i]和重复次数 sum
// var arr = [0,1,3,1,1,5,5,8,8,8,0,9,5]
// arr.sort(function(a,b){return a-b})
// for(var i=0;i<arr.length;){
//     var sum=0
//     for(var j=0;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             sum++
//         }
//     }
//     if(sum>1){
//         console.log(arr[i],sum)
//     }
//     i+=sum
// }


