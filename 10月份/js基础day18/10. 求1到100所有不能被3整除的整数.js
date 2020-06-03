// 10. 求1到100所有不能被3整除的整数的第一个大于2000的和
var i=1;
var sum=0;
while(i<=100){
    if(i%3==0){
        i++
        continue;
    }
    sum+=i
    if(sum>2000){
        console.log(sum);
        break;
    }
    i++
}