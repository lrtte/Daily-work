// let a=10, b=20;
// temp=a;//10
// a=b;//20
// b=temp;//10
// console.log(a,b);
// var num1 = 6;
// var num2 = 2;
// var num3 = 3;
// if (num1 > num2&&num1>num3) {
//         console.log(num1)
// }else if(num2>num3&&num2>num1){
//         console.log(num2)
// }else{
//         console.log(num3)
// }
// var num1=3;
// var num2=2;
// if(num1>num2){
//         console.log(num1)
// }else{
//         console.log(num2)
// }
// var a=1;
// var b=1;
// if(a+b>100){
//         console.log(b-a)
// }else{
//         console.log(a+b)
// }
// var sum = 0;
// var i = 0;
// for(; i<5; i++)
// {
//     sum +=i;
// }
// console.log(sum);
// var i = 8;
// do
// {
//     i++;
// }while(i>100);
// console.log(i)
// let person={
//     name:"范丞丞",
//     age:19,
//     height:'188',
//     weight:'80KG'
// };
// console.log(person.name)
// console.log(person['height'])
// console.log(person.weight)
// console.log(person['weight']

// var i=1;
// var sum=0;
// var num=0;
// while(i<=100){
//     sum+=i;
//     num++;
//     i++;
// }
// console.log(sum)
// console.log(sum/num)
// 
// var i=1;
// var sum=0;
// while(i<=100){
//     if(i%7===0){
//         sum+=i
//     }
//     i++;
// }
// console.log(sum)
// var i=1;
// var sum=0;
// while(i<=100){
//     if(i%10===3){
//         i++;
//         continue;
//     }
//     sum+=i;
//     i++;
// }
// console.log(sum)
// var i=1;
// var sum=0;
// while(i<=100){
//     if(i%10===3){
//         i++;
//         continue;
//     }
//     sum+=i;
//     i++;
// }
// console.log(sum)
// var i=100;
// var sum=0;
// while(i<=200){
//     if(i%2!==0){
//         sum+=i
//     }
//     i++;
// }
// console.log(sum)
// var i=100;
// while(i<=200){
//     if(i%7==0){
//         console.log(i);
//         break;
//     }
//     i++;
// }
// var i=100;
// while(i<=200){
//     if(i%7===0){
//         console.log(i);
//         break;
//     }
//     i++;
// }
// var arr = [1, 2, 3, 4, 5];
//    var sum = 0;
//    for (var i = 2; i < arr.length; i++) {
//      sum += arr[i];
//     }
//     console.log(sum);
//  var array = [];
//  for (var i = 0; i < 5; i++) {
//    if (i == 2) break;
//    array.push(i);
//    for (var j = 0; j < 5; j++) {
//       if (j == 2) continue;
//        array.push(j);
//      }
//   }
//  console.log(array);
var obj={
    name:'xj',
    age:18,
}
console.log(obj['name'])
var arr = [1, 2, 3, 4, 5];
    var sum = "";
    for (var i = 1; i < arr.length; i++) {
      sum += arr[i];
    }
    console.log(sum);