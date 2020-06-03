// 5.删除一个字符串中出现最多的字符, var str="assdfscfwssseee"
var str="assdfscfwssseee";
 //声明一个空对象
 var arr ={};
 //遍历数组
 for(var i = 0; i < str.length; i++){
        var a = str.charAt(i)
        if(arr[a]){
            arr[a]++
        }else{
            arr[a]=1
        }
    }
console.log(arr);