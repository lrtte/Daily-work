// 6.  找到100到200之间第一个能被7整除的数字
var i=100;
while(i<=200){
    if(i%7==0){
        console.log(i)
        break;
    }
    i++
}