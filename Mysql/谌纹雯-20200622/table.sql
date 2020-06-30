/*
#表的创建
语法:create teble表名(
字段名  字段类型  [约束]
/......
字段名   字段类型  [约束]
#表的创建的需求:创建一个学生信息表(姓名,年龄,性别)
*/

CREATE TABLE sys.t_shen(
id INT ,
stuname VARCHAR(20),
birthday DATETIME,
gender CHAR
);
#查看表结构
DESC t_shen;


#查看表数据

SELECT * FROM sys.t_shen;

#往表中添加数据()


INSERT INTO 
sys.t_shen(id,stuname,birthday,gender) 
VALUE(1,'杨超越','1998-12-20','女')

#修改表名

ALTER TABLE shenwenwen.t_shen RENAME sys.t_shen;

#修改列名
#语法  alter table 表名  change column  旧列名 新列名  类型;
ALTER TABLE  sys.t_shen CHANGE COLUMN gender sexy CHAR;


#修改列的类名
  
ALTER TABLE  sys.t_shen MODIFY COLUMN stuname VARCHAR(30)


#删除表
DROP TABLE sys.t_shen;
