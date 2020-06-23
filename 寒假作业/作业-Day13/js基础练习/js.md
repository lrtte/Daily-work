## js简答题
1. 怎么定义一个二维数组？
var arr=[1,2,[1,1]]

2. 数组的方法有哪些？请列举10个，并说明方法的作用
push是从数组末尾添加元素，返回值是新数组的长度
unshift 是从数组的最前面开始添加内容,返回值是新数组的长度
数组能够删除元素的方法是pop,shift
pop是从数组末尾删除元素，返回值是删除的末尾的那个元素
shift是从数组最前面删除元素，返回值是删除的最前面的那个元素
sort(): 按升序排列数组项
reverse()：反转数组项的顺序
concat(): 将参数添加到原数组中
slice(): 返回从原数组中指定开始下标到结束下标之间的项组成的新数组
splice(): 可以实现删除、插入和替换
indexOf是查找某个元素在数组中的位置，如果数组中有这个元素，则返回元素对应的索引，如果数组中有这个元素，则返回元素对应的索引，如果没有这个值，则返回-1

3. 怎么获取二维数组里面的某一个元素，自己定义数组
var arr=[1,2,[1,2]]
console.log(arr[2][1])
4. 数组的长度和数组的下标(索引)的对应关系
 下标(索引)从0开始，第一个元素的下标是0，加入数组中一共有10个元素，
 他们的下标分别是从0到9


## js编程题

1. 定义数组 var arr = [1,2,666,3,4],
 
 - 1） 给数组最后添加1个元素
 - 2）给数组最前面添加1个元素
 - 3）将元素666删除之后，添加一个元素"拉拉"
```js
var arr = [1,2,666,3,4]
arr.push(1);
arr.unshift(2);
arr.splice(2, 1, "拉拉");
```
2. 定义数组var arr = [2,4,77,100,1]
 - 1）在控制台输出数组的最大值
 - 2）在控制台输出数组的最小值
 ```js
var arr = [2, 4, 77, 100, 1];
var min = arr[0];
for (var i = 0; i <= arr.length - 1; i++) {
 if (min > arr[i]) {
   min = arr[i];
 }
}
console.log(min);//最小值

var arr = [2, 4, 77, 100, 1];
var max = arr[0];
for (var i = 0; i <= arr.length - 1; i++) {
 if (max < arr[i]) {
   max = arr[i];
 }
}
console.log(max);//最大值

 ```
3. 定义数组var arr = [1,2,3,4,5,6,1,2,3,1,2],将数组重复的元素去重,(请使用2种方式实现)
```js
var arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 1, 2];
var arr1 = [];
for (var i = 0; i <= arr.length - 1; i++) {
  if (arr1.indexOf(arr[i]) == -1) {
    arr1.push(arr[i]);
  }
}
console.log(arr1);


var arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 1, 2];
var arr1 = arr.sort();
var arr2 = [];
for (var i = 0; i <= arr1.length - 1; i++) {
  if (arr1[i] != arr[i - 1]) {
    arr2.push(arr1[i]);
  }
}
console.log(arr2);

```

4. 现有二维数组，var  array=[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]];                                       
   - 1). 遍历打印二维数组的所有元素
   - 2). 计算二维数组中所有元素的和
   - 3). 求二维数组中所有元素的最大值。

  ```js
 var  array=[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]
for (var i = 0; i <= array.length - 1; i++) {
for (var j = 0; j <= array[i].length - 1; j++) {
  console.log(array[i][j]);
}
}

var sun = 0;
for (var i = 0; i <= array.length - 1; i++) {
for (var j = 0; j <= array[i].length - 1; j++) {
  sun += array[i][j];
}
}
console.log(sun);

var mix = array[0][0];
for (var i = 0; i <= array.length - 1; i++) {
for (var j = 0; j <= array[i].length - 1; j++) {
  if (mix < array[i][j]) {
    mix = array[i][j];
  }
}
}
console.log(mix);
  ```

