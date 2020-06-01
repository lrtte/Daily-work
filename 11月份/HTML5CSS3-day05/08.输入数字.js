// 2. 用户输入一个数字，列出所有它能够整除的数字。
function a(num){
for(var i=1;i<=num;i++){
  if(num%i==0){
    console.log(i)
  }
}
}
a(3)
