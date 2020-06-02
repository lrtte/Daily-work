// 1、输出2-100之间的所有素数（素数就是只能被1和其本身整除的数）
//循环2-100之间所有的数
for (var i = 2; i <= 100; i++) {
    //声明一个变量 默认是素数
    var flag = true;
    //循环i之前所有的数
    for (var j = 2; j < i; j++) {
        //判断能不能被整除
        if (i % j == 0) {
            //能被整除 就不是素数 flag赋值为false 
            flag = false;

        }
    }
    //判断flag是不是true
    if (flag) {
        // 是就输出结果
        console.log(i)
    }
}

