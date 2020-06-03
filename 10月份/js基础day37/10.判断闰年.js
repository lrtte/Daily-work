// 10. 获取当前时间，判断今年是否为闰年。两种方法判断 
//     1)判断今年是否为闰年；  能被400整除 或 被4整除但不能被100整除
//     2)判断本年2月是否为28天。闰年：2月有29天  平年：2月有28天
let date = new Date()
if (date.getFullYear % 400 == 0 || date.getFullYear % 4 == 0 && date.getFullYear % 100 != 0) {
    console.log('闰年,2月不是28天')
} else {
    console.log('平年,2月28天')
}

