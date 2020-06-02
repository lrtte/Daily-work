// 需求: 求1!+2!+3!+...+10!的和
var sum=0;
for(var i=1;i<=10;i++){
    var a=1
    for(var j=1;j<=i;j++){
       a*=j
    }
    sum+=a
}
console.log(sum)