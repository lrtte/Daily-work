// 6. 录入一个5位数,判断 该五位数是否为回文数。（判断第一位和第五位是否一样，第二位和第四位是否一样）
let num = 12321
let ge = num % 10
let shi = parseInt((num / 10) % 10)
let bai = parseInt((num / 100) % 10)
let qian = parseInt((num / 1000) % 10)
let wan = parseInt(num / 10000)
if (ge == wan && shi == qian) {
  console.log('是')
} else {
  console.log('否')
}