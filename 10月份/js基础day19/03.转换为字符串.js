// 3.   数组转换为字符串
// 需求：将数组 ['red', 'green', 'blue', 'pink'] 转换为字符串，并且用 | 或其他符号分割



var colors = ['red', 'green', 'blue', 'pink'] ;
// console.log(colors.join('|'));  

var str='';
for (var  i = 0; i < colors.length; i++) {
    str+=colors[i]+'|';
}

console.log(str);