# 连接查询
# 语法:
-- select 查询列表
-- from 表1 别名 [连接类型]
-- join 表2 别名 
-- on 连接条件
-- where 筛选条件
-- group by 分组列表
-- having 筛选条件
-- order by 排序列表


# 内连接(等值连接 非等值连接 自连接)
# 语法:
-- select 查询列表
-- from 表1 别名 inner join 表2 别名 
-- on 连接条件
-- where 筛选条件
-- group by 分组列表
-- having 筛选条件
-- order by 排序列表

#案例: 
-- 1.查询员工名、部门名
SELECT last_name,department_name 
FROM employees e INNER
JOIN departments d
ON e.department_id = d.department_id;
-- 2.查询名字中包含e的员工名和工种名
SELECT last_name, job_title 
FROM employees e INNER
JOIN jobs j 
ON e.job_id = j.job_id
WHERE e.last_name LIKE '%e%';
-- 3.查询部门个数>3的城市名和部门个数(添加分组+筛选)
SELECT city, COUNT(*)
FROM locations l INNER
JOIN departments d 
ON l.location_id = d.location_id
GROUP BY city 
HAVING COUNT(*) > 3;

-- 4.查询部门个数>3的城市名和部门个数并按 个数 进行降序
SELECT city, COUNT(*)
FROM locations l INNER
JOIN departments d 
ON l.location_id = d.location_id
GROUP BY city 
HAVING COUNT(*) > 3
ORDER BY COUNT(*) DESC;


-- 5.三表联查(员工名、部门名、工种名、并按照部门名排序)
SELECT last_name,department_name,job_title
FROM employees e 
INNER JOIN departments d
INNER JOIN jobs j
ON e.department_id = d.department_id
AND e.job_id = j.job_id;

-- 6.查询员工的薪资级别
SELECT salary, grade_level
FROM employees e
INNER JOIN job_grades j
ON e.salary BETWEEN lowest_sal AND highest_sal;

-- 7.查询员工的名字和上级的名字
SELECT e.last_name,m.last_name 
FROM employees e
INNER JOIN employees m
ON e.manager_id = m.employee_id;

# 外连接
# 分类: 左外 右外 全外(oracle中才有)
# 语法:
-- select 查询列表
-- from 表1 别名  left outer[right outer]
-- join 表2 别名 
-- on 连接条件
-- where 筛选条件
-- group by 分组列表
-- having 筛选条件
-- order by 排序列表
# 应用场景: 用于查询一个表中有，另外一个表中没有的记录
# 左外连接: left join 左边是主表 以左边进行匹配
# 右外连接: right join 右边是主表 以右边进行匹配

# 案例
-- 1.查询哪个部门没有员工(左外连接)
SELECT d.*,employee_id 
FROM departments d
LEFT OUTER JOIN  employees e
ON d.department_id = e.department_id
WHERE e.employee_id IS NULL;

-- SELECT d.*,employee_id 
-- FROM employees e
-- right OUTER JOIN  departments d
-- ON d.department_id = e.department_id
-- WHERE e.employee_id IS NULL;

-- 如果你想显示的信息在a表中有 在b表中没有 那么a表就是主表
-- 如果你想显示的信息在b表中有 在a表中没有 
-- 如果a也有 b也有 那么就找的是交集部分 就用内连接

-- 2.查询部门名为sal或it的员工信息
SELECT e.*,d.department_name
FROM departments d
LEFT OUTER JOIN employees e
ON d.department_id = e.department_id
WHERE d.department_name IN ('sal', 'it');

# 交叉连接(笛卡尔积)
SELECT last_name,department_name FROM
employees AS e, departments AS d;


# 子查询
# 含义: 出现在其他语句内部的select语句，就是子查询也成为内查询  没有出现在其他语句内部的select语句叫主查询或外查询

# 分类:
-- 按照子查询出现的位置:
-- 1.select后面 只能跟 标量子查询
-- 2.from后面 只能跟表子查询
-- 3.where或having后面 标量、列、行子查询
-- 4.exists(是否存在)后面 表子查询
-- 按照数据结果集不同
-- 结果是一行一列 就是标量子查询(一个单元格就是标量)
-- 结果是一行多列 介绍行子查询(只有一行就是行子查询)
-- 结果是多行一列 就是列子查询(只有一列就是列子查询)
-- 结果是多行多列 就是表子查询(看起来是表就是表子查询)

# 特点:
-- 1.子查询都是要放在小括号里面的
-- 2.子查询执行优于主查询
-- 3.标量子查询 一般搭配单行操作符使用(> < >= <= = <>)
-- 4.子查询一般放在条件右侧

