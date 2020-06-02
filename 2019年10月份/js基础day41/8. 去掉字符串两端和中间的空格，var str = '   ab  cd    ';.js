// 8. 去掉字符串两端和中间的空格，var str = '   ab  cd    ';
var str = "   ab  cd    ";
    var newatr= '';
      for(var i=0;i<str.length;i++){
          if(str[i]!=' '){
              newatr+=str[i];
          }
      }
      console.log(newatr);
