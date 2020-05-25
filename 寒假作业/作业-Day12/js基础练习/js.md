js解答题
数组的两种定义方式是什么
1.使用字面量的方式来定义数组
var arr=[1,2,3]
console.log(arr)
2.使用new Array函数构造来定义数组
var arr=new Array(10)

什么是元素下标(索引)，简述在数组中如何使用
 下标(索引)从0开始，第一个元素的下标是0，加入数组中一共有10个元素，
 他们的下标分别是从0到9
使用方法:
var arr[1,2,3]
console.log(arr[1])
数组中索引的范围是多少？
是数组的长度
如何知道一个数组的长度，其长度代表的是什么？
arr.length 查看数组长度，长度代表数组中有几个元素。
js编程题
使用两种定义方式将【true,全栈,666,Full_Stack,{name:"杨"},[1,2]】存入数组
第一种
var arr = [true, 全栈, 666, Full_Stack, { name: "杨" }, [1, 2]];

第二种
var arr = new Array();
arr.push(true, "全栈", 666, "Full_Stack", { name: "杨" }, [1, 2])
console.log(arr)
分别打印数组var arr = ['金','木','水']中的每个元素
var arr = ['金','木','水']
console.log(arr)
操作数组var arr = [1,2,[3,4,5,6],7,[8,9,10]]


1) 打印元素2
console.log(arr[1])
2) 打印元素5
console.log(arr[2][2])
3) 打印元素7
console.log(arr[3])
4) 打印元素10
console.log(arr[4][2])
操作数组var arr = [1,[2,3,4],[5,[6,7]],{name:"杨"},true,false]

1) 打印出[6,7]
console.log(arr[2][1])
2) 打印数组中的对象
console.log(arr[3])
3) 打印该对象的属性值
console.log(arr[3].name)
4) 将数组中的true和false互换位置
var arr = [1, [2, 3, 4], [5, [6, 7]], { name: "杨" }, true, false];
arr.splice(4, 1)
arr.push(true)
console.log(arr)