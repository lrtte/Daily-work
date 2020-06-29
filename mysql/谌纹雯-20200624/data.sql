/*
SQLyog Ultimate v8.32 
MySQL - 5.5.49 : Database - day05
*********************************************************************
*/


/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`day05` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `day05`;

/*Table structure for table `customer` */

DROP TABLE IF EXISTS `customer`;

CREATE TABLE `customer` (
  `cid` varchar(50) NOT NULL DEFAULT '',
  `cname` varchar(50) DEFAULT NULL,
  `sex` varchar(2) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `customer` */

insert  into `customer`(`cid`,`cname`,`sex`,`age`) values ('c001','刘二','男',43),('c002','张三','男',28),('c003','李四','女',30),('c004','王五','男',20),('c005','赵六','男',50),('c006','丽丽','女',50);

/*Table structure for table `orderitem` */

DROP TABLE IF EXISTS `orderitem`;

CREATE TABLE `orderitem` (
  `cid` varchar(50) DEFAULT NULL,
  `pid` varchar(50) DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `ordertime` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `orderitem` */

insert  into `orderitem`(`cid`,`pid`,`count`,`ordertime`) values ('c001','p001',5,'2018-04-01 00:00:00'),
('c001','p002',2,'2018-04-07 00:00:00'),('c001','p004',2,'2018-04-07 00:00:00'),('c002','p003',10,'2018-05-01 00:00:00'),
('c002','p005',5,'2018-05-01 00:00:00'),('c003','p004',5,'2018-05-10 00:00:00'),('c004','p001',5,'2018-05-10 00:00:00'),
('c004','p002',2,'2018-05-01 00:00:00'),('c005','p003',10,'2018-05-01 00:00:00');

/*Table structure for table `product` */

DROP TABLE IF EXISTS `product`;

CREATE TABLE `product` (
  `pid` varchar(50) NOT NULL DEFAULT '',
  `pname` varchar(50) DEFAULT NULL,
  `pirce` double DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `product`(

/*Data for the table `product` */

insert  into `product`(`pid`,`pname`,`pirce`,`stock`) values ('p001','计算机',5000,20),('p002','空调',2400,60),
('p003','冰箱',1500,20),('p004','沙发',800,10),('p005','打印机',1100,50);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;





/*student(学号#,姓名,性别,年龄) 
course(课程号#，课程名，教师号#) 
score(学号#，课程号#，成绩) 
teacher(教师号#，教师名)*/  
 
--1.查询“001”课程比“002”课程成绩高的所有学生的学号  
select a.stuNo from score a,score b  
where a.cNo='c001' and b.cNo='c002' and a.stuNo=b.stuNo and a.score>b.score  
--2.查询平均成绩大于60分的同学的学号和平均成绩  
select stuNo,avg(score)from score   
group by stuNo  
having avg(score)>60  
--3.查询所有同学的学号、姓名、选课数、总成绩  
select a.stuNo,a.stuName,count(cNo),sum(score) from student a,score b  
where a.stuNo=b.stuNo  
group by a.stuNo,a.stuName  
--4.查询姓“赵”的老师的个数  
select count(tName),tName from teacher  
where tName like '赵%'  
group by tName   
--5.查询没学过“某某”老师课的同学的学号、姓名  
select stuNo,stuName from student  
where stuNo not in   
(select a.stuNo from student a,score b where a.stuNo=b.stuNo and cNo in   
(select d.cNo from teacher c,course d where c.tNo=d.tNo and c.tName='钱市保'))  
--6.查询学过“001”并且也学过编号“002”课程的同学的学号、姓名；  
select a.stuNo,a.stuName from student a,score b,score c  
where a.stuNo=b.stuNo and b.stuNo=c.stuNo and b.cNo='c001' and c.cNo='c002'   
--7.查询学过“某某”老师所教的所有课的同学的学号、姓名  
select stuNo,stuName from student  
where stuNo in (select stuNo from score a,course b,teacher c  
where a.cNo=b.cNo and b.tNo=c.tNo and c.tName='钱市保'  
group by stuNo               
having count(a.cNo)>=(select count(cNo) from course d,teacher e  
where d.tNo=e.tNo and e.tName='钱市保'))  
--老师所教课程为一门课  
select stuNo,stuName from student  
where stuNo in (select a.stuNo from student a,score b where a.stuNo=b.stuNo and b.cNo in   
(select cNo from teacher c,course d where c.tNo=d.tNo and c.tName='钱市保'))  
--8.查询课程编号“002”的成绩比课程编号“001”课程低的所有同学的学号、姓名  
select stuNo,stuName from student  
where stuNo in   
(select a.stuNo from score a,score b  
where a.cNo='c001' and b.cNo='c002' and a.stuNo=b.stuNo and a.score>b.score)  
--9.查询所有课程成绩小于60分的同学的学号、姓名  
select stuNo,stuName from student   
where stuNo in (select stuNo from score   
where score<60  
group by stuNo   
having count(cNo)=(select count(cNo) from course))  
--10.查询没有学全所有课的同学的学号、姓名  
select b.stuNo,a.stuName,count(b.cNo) from student a,score b  
where a.stuNo=b.stuNo  
group by b.stuNo,a.stuName  
having count(b.cNo)<(select count(cNo) from course)  
--11.查询至少有一门课与学号为“1”的同学所学相同的同学的学号和姓名  
select distinct a.stuNo,stuName from student a,score b  
where a.stuNo=b.stuNo and cNo in (select cNo from score   
where stuNo='001')  
--12.查询至少学过学号为“001”同学一门课的其他同学学号和姓名  
&&& select distinct a.stuNo,stuName from student a,score b  
where a.stuNo=b.stuNo and cNo all join (select cNo from score   
where stuNo='001')  
--13.把“SC”表中“某某”老师教的课的成绩都更改为此课程的平均成绩  
update score set score=savg  
from score d,(select avg(score) as savg,a.cNo from score a,course b,teacher c  
where a.cNo=b.cNo and b.tNo=c.tNo and tName='钱市保'  
group by a.cNo) e  
where d.cNo=e.cNo   
--老师所教课程为一门课  
update score   
set score=(select avg(score) from score  
group by cNo  
having cNo=(select a.cNo from course a,teacher b where a.tNo=b.tNo and b.tName='钱市保'))  
where cNo=(select a.cNo from course a,teacher b where a.tNo=b.tNo and b.tName='钱市保')  
select * from score  
--14.查询和“001”号的同学学习的课程完全相同的其他同学学号和姓名  
select stuNo from score   
where cNo in (select cNo from score where stuNo='005')  
group by stuNo  
having count(cNo)=(select count(*) from score where stuNo='005')  
--15.删除学习“某某”老师课的SC表记录  
delete from score where cNo=(select cNo from course a,teacher b where a.tNo=b.tNo and b.tName='钱市保')  
select * from score   
--16.向SC表中插入一些记录，这些记录要求符合以下条件：没有上过编号“003”课程的同学学号、2号课的平均成绩  
--17.按平均成绩从高到低显示所有学生的“C语言”、“sql”、“java”三门的课程成绩  
--按如下形式显示： 学生ID,C语言,sql,JAVA,有效课程数,有效平均分  
--18.查询各科成绩最高和最低的分：以如下形式显示：课程ID，最高分，最低分  
select  cNo,max(score) as 最高分,min(score) as 最低分 from score  
group by cNo  
--19.按各科平均成绩从低到高和及格率的百分数从高到低顺序  
select avg(c.score),count(a.score)/count(b.score) from score c,(select a.cNo,count(a.score) from score a  
where a.score<60  
group by a.cNo) d,(select b.cNo,count(b.score) from score b  
group by b.cNo) e  
where d.cNo=e.cNo  
group by c.cNo  
order by avg(c.score) desc  
(select a.cNo,count(a.score) from score a  
where a.score<60  
group by a.cNo) d  
(select b.cNo,count(b.score) from score b  
group by b.cNo) e  
--20.查询如下课程平均成绩和及格率的百分数(用"1行"显示): C语言（001），数据结构（002），JAVA（003），离散数学（004）   
--21.查询不同老师所教不同课程平均分从高到低显示   
select tNo,a.cNo,avg(score) from course a,score b  
where a.cNo=b.cNo  
group by tNo,a.cNo  
order by avg(score) desc  
--22.查询如下课程成绩第 3 名到第 6 名的学生成绩单：C语言（001），数据结构（002），JAVA（003），离散数学（004）   
--   [学生ID],[学生姓名],C语言,数据结构,JAVA,离散数学,平均成绩  
--23.统计列印各科成绩,各分数段人数:课程ID,课程名称,[100-85],[85-70],[70-60],[ <60]  
select distinct e.cNo,count(a.stuNo) as '100-85',count(b.stuNo) as '85-70',count(c.stuNo) as '70-60',count(d.stuNo) as '<60' from score a,score b,score c,score d,score e  
where a.cNo in (select cNo from course) and a.score between 85 and 100 and b.cNo in (select cNo from course) and b.score between 71 and 84 and c.cNo in (select cNo from course) and  c.score between 60 and 70 and d.cNo in (select cNo from course) and d.score<60  
group by e.cNo,a.stuNo,b.stuNo,c.stuNo,d.stuNo  
having a.stuNo<>b.stuNo and a.stuNo<>c.stuNo and a.stuNo<>d.stuNo and b.stuNo<>c.stuNo and b.stuNo<>d.stuNo and c.stuNo<>d.stuNo  
select cNo,count(stuNo) from score  
where score between 70 and 100 and cNo='c001'  
group by cNo  
--24.查询学生平均成绩及其名次  
select stuNo,avg(score) from score   
group by stuNo  
order by avg(score) desc  
--25.查询各科成绩前三名的记录:(不考虑成绩并列情况)   
select a.stuNo,a.cNo,a.score  
from score a  
where a.score in (select top 3 score from score b  
where a.cNo=b.cNo  
order by score)  
order by a.cNo  
--26.查询每门课程被选修的学生数   
select b.cNo ,count(stuNo) from score a right join course  b  
on a.cNo=b.cNo  
group by b.cNo  
--27.查询出只选修了一门课程的全部学生的学号和姓名   
select b.stuNo,a.stuName from student a,score b  
where a.stuNo=b.stuNo   
group by b.stuNo,a.stuName  
having count(b.cNo)=1  
--28.查询男生、女生人数  
select stuSex,count(stuSex) from student  
group by stuSex  
--29.查询姓‘zhao’的学生名单  
select * from student   
where stuName like '赵%'  
   
--30.查询同名同性学生名单，并统计同名人数  
select a.stuNo,a.stuName,count(a.stuNo) from student a,student b  
where a.stuName=b.stuName and a.stuSex=b.stuSex and a.stuNo<>b.stuNo  
group by a.stuNo,a.stuName  
   
--31.1981年出生的学生名单(注：Student表中Sage列的类型是datetime  
--32.、查询每门课程的平均成绩，结果按平均成绩升序排列，平均成绩相同时，按课程号降序排列   
select cNo,avg(score) from score  
group by cNo  
order by avg(score) asc,cNo  
--33.查询平均成绩大于70的所有学生的学号、姓名和平均成绩  
select b.stuNo,a.stuName,avg(score) from student a,score b  
where a.stuNo=b.stuNo  
group by b.stuNo,a.stuName  
having avg(score)>70  
--34.查询课程名称为“java”，且分数低于70的学生姓名和分数  
select a.stuName,b.score from student a,score b  
where a.stuNo=b.stuNo and score<70 and b.cNo=(select cNo from course where cName='java')  
--35.查询所有学生的选课情况  
select a.stuNo,c.cNo from student a,score b,course c  
where a.stuNo=b.stuNo and b.cNo=c.cNo  
order by a.stuNo  
select a.stuNo,cNo from student a left join (select a.stuNo,c.cNo from student a,score b,course c  
where a.stuNo=b.stuNo and b.cNo=c.cNo) d  
on a.stuNo=d.stuNo  
order by a.stuNo  
--36.查询任何一门课程成绩在70分以上的姓名、课程名称和分数  
select a.stuName,b.cNo,score from student a,score b  
where score>70 and a.stuNo=b.stuNo  
--37.查询不及格的课程，并按课程号从大到小排列  
select cNo,score from score  
where score<60  
order by cNo  
--38.查询课程编号为003且课程成绩在60分以上的学生的学号和姓名  
select b.stuNo,a.stuName from student a,score b  
where b.cNo='c003' and score>60 and a.stuNo=b.stuNo  
--39.求选了课程的学生人数  
select count(a.stuNo) from (select distinct stuNo from score) a  
--40.查询选修“赵”老师所授课程的学生中，成绩最高的学生姓名及其成绩  
select b.stuNo,a.stuName,max(score) from student a,score b  
where a.stuNo=b.stuNo and b.cNo in (select a.cNo from course a,teacher b where a.tNo=b.tNo and b.tName='钱市保')  
group by b.stuNo,a.stuName,b.cNo  
having b.cNo in (select a.cNo from course a,teacher b where a.tNo=b.tNo and b.tName='钱市保')  
--41.查询各个课程及相应的选修人数  
select cNo,count(stuNo) from score  
group by cNo  
select b.cNo ,count(stuNo) from score a right join course  b  
on a.cNo=b.cNo  
group by b.cNo  
--42.查询不同课程成绩相同的学生的学号、课程号、学生成绩  
select a.stuNo,a.cNo,a.score from score a,score b   
where a.stuNo=b.stuNo and a.score=b.score and a.cNo<>b.cNo   
--43. 查询每门功成绩最好的前两名  
select a.stuNo,a.cNo,a.score  
from score a  
where score in(select top 2 score from score b  
where a.cNo=b.cNo  
order by score desc)  
order by a.cNo  
--44.统计每门课程的学生选修人数（超过2人的课程才统计）。要求输出课程号和选修人数，查询结果按人数降序排列,若人数相同，按课程号升序排列  
select cNo,count(stuNo) 课程数 from score  
group by cNo  
having count(stuNo)>2  
order by count(stuNo) desc,cNo  
--45.检索至少选修两门课程的学生学号  
select stuNo from score  
group by stuNo  
having count(cNo)>=2  
--46.查询全部学生都选修的课程的课程号和课程名  
select a.cNo,b.cName from score a,course b  
where a.cNo=b.cNo  
group by a.cNo,b.cName  
having count(a.stuNo)=(select count(stuNo) from student)  
select a.cNo,b.cName from score a,course b  
group by a.cNo,b.cName,b.cNo  
having a.cNo=b.cNo and count(a.stuNo)=(select count(stuNo) from student)  
--47.查询没学过“钱”老师讲授的任一门课程的学生姓名  
select stuNo,stuName from student  
where stuNo not in (select stuNo from score a,course b,teacher c  
where a.cNo=b.cNo and b.tNo=c.tNo and c.tName='钱市保'  
group by stuNo  
having count(a.cNo)<=(select count(cNo) from course d,teacher e  
where d.tNo=e.tNo and e.tName='钱市保'))  
select stuNo,stuName from student  
where stuNo not in  
(select stuNo from score where cNo in  
(select cNo from teacher c,course d where c.tNo=d.tNo and c.tName='钱市保'))  
--48.查询两门以上不及格课程的同学的学号及其平均成绩  
select stuNo,avg(score) from score  
where score<60  
group by stuNo  
having count(cNo)>2  
--49.检索“004”课程分数小于60，按分数降序排列的同学学号   
select stuNo from score   
where score<60 and cNo='c004'  
order by score desc  
--50.删除“2”同学的“001”课程的成绩  
delete from score where stuNo='002' and cNo='c001'