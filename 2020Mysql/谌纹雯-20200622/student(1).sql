/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : jialala

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2020-06-23 17:34:22
*/

-- SET FOREIGN_KEY_CHECKS=0;

-- -- ----------------------------
-- -- Table structure for student
-- -- ----------------------------
-- DROP TABLE IF EXISTS `student`;
-- CREATE TABLE `student` (
--   `SID` int(2) NOT NULL AUTO_INCREMENT,
--   `Sname` varchar(10) NOT NULL,
--   `Sage` datetime NOT NULL,
--   `Ssex` enum('男','女') NOT NULL COMMENT '性别',
--   PRIMARY KEY (`SID`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;




# 创建表
CREATE TABLE test.zp_stuinfo(
id INT,
NAME VARCHAR(20),
chinese FLOAT,
english FLOAT,
math FLOAT
);

# 查看表结构
DESC zp_stuinfo;

# 查看表中所有数据
SELECT * FROM test.zp_stuinfo;

# 往表中添加数据
# 语法： insert into 表名(字段)values(字段值)
INSERT INTO test.zp_stuinfo(id,NAME,chinese,english,math) VALUES(1,'张小明',89,78,90);
INSERT INTO test.zp_stuinfo(id,NAME,chinese,english,math) VALUES(2,'李进',67,53,95);
INSERT INTO test.zp_stuinfo(id,NAME,chinese,english,math) VALUES(3,'王五',87,78,77);
INSERT INTO test.zp_stuinfo(id,NAME,chinese,english,math) VALUES(4,'李一',88,98,92);
INSERT INTO test.zp_stuinfo(id,NAME,chinese,english,math) VALUES(5,'李来财',82,84,67);
INSERT INTO test.zp_stuinfo(id,NAME,chinese,english,math) VALUES(6,'张进宝',55,85,45);
INSERT INTO test.zp_stuinfo(id,NAME,chinese,english,math) VALUES(7,'黄蓉',75,65,30); 

# 1.查询表中所有学生的姓名和对应的英语成绩
SELECT NAME,english FROM test.zp_stuinfo;
# 2.过滤表中重复数据（英语成绩）
SELECT DISTINCT english FROM test.zp_stuinfo;
# 3.使用别名表示学生分数
SELECT `name`, `chinese` AS `语文`, `english` AS `英语`, `math` AS `数学` FROM test.zp_stuinfo;
# 4.统计每个学生的总分
SELECT NAME,chinese+english+math FROM test.zp_stuinfo;
# 5.查询姓名为李一的学生成绩
SELECT * FROM test.zp_stuinfo WHERE NAME='李一';
# 6.查询英语成绩大于90分的同学
SELECT * FROM test.zp_stuinfo WHERE english>90;
# 7.查询总分大于200分的所有同学
SELECT * FROM test.zp_stuinfo WHERE chinese+english+math>200;
# 8.查询英语分数在 80－90之间的同学
SELECT * FROM test.zp_stuinfo WHERE english BETWEEN 80 AND 90;
# 9.查询数学分数为89,90,91的同学
SELECT * FROM test.zp_stuinfo WHERE math IN(89,90,91);
# 10.查询所有姓李的学生英语成绩
SELECT * FROM test.zp_stuinfo WHERE NAME LIKE '李%';
# 11.查询数学成绩大于80并且语文成绩大于80的同学
SELECT * FROM test.zp_stuinfo WHERE math>80 AND chinese > 80;
# 12.查询英语成绩大于80或者总分是200的同学
SELECT * FROM test.zp_stuinfo WHERE  english>80 OR chinese+english+math=200;
# 13.对数学成绩排序(降序)后输出
SELECT NAME,math FROM test.zp_stuinfo ORDER BY math DESC;
# 14.对总成绩按从高到低的顺序输出
SELECT NAME 姓名 ,chinese+math+english 总分 FROM test.zp_stuinfo ORDER BY 总分 DESC;
# 15.对姓李的学生总成绩按照从高到低的顺序输出
SELECT NAME 姓名 ,chinese+math+english 总分 FROM test.zp_stuinfo