// 8. 去掉字符串两端和中间的空格，var str = '   ab  cd    ';
var str = '   ab  cd    '
var newStr=''
for(var i=0;i<str.length;i++){
    if(str[i]!=' '){
        newStr+=str[i]
    }
}
console.log(newStr)







