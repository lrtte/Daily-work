# 建表语句
# 学生表 student
create table student(
  id int(10) primary key not null auto_increment,
  name varchar(20) not null,
  sex varchar(4),
  birth year,
  department varchar(20) not null,
  address varchar(50)
  )default charset=utf8;

# 成绩表 score
create table score(
  id int(10) primary key not null auto_increment,
  stu_id int(10) not null,
  c_name varchar(20),
  grade int(10)
  )default charset=utf8;



# 添加数据
 insert into student values(901,'张老大','男',1990,'计算机系','北京市海淀区');
  insert into student (name,sex,birth,department,address) values
  ('张老二','男',1991,'中文系','北京市昌平区'),
  ('张三','女',1995,'中文系','湖南省永州市'),
  ('李四','男',1995,'英语系','辽宁省阜新市'),
  ('王五','女',1996,'英语系','福建省厦门市'),
  ('王六','男',1993,'计算机系','湖南省衡阳市');


insert into score values(NULL,901,'计算机',98);
  insert into score (stu_id,c_name,grade) values
  (901,'英语',80),
  (902,'计算机',65),
  (902,'中文',88),
  (903,'中文',95),
  (904,'计算机',70),
  (904,'英语',92),
  (905,'英语',94),
  (906,'计算机',90),
  (906,'英语',85);


# 1.	查询student表的所有记录:
    select * from student;

# 2.	从student表查询所有学生的学号、姓名和院系信息:
    select id 学号, name 姓名 , department 院系信息 from student;


# 3.	从student表中查询计算机系和英语系的学生的信息:
    select * from student where department = '计算机系' or department = '英语系';

# 4.	从student表中查询年龄18~22岁的学生信息:
    select * from student where year(now())- birth between 18 and 22;
    select year(now())-birth from student;
    select * form student where year(now())-birth between 18 and 22;
    select * from student where year(now())-birth between 18 and 22;
    select * from student where year(now())-birth between 18 and 22;


# 5.	查询student表中查询男、女各有多少人:
    select sex 性别, count(sex) 人数 from student group by sex;

# 6.	查询student表中查询男、女各有多少人，并按照降序排列:
    select sex 性别, count(sex) 人数 from student group by sex order by count(sex) desc;

# 7.	从student表中查询某系别总人数大于1的系名和数量:
    select department 系别 , count(department) 数量 from student group by department having count(department) > 1;

# 8.	从score表中查询每个科目的最高分:
    select c_name 科目 , max(grade) 最高分 from score group by c_name;

# 9.	计算每个学生的总成绩:
    select score.stu_id 学生学号 , student.name 学生姓名 , count(score.c_name) 学生科目数量, sum(score.grade) 学生总分 from student , score
    where student.id = score.stu_id group by stu_id;

# 10.	计算每个考试科目的平均成绩:
    select c_name 科目 , avg(grade) 平均成绩 from score group by c_name;

# 11.	将计算机考试成绩按从高到低排序:
    select stu_id 学生学号 , grade 考试成绩 from score where c_name = '计算机' group by  stu_id,grade order by grade desc;

# 12.	查询score表中stu_id不是902、904、906,且成绩大于80的信息:
    select * from score where stu_id not in(902,904,906) and grade > 80 group by stu_id;

# 13.	从student表中查询姓”王”，并且性别是男同学所在的系:
    select name 姓名 ,sex 性别 , department 院系信息 from student where name like '王%' and sex = '男' group by name;

# 14.	从student表中查询姓”张”，并且是单名的同学的信息:
    select * from student where name like '张_';

# 15.	要求将student表中的数据格式化输出，格式为：xx的家庭住址是xx (使用字符串的函数):
    select concat(name,'的家庭住址是',address) 住址 from student;

# 16.	将student表中名字有“王”的替换为“小王”(使用字符串的函数):
    select replace(name,'王','小王') 姓名 from student;

# 17.	要求查看student表中的姓名的字节数(使用字符串的函数):
    select length(name)  名字所占字节数, name 姓名 from student;

# 18.	查询score表中的查询前3条的数据:
    select * from score limit 0,3;

# 19.	查询score表中查询第4条到第6条的数据:
    select * from score limit 3,3;

# 20.	计算student表中学生的年龄:
    select name 姓名 , year(now())-birth 年龄 from student;





    SELECT LOWER ('HELLO')AS'小写';

#instr返回某一个字符串的字符串索引   如果没有  返回0
SELECT INSTR ('杨过爱上小龙女','小龙女')

#lpad(左填充),repad(右填充)
SELECT LPAD ('于文文',10,'*');
SELECT RPAD ('于文文',10,'*');

#替换replace
 SELECT REPLACE ('我最喜欢的明星是谌纹雯','谌纹雯','徐艺洋') AS 'star'
#数学函数
 #四舍五入  round(数字,小数点后保留几位)  
 
 SELECT ROUND (1.64);
 SELECT ROUND (1.65);
 SELECT ROUND (-1.45);
 SELECT ROUND (1.456,2);
 
 #ceil向上取整
 SELECT CEIL(-1.01);
 SELECT CEIL(1.0000);
 #floor(数字)向下取整
 SELECT FLOOR (-8.2);
 #truncate保留小数后面后几位
 SELECT TRUNCATE(1.2323,1);
 
 #取余
 SELECT MOD(10,3);
 
 #日期函数  
#返回 mysql 所在的电脑的当前时间
SELECT NOW();
#返回当前系统的日期
SELECT CURDATE();
#返回指定的年
SELECT YEAR(NOW())AS'年';
SELECT YEAR(NOW())AS'年';
SELECT MONTH(NOW())AS '月份';
 
 #返回xxx年xxx月xx日
 SELECT DATE_FORMAT(NOW(),'%y年%m月%d日')
 