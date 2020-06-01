// 1.录入月份，输出对应的季节
//     (1)键盘录入一个整数(代表月份,范围1-12)
//     (2)输出该月份对应的季节
//    	   3,4,5春季
//    	   6,7,8夏季
//    	   9,10,11秋季
//    	   12,1,2冬季
//     (3)演示格式如下:
//    	   请输入一个月份:3
//    	   控制台输出:3月份是春季"


let num = 5
if (num == 3 || num == 4 || num == 5) {
  console.log(`${num}月份是春季`)
} else if (num == 6 || num == 7 || num == 8) {
  console.log(`${num}月份是夏季`)
} else if (num == 9 || num == 10 || num == 11) {
  console.log(`${num}月份是秋季`)
} else if (num == 12 || num == 1 || num == 2) {
  console.log(`${num}月份是冬季`)
}