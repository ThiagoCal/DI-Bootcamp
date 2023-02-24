-- Write a query to display the names (first_name, last_name) using an alias name “First”, “Last” from the employee table.
SELECT first_name AS First, last_name AS Last FROM employees;

SELECT * FROM employees;
SELECT * FROM jobs;

-- Write a query to get unique departments ID from the employee table (ie. without duplicates).
SELECT DISTINCT department_id
FROM employees;

-- Write a query to get the details of all employees from the employee table, do so in descending order by first name
SELECT * FROM employees ORDER BY first_name DESC;

-- Write a query to get the names (first_name, last_name), salary and 15% of salary as PF (ie. alias) for all the employees.
SELECT first_name, last_name, salary, ROUND(salary/100 * 15, 2) AS PF FROM employees;

-- Write a query to get the employee IDs, names (first_name, last_name) and salary in ascending order according to their salary.
SELECT employee_id, first_name, last_name, salary FROM employees ORDER BY salary ASC;

-- Write a query to get the total sum of all salaries paid to the employees.
SELECT SUM(salary) FROM employees;

SELECT MAX(salary) AS MAX_SALARY, MIN(salary) AS MIN_SALARY FROM employees;

SELECT ROUND(AVG(salary),2) FROM employees;

SELECT COUNT(*) AS number_of_employees FROM employees;

-- Write a query to get all the first names from the employees table in upper case.
SELECT UPPER(first_name) FROM employees;

-- Write a query to get the first three characters of each first name of all the employees in the employees table.
SELECT SUBSTRING( first_name, 1, 3 ) FROM employees;

SELECT first_name, last_name, LENGTH(CONCAT(first_name,' ',last_name)) as FullName FROM employees;

SELECT first_name FROM employees WHERE first_name LIKE '%[0-9]%';

SELECT * FROM jobs LIMIT 10;

SELECT first_name, last_name, salary FROM employees WHERE salary BETWEEN 10000 AND 15000;

SELECT first_name, last_name, hire_date FROM employees WHERE date_part('year', hire_date) = 1987;

SELECT first_name FROM employees WHERE first_name ILIKE '%a%e%' OR first_name ILIKE '%e%a%';

SELECT last_name, job_title, salary 
FROM employees
INNER JOIN jobs
ON employees.job_id = jobs.job_id
WHERE job_title != 'Programmers' AND job_title != 'Shipping Clerks'
AND salary != ALL(ARRAY[4500, 10000, 15000])

SELECT last_name FROM employees
WHERE LENGTH(last_name) != 6


SELECT last_name FROM employees
WHERE SUBSTRING( last_name, 1, 3 )!= 'e';

SELECT employees.*, jobs.job_title FROM employees
INNER JOIN jobs
ON employees.job_id = jobs.job_id

SELECT * FROM employees
WHERE last_name SIMILAR TO '(Jones|Blake|Scott|King|Ford)%'

