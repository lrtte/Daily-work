// 9. 分数转换,给一个分数，判定等级。大于等于90  A，大于等于80小于90 
//  B，大于等于70小于80  C ，大于等于60小于70 D，小于60 E
var score=100
if(score>=90){
    alert('A')
}else if(score>=80&&score<90){
    alert('B')
}else if(score>=70&&score<=80){
    alert('C')
}else if(score>=60&&score<=70){
    alert('D')
}else if(score<60){
    alert('E')
}
