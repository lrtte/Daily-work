// 4. 遍历1到100之间（包含1和100）的所有数字，统计能被5整除的偶数的个数，最后将个数打印在控制台（while实现）
var i = 1
var sum = 0
while (i <= 100) {
  if (i % 5 == 0 && i % 2 == 0) {
    sum++
  }
  i++
}
console.log(sum)












