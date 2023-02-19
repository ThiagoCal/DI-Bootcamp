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
	
-- SELECT * FROM students;
-- SELECT * FROM students ORDER BY last_name ASC LIMIT 4;
-- SELECT * FROM students ORDER BY birth_date DESC LIMIT 1;
-- SELECT * FROM students OFFSET 2;