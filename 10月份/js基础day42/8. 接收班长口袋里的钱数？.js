// 8. 接收班长口袋里的钱数？若大于等于2000，请大家吃西餐。若小于2000，大于等于1500，请大家吃快餐。
// 若小于1500，大于等于1000，请大家喝饮料。若小于1000，大于等于500，请大家吃棒棒糖。否则提醒班长下次把钱带够
var money=30000
if(money>=2000){
    alert('请大家吃西餐')
}else if(money<2000&&money>=1500){
    alert('请大家吃快餐')
}else if(money<1500&&money>=1000){
    alert('请大家喝饮料')
}else if(money<1000&&money>=500){
    alert('请大家吃棒棒糖')
}else{
    alert('把钱带够')
}