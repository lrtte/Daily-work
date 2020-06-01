// 1. 打印1-100中前三个是17的整数倍的数。
var num=0
for(var i=1;i<=100;i++){
  if(i%17==0){
    num++
    console.log(i)
    if(num==3){
      break;
    }
  }
}


