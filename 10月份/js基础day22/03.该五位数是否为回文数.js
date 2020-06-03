// 3、定义一个5位数,判断 该五位数是否为回文数。（判断第一位和第五位是否一样，第二位和第四位是否一样）
var num =55255 ;
var ge = num % 10;
var shi = (num - ge) / 10 % 10;
var bai = (num - ge - shi * 10) / 100 % 10
var qian = (num - ge - shi * 10 - bai * 100) / 1000 % 10
var wan = (num - ge - shi * 10 - bai * 100 - qian * 1000) / 10000
if (ge == wan && shi == qian) {
    console.log(num + '是回文数')
} else {
    console.log(num + '不是回文数')
}