// 7.将字符串变成驼峰法var str = "get-element-by-id"， 
// 结果是 "getElementById"

var str='get-element-by-id';
       var newStr = '';
       var arr = str.split('-');//分隔字符串得到一个数组
       for(var i = 0;i<arr.length;i++){
           var s = arr[i];
            if(i == 0){//第一个元素还是小写，直接拼接
                newStr += s;
            }else{
                newStr += s.substr(0,1).toLocaleUpperCase();//先取出第一个字符，转成大写拼接到newString中
                newStr += s.substr(1,s.length-1);//在拼接第二个 到最后面所有的字符
            }
       }

console.log(newStr);
