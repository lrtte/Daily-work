// 3、宠物编号 宠物名称    售价   产地

// p01      拉布拉多    2399   美国

// p02      京巴        1999   中国

// p03      金刚鹦鹉    6999   非洲

// p04      蓝孔雀      1599   非洲

// p05      田园犬      109    中国

// p06      德牧        3000   德国



// 创建一个宠物对象，

// 包含四个属性，分别是 宠物编号pid 宠物名称pname  售价price  

// 产地addr，值为上面的数据。


// 创建一个数组中，将对象添加到数组中。
var arr = [
    {
        pid: 'p01',
        pname: '拉布拉多',
        price: 2399,
        adder: '美国'
    },
    {
        pid: 'p02',
        pname: '京巴',
        price: 1999,
        adder: '中国'
    },
    {
        pid: 'p03',
        pname: '金刚鹦鹉',
        price: 6999,
        adder: '非洲'
    },
    {
        pid: 'p04',
        pname: '蓝孔雀',
        price: 1599,
        adder: '非洲'
    },
    {
        pid: 'p05',
        pname: '田园犬',
        price: 109,
        adder: '中国'
    },
    {
        pid: 'p06',
        pname: '德牧',
        price: 3000,
        adder: '德国'
    }

]

// console.log(arr[0]) //输出的是对象
// console.log(arr[1].adder) //输出的是地址


// 1.获取价格最低的宠物对象
function getMinPricePet() {
var min = 0
for (var i = 0; i < arr.length; i++) {
    if (arr[i].price < arr[0].price) {
        min = i

    }
}
console.log(arr[min])
}
getMinPricePet()

// 2.获取指定产地的宠物的平均价格
// 判断产地是否为中国 是 循环遍历为中国的价格 声明一个变量表示总价格 声明一个变量表示个数 声明一个变量表示平均值
// 循环遍历产地名称

function getChinaAvgPrice(arr, addr) {
    var sum = 0
    var zong = 0
    var average = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].adder == addr) {
            sum++
            zong += arr[i].price
            average = zong / sum
        }
    }
    console.log('产地是中国的宠物的平均价格是：' + average)

}
getChinaAvgPrice(arr, '中国')









// 1.创建函数 获取价格最低的宠物对象   function getMinPricePet(arr) // arr是宠物数组

// 2.创建函数 获取指定产地的宠物的平均价格 function getChinaAvgPrice(arr,addr) // arr是宠物数组 addr为产地名称