# 查询语言 DQL

# 数据操作语言 DML

# 插入语句
-- 方式1(给指定字段插入数据): insert into 表名(列1,列2...)values(值1,值2,....)
-- 注意: 插入的值的类型和顺序要与表中的字段一致
SELECT * FROM student;
INSERT INTO student(stu_name, stu_age) VALUES('张三',18);
-- 方式1:插入多条数据
INSERT INTO student(stu_name, stu_age) 
VALUES('张五4',10),('张四',8);
-- 方式2(默认给所有字段插入数据):
INSERT INTO `std` VALUES ('里斯',22);
-- 方式2插入多条数据
INSERT INTO `std` VALUES ('里斯2',22),('里斯3',24);
-- 方式3:
INSERT INTO student SET stu_name='张三1', stu_age=22;

# 修改语句

-- 修改单表记录
-- 语法: update 表名 set 列=新值,列=新值,... where 筛选条件

UPDATE student SET stu_name="丈八",stu_age=20 WHERE stu_id = 0007;
UPDATE student SET stu_name='范志伟',stu_age='22' WHERE stu_id = 0013;


-- 修改多表记录(用的少 根据关系去修改数据)
-- 语法: update 表1 别名 inner/left/right join 表2 别名 on 连接条件 set 列=值,列=值 where 筛选条件

# 删除语句
-- 单表直接删除
-- delete  from 表名 where 条件
DELETE FROM student WHERE stu_age = 8;
DELETE FROM student WHERE stu_age IN (20,18,10);

-- 多表的删除
-- 语法: delete  表1的别名 ,表2的别名  from 表1 别名 inner/left/right join 表2  别名 on 连接条件 where 筛选条件






