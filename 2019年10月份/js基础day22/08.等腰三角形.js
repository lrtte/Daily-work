// 8、利用JavaScript完成输出如下图形（由“空格”和“*”这两种符号组成）
// /**
//         * 
//        * * 
//       * * *  
//      * * * * 
//     * * * * * 
//  */ 

// 声明一个外层循环   表示行数   共5行
for (var i = 1; i <= 5; i++) {
    // 声明一个变量str  是一个空字符串
    var str = '';
    //明一个内层循环  表示空格 
    for (var j = 1; j <= 5 - i; j++) {
        // 字符串拼接
        str += ' ';
    }
    // 再声明一个内层循环  表示*
    for (var j = 1; j <= i; j++) {
        // 字符串拼接
        str += '* ';
    }
    // 打印str
    console.log(str);
}