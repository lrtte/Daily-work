// 1.一小和尚挑水，要把水缸装满，而且每次只能挑5升水，水缸能容纳80升水。
// 问：小和尚要挑几次才能把水缸挑满？
var shui = 0
var sum = 0
while (true) {
  shui += 5
  sum++
  if (shui >= 80) {
    console.log(sum)
    break;
  }

}

