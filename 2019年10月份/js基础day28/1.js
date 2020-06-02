// // 10.给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// // 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
// //  示例:
// //  给定 nums = [2, 7, 11, 15], target = 9
// // 因为 nums[0] + nums[1] = 2 + 7 = 9
// // 所以返回 [0, 1]

// 声明数组
var nums = [2, 7, 11, 15]
// 声明目标值
var target=9
// 声明新数组 存放下标
var newnums=[]
// 循环遍历
for(var i=0;i<nums.length;i++){
    for(var j=i+1;j<nums.length;j++){
        // 判断 nums[i]+nums[j]是否等于目标值
        if(nums[i]+nums[j]==target){
            // 相等 将下标赋值到新数组
            newnums.push(i)
            newnums.push(j)
            break
        }
    }
}
// 输出
console.log(newnums)