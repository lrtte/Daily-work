// 7.将字符串变成驼峰法var str = "get-element-by-id"， 结果是 "getElementById"
var str='get-element-by-id';
       var newStr = '';
       var arr = str.split('-');
       for(var i = 0;i<arr.length;i++){
           var s = arr[i];
            if(i == 0){
                newStr += s;
            }else{
                newStr += s.substr(0,1).toLocaleUpperCase();
                newStr += s.substr(1,s.length-1);
            }
       }
console.log(newStr);