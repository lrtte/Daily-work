// 1、编写程序使用循环语句打印出下面的图形。（必须使用双层循环）

// *

// ***

// *****

// *******

// *********
// for(var i=1;i<=5;i++){
//     var str=''
//     for(var j=1;j<i*2;j++){
//         str+='*'
//     }
//     console.log(str)
// }
// for(var i=1;i<=5;i++){
//      var str=""
//     for(var j=1;j<i*2;j++){
//         str+="*"
//     }
// }
// console.log(str)

// (function (e) {
//         console.log(e === undefined);//trun
//         console.log(typeof e === undefined);//false
//     })()


// 4.统for (let i = 1; i < 5; i++) {
       for (let i = 1; i < 5; i++) {
            if (i === 3) {
                continue;
            }
            console.log(i)
        }
