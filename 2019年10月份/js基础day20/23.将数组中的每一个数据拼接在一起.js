// 16.var arr = ['张三'，'李四'，‘王五’]
// 要求，将数组中的每一个数据拼接在一起，每个数据之间用 | 符合拼接。 如：‘张三|李四|王五

var arr = ['张三','李四','王五']
//声明一个空字符串
var str = '';
//用for的循环的打印出数组
for(var i = 0; i < arr.length ; i++){
   if(i == 1){
    str += "|"+arr[i]+"|"
   }else {
    str += arr[i]
   }
}
console.log(str)