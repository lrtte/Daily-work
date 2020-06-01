// 3.求2000-3000年之间的所有的闰年以及个数
var ge=0
for(var i=2000;i<=3000;i++){
  
  if(i%4==0&&i%100!=0||i%400==0){
    ge++
       console.log(i)
  }
}
console.log(ge)
