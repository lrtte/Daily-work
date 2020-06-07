# 简答题（注意自己写，从下周开始我会在自习课的时候或者是周三抽查人企业微信写）

1. 目前你所学的请求方式有哪些？区别是什么？(不要直接把百度的粘上来，用自己的话总结)
```js
Get请求与Post请求
get:
get将参数追加到url后面，放在请求头中提交
得到数据
post:
post 将数据放到请求体 中提交
提交数据
```

2. 原生的ajax怎么发请求?(get和post的方式都写出来,每行写上注释)
```js
// post
oBtn.onclick = function () {
            // 1.实例化XMLHttpRequest对象
            let xhr = new XMLHttpRequest();
            // 2.设置请求行(请求方式 请求地址)
            xhr.open('POST', '/postParam');
            // 重点: 使用POST请求必须添加请求头，form表单自动就是这样的Content-Type
            xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            // 3.发送请求数据(在get请求中这个地方写null)
            xhr.send("username=zhangsan&password=123456")
            // 4.监听并处理响应
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    // 5.把数据显示在页面上
                    console.log(xhr.responseText)
                }
            }
        }
//get
  oBtn.onclick = function () {
            //  2.获取username的值 获取password的值
            let username = userInput.value;
            let password = passInput.value;
            //  3.使用ajax把请求发送到服务器
            // 3.1 实例化XMLHttpRequest
            let xhr = new XMLHttpRequest();
            // 3.2 设置请求行(请求方式 请求地址)
            xhr.open('GET', `/getParam?username=${username}&password=${password}`);
            // 3.3 发送请求
            xhr.send(null);
            // 3.4 监听并处理响应
            xhr.onreadystatechange = function () {
                //  4.显示到页面上
                let data = JSON.parse(xhr.responseText);
            }

        }
```

3. jq的ajax的语法是什么?并且写出来目前你用到的属性每个的含义?
```js
下载jquery
引入jquery
$.ajax({
    // 请求设置
    type:'get',
    // 请求地址
    url:'/reqGet',
    // 请求数据
    data:{
        name:'zs',
        age:18
    },
    // 成功时的回调函数
    success:function(data){
        console.log(data)
    }
})
```

4. 使用art-template模板引擎的步骤是什么？(用自己的话写，不要直接粘笔记)
```js
1.引入ArtTemlate库
2.创建模板  添加id  使用type =“text/html”,浏览器就会把这个文件当做html解析了
3.使用 html=template('模板ID',对象);
4.渲染数据
```

5. art-template模板引擎的语法你知道的有哪些，并且总结出来?
```js
循环遍历语句
{{each name}}
索引：{{$index}}
值：{{$value}}
{{/each}}


流程控制语句（if else）
{{if value}}
...
{{else if value}}
...
{{else}}
...
{{/if}}
```

6. 客户端和服务端的通信过程是怎么样的？
```js
Socket
用于描述IP地址和端口，是一个通信链的句柄。(其实就是两个程序通信用的。)socket非常类似于电话的插座。以一个电话网为例。电话的通话双方相当于相互通信的2个程序，电话号码可以当作是IP地址。任何用户在通话之前，首先要占有一部电话机，相当于申请一个socket；同时要知道对方的号码（IP地址），相当于对方有一个固定的socket。然后向对方拨号呼叫，相当于发出连接请求。对方假如在场并空闲，拿起电话话筒，双方就可以正式通话，相当于连接成功。双方通话的过程，是一方向电话机发出信号和对方从电话机接收信号的过程，相当于向socket发送数据和从socket接收数据。通话结束后，一方挂起电话机相当于关闭socket，撤消连接，通信完成。
```

7. express怎么开放静态资源?
```js
app.use(express.static('public'))
```

8. express怎么读文件和写文件?
```js
app.post('/testFormData', upload.array(), function(req, res) {
    var base64Data = req.body.testdot;
    console.log('writing file...', base64Data);
    fs.writeFile(__dirname + "/upload/out.png", base64Data, 'base64', function(err) {
        if (err) console.log(err);
        fs.readFile(__dirname + "/upload/out.png", function(err, data) {
            if (err) throw err;
            console.log('reading file...', data.toString('base64'));
            res.send(data);
        });
    });
});
```

9. JSON对象和JSON字符串是怎么进行相互转换的?
```js
json字符串转json对象,调用parse方法
json对象转为json字符串，调用JSON.stringify()方法
```

10. form表单怎么的属性有哪些？分别是什么意思？
```js
1、method属性
规定用于发送  方法
2、name属性道
表单的名称。
3、action属性
指定表单请求的路径。
4、target属性
指定action的Url在哪里打开。
```

11. form表单怎么序列化获取值表单的值？
```js
$("form").serialize();
```

12. form表单怎么阻止默认的提交行为?
```js
1.设置type="button" button在浏览器中默认的类型为submit；
2.event.preventDefault(); 在提交事件绑定的方法的最后 使用event.preventDefault();方法；
3.onclick="return true" ；默认的表单提交事件
onclick="return false"；阻止表单提交事件
```

13. 在客户端怎么由login.html页面跳转到首页index.html?
```js
location.href='/index.html'
```