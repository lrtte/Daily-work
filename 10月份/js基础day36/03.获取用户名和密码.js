// 3.获取url中的用户名和密码
//  https://www.test.com/login?name=zs&pwd=123,
// 并且控制台输出对象的格式{name:'zs',pwd:123}

// var str='https://www.test.com/login?name=zs&pwd=123'


var str = 'https://www.test.com/login?name=zs&pwd=123';
        var str2 = str.split('?')[1]
        str2 = str2.split('&')
        str2 = str2[0] + ',' + str2[1]
        str2 = str2.replace('=', ':')
        str2 = '{' + str2.replace('=', ':') + '}'
        console.log(str2);