# 案例(标量子查询)
-- 1.谁的工资比Abel高
-- 1.1 查询able的工资是多少
SELECT salary FROM employees WHERE last_name ='Abel';
-- 1.2 查询员工信息，找出满足salay > 1.1的结果
SELECT * FROM employees WHERE salary > 11000
-- 结果:
SELECT * FROM employees WHERE salary > (SELECT salary FROM employees WHERE last_name ='Abel');

-- 2 查询 job_id 与141号员工相同，salary比143号员工多的员工姓名，job_id和工资
-- 2.1 查询141号员工的jobid
SELECT job_id  FROM employees WHERE employee_id = 141;
-- 2.2 查询143号员工的salary
SELECT salary  FROM employees WHERE employee_id = 143;
-- 2.3 查询员工的last_name、job_id =2.1、salary>2.2 
SELECT last_name,job_id,salary FROM employees
WHERE job_id = (SELECT job_id  FROM employees WHERE employee_id = 141) AND
      salary > (SELECT salary  FROM employees WHERE employee_id = 143);
-- 3.返回公司工资最少的员工的last_name，job_id,salary
-- 3.1 查询公司的最低工资
SELECT MIN(salary) FROM employees;
-- 3.2 根据最低工资查询具体的员工信息
SELECT last_name,job_id,salary FROM employees WHERE salary = (SELECT MIN(salary) FROM employees);

-- 4.查询最低工资大于50号部门的最低工资的部门id和最低工资
-- 4.1 查询50号部门的最低工资
SELECT MIN(salary) FROM employees WHERE department_id = 50 ;
-- 4.2 查询每个部门的最低工资
SELECT MIN(salary) FROM employees GROUP BY department_id;
-- 4.3 在4.2的基础上进行筛选
SELECT MIN(salary),department_id FROM employees GROUP BY  department_id HAVING  MIN(salary) > (SELECT MIN(salary) FROM employees WHERE department_id = 50)


# 案例(列子查询)
-- 1.查询location_id是1400或1700的部门中所有的员工姓名
-- 1.1 查询location_id是1400或1700的部门编号
SELECT DISTINCT department_id FROM departments WHERE location_id IN (1400 , 1700);
-- 1.2 查询员工姓名要求部门编号是1.1中某一个
SELECT last_name FROM employees WHERE department_id IN(SELECT DISTINCT department_id FROM departments WHERE location_id IN (1400 , 1700));

-- 2.返回其他工种中‘it_prog’部门任意工资低的员工信息
-- 2.1 获取一下job_id为it_prog的薪资情况
-- (错误)select distinct salary  from employees where job_id = 'it_prog';
SELECT MIN(salary)  FROM employees WHERE job_id = 'it_prog';
-- 2.2 去除掉job_id为it_prog这个部门的薪资
-- (错误)select employee_id,last_name,job_id,salary from employees where salary < any(SELECT DISTINCT salary  FROM employees WHERE job_id = 'it_prog') and job_id <> 'it_prog';
SELECT employee_id,last_name,job_id,salary FROM employees WHERE salary < (SELECT MIN(salary)  FROM employees WHERE job_id = 'it_prog') AND job_id <> 'it_prog';
-- any/some (or) all(and)
SELECT employee_id,last_name,job_id,salary FROM employees WHERE salary < ALL(SELECT DISTINCT salary  FROM employees WHERE job_id = 'it_prog') AND job_id <> 'it_prog';



# 案例(行子查询)
-- 1.查询员工编号最小并且工资最高的员工信息
SELECT * FROM employees WHERE employee_id = (SELECT MIN(employee_id) FROM employees) AND salary = (SELECT MAX(salary) FROM employees);

SELECT MIN(employee_id) FROM employees;
SELECT * FROM employees WHERE employee_id = 100;
SELECT * FROM employees ORDER BY salary DESC;

# select后面的子查询

-- 1.查询员工号=102的部门名
SELECT (SELECT department_name 
FROM departments d
INNER JOIN employees e 
ON d.department_id = e.department_id
WHERE  e.employee_id = 102
);

# from后面的子查询
-- 注意: 表子查询 必须添加别名
-- 2.查询每个部门的平均薪资的薪资等级
-- 2.1 查询每个部门的平均薪资
SELECT AVG(salary),department_id FROM employees GROUP BY department_id;
-- 2.2 查询平均薪资对应的薪资等级
SELECT a.*, g.grade_level
FROM (SELECT AVG(salary) ag,department_id FROM employees GROUP BY department_id) a
INNER JOIN  job_grades g 
ON a.ag BETWEEN g.lowest_sal  AND g.highest_sal; 


# exists子查询
-- 结果: 1 or 0
SELECT EXISTS(SELECT employee_id FROM employees);

-- 案例: 查询有员工的部门名
SELECT department_name FROM departments d
WHERE EXISTS(SELECT * FROM employees e WHERE  e.department_id = d.department_id);