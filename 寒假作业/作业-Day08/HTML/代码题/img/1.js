var name = prompt("输入姓名", ""), 
age = prompt("输入年龄", ""), 
gender = prompt("输入性别", "");
if(age < 18){
    alert(name + "小朋友，你尚未成年不能进入本站.");
    document.body.style.backgroundColor = "red";
}else{
    alert(name + (gender == "男" ? "先生" : "女士") + "，欢迎光临本站.");
    document.body.style.backgroundColor = "green";
}