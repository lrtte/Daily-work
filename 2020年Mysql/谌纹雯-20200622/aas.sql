# 创建表格结构
INSERT INTO lhy_student(SID,Sname,Sage,Ssex) VALUES
# 添加数据
(01,"赵雷","1990-01-01 00:00:00",'男'),
(02,"钱电","1990-12-21 00:00:00",'男'),
(03,"孙风","1990-05-20 00:00:00",'男'),
(04,"李云","1990-08-06 00:00:00",'男'),
(05,"周梅","1991-12-01 00:00:00",'女'),
(06,"吴兰","1992-03-01 00:00:00",'女'),
(07,"郑竹","1989-07-01 00:00:00",'女'),
(08,"王橘","1990-01-20 00:00:00",'女'),
(09,"赵磊","1990-01-01 00:00:00",'男');
# 修改需求： 把sid=01的人名字修改为 “韩梅梅”？
UPDATE lhy_student SET Sname = '韩梅梅' WHERE sid=01;
# 修改需求： 把出生日期在90年之前的，性别全部改为 “男”？
UPDATE lhy_student SET Ssex='男' WHERE Sage<'1990-01-01 00:00:00';
# 删除需求： 把出生日期在90年之前的删除？
DELETE FROM lhy_student WHERE CAST(Sage  AS DATETIME)<'1990-01-01 00:00:00';
# 查询所有学生数据
SELECT * FROM lhy_student;
# 查询学生性别，且使用distinct去重
SELECT DISTINCT Ssex FROM lhy_student;
# 查询出在1990年之后的出生的学生？
SELECT * FROM lhy_student WHERE Sage>'1990';
# 查询出在1990年之后的出生且性别为男的学生？
SELECT * FROM lhy_student WHERE Sage>'1990' AND Ssex='男';
# 查询出在1990年之后的出生或性别为男的学生？
SELECT * FROM lhy_student WHERE  Sage>'1990' OR Ssex='男'
# 查询出在1990年之后的出生且性别为男的学生，并根据出生日期从小到大显示？
SELECT  *FROM  lhy_student WHERE  Ssex='男' ORDER BY Sage;
# 查询学生总数量？

# 统计学生性别为男的学生数量？

# 查询姓赵的学生？
SELECT * FROM lhy_student WHERE Sname LIKE '赵%';
# 查询sid=01、06、03 的学生？ 
SELECT * FROM lhy_student WHERE  SID IN(01,03,06) ;
# 查询出生日期在 90年 到 91年之间的学生？
SELECT * FROM lhy_student WHERE Sage BETWEEN '1990-01-00' AND '1991-01-00';