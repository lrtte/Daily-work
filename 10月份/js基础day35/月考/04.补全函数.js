// 4、补全函数完成功能，传入数组中找到任意3个数字(数字不能重复使用)的和是10的倍数，将所有组合打印下来



// function printSumIs10MoM( arr){  



// }



function printSumIs10MoM(arr) {
    for(var i=0;i<arr.length;i++){
        if(arr[i]+arr[i+1]==10){
            console.log(`${a} `+arr[i],arr[i+1]+' 三个数的和是10的倍数')
        }
        if(arr[i]%10==0){
            var a=(arr[i])
        }
    }
  }
  var arr =[3,5,2,8,4,6];
  printSumIs10MoM(arr);



