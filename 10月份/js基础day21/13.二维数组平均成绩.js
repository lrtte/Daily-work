// var arr = [
//     [23,45,78,98,67,89,100], // 张三
//     [2,55,77,57,67,89,11],    // 李四
//     [3,43,78,45,67,99,10],    // 王五
//     ]
//       1、获取李四的数学成绩： arr[1][0]
//       2、使用二维数组遍历展示所有同学的所有成绩
//       3、计算数学平均成绩：(arr[0][0]+ arr[1][0]+ arr[2][0]+ arr[3][0])/3


var arr = [[23, 45, 78, 98, 67, 89, 100], [2, 55, 77, 57, 67, 89, 11], [3, 43, 78, 45, 67, 99, 10]]
console.log(arr[1][0])
var sum=0;
var a=0;
var average=0;
for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr[i].length;j++){
        console.log(arr[i][j])
        a+=1
        sum+=arr[i][0]
        average=sum/a
        
    }
   
}
console.log(average)