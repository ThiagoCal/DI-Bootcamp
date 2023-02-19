-- Database: bootcamp

-- DROP DATABASE IF EXISTS bootcamp;

-- CREATE DATABASE bootcamp
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'Portuguese_Brazil.1252'
--     LC_CTYPE = 'Portuguese_Brazil.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- CREATE TABLE students(
-- 	student_id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR (50) NOT NULL,
-- 	last_name VARCHAR (100) NOT NULL,
-- 	birth_date DATE NOT NULL
-- );


-- INSERT INTO students(first_name, last_name, birth_date)
-- VALUES
-- ('Marc', 'Benichou', '02/11/1998'),
-- ('Yoan', 'Cohen', '03/12/2010'),
-- ('Lea', 'Benichou', '27/07/1987'),
-- ('Amelia', 'Dux', '07/04/1996'),
-- ('David', 'Grez', '14/06/2003'),
-- ('Omer', 'Simpson', '03/10/1980');

-- SELECT * FROM students;
-- SELECT first_name, last_name FROM students;
--  SELECT first_name, last_name FROM students WHERE student_id = 2;
--  SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' AND  first_name = 'Marc';
-- SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' OR  first_name = 'Marc';
-- SELECT first_name, last_name FROM students WHERE first_name ILIKE '%a%';
-- SELECT first_name, last_name FROM students WHERE first_name ILIKE 'a%';
-- SELECT first_name, last_name FROM students WHERE first_name ILIKE '%a';
-- SELECT first_name, last_name FROM students WHERE LEFT(RIGHT(first_name, 2), 1) = 'a';
-- SELECT first_name, last_name FROM students WHERE student_id IN (1, 3);
-- SELECT * FROM students WHERE birth_date >= '01/01/2000';