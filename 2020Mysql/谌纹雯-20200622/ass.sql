# 条件查询
# 用途
-- 1.一般用在搜索
-- 2.选择一类数据
SELECT * FROM heros;
# 语法
-- select 查询列表 from 表名 where 筛选条件

# 分类
-- 1.按条件表达式查询(条件运算符: > < >= <= !=(不等于, <>) =(等于,在mysql中 安全等于 <=> ) )
-- 2.按逻辑表达式查询(逻辑运算符: not(!) and(&&) or(||))
-- 3.模糊查询(like、between and、in、is null)

# 案例(按条件表达式查询):

-- 1.找出王者荣耀中 hp_max 大于8000的英雄信息
SELECT * FROM heros WHERE hp_max > 8000;
-- 2.找出王者荣耀中 mp_growth 不为0的英雄信息、
SELECT * FROM heros WHERE mp_growth != 0;
SELECT * FROM heros WHERE mp_growth <> 0;
-- 3.找出mp_5s_growth为1.5的英雄名字和职业(role_main);
SELECT `name`,role_main,mp_5s_growth FROM heros WHERE mp_5s_growth =1.5;
# 案例(按逻辑表达式查询):
-- 找出hp_max最大血量在8000-10000之间的英雄信息(名字 职业 最大血量)
SELECT `name`,role_main,hp_max FROM heros WHERE hp_max >8000 && hp_max <10000;
SELECT `name`,role_main,hp_max FROM heros WHERE hp_max >8000 AND hp_max <10000;
SELECT `name`,role_main,hp_max FROM heros WHERE hp_max BETWEEN 8000 AND 10000 ;
-- 找出hp_max最大血量不在8000-10000之间的或者是射手的英雄信息
SELECT * FROM heros WHERE !(hp_max >8000 && hp_max <10000) OR role_main = '射手';
-- 找出最大血量 低于6000的 射手的英雄信息
SELECT * FROM heros WHERE hp_max < 6000 AND `role_main` = '射手';
-- 找出最大血量低于6000 且defense_start < 90的英雄信息
SELECT * FROM heros WHERE hp_max < 6000 AND defense_start < 90;
# 案例(模糊查询(like、between and、in、is null))；
-- % 代表任意多个字符 包含0个字符
-- _ 代表单个字符
-- 找出王者荣耀中 名字中包含 '王'的英雄信息
SELECT * FROM heros WHERE `name` LIKE '%王%';
-- 找出英雄名称中第一个字符为百 第三个字符为守的英雄信息
SELECT * FROM heros WHERE `name` LIKE '百_守%';
-- 找出英雄名称中 第二个字符为_的英雄信息(转义的问题 \)
SELECT * FROM heros WHERE `name` LIKE '_\_%';
-- 找出英雄血量在5000-7000之间的英雄信息(between 小值 and 大值 )
SELECT `name`,role_main,hp_max FROM heros WHERE hp_max BETWEEN 5000 AND 7000;
-- 找出英雄的id为10041 或者 10045 或者 10023的英雄信息
SELECT * FROM heros WHERE id =10041 OR id =10045 OR id =10023;
SELECT * FROM heros WHERE id IN (10041, 10045,10023);
-- 找出生日信息不为null的英雄信息
SELECT * FROM heros WHERE !(birthdate IS NULL) && !(role_assist <=> NULL);
SELECT * FROM heros WHERE NOT(birthdate IS NULL) AND NOT(role_assist IS NULL);
