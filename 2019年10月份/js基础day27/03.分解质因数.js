//3.写一个函数，将一个正整数分解质因数。例如：输入90,打印出90=2*3*3*5
// 声明函数
function a(num){
  // 声明一个字符串
  var str=num+'='
  // 声明一个最小质数
  var i=2
  // while循环
  while(i<=num){
    // 判断num能否被i整除
    if(num%i==0){
      str+=i
      // 判断i是否等于num
      if(num!=i){
        // 不等于要加上*号继续分解
        str+='*'
      }
      // num能被i整除 num=num/i继续循环
      num=num/i
      // 不能被整除 i++
    }else{
      i++
    }
  }
return str
}
console.log(a(10))





//  分解质因数也称分解素因数）求一个数分解质因数，要从最小的质数除起，一直除到结果为质数为止。
//声明一个函数  设置一个形参
// function f1(num) {
//     //   创建字符串
//     var str =num+'='
//     //   最小的质数为2
//     var i = 2;
//     // 如果i<=num  就进入循环里面
//     while (i <= num) {
//       // 判断如果num能被i整除
//       if (num % i == 0) {
//         // 字符串拼接
//         str += i
//         // 如果不是最后一步  就加上*号
//         if(num!=i){
//           str +='*'
//         }
//         num /= i;
//         // 否则 i++
//       } else {
//         i++;
//       }
//     }
//     return str
//   }

//   console.log(f1(10));;