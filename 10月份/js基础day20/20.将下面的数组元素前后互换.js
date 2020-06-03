// 13.  将下面的数组元素前后互换
//          [11, 32，55, 47，79，23]	
//           置换后的数组元素为：
//           [23, 79, 47, 55, 32, 11]

var arr1 = [11, 32,55, 47,79,23]
//声明一个空数组
var arr2= []	
////用for的循环把arr1反转过来
for( var i =arr1.length-1;i>=0;i--){
    // console.log(arr1[i]);
    
    //添加到新数组
    arr2[arr2.length]=arr1[i]
}
console.log(arr2)