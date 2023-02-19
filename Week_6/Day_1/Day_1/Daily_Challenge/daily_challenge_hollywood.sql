-- Database: hollywood

-- DROP DATABASE IF EXISTS hollywood;

-- CREATE DATABASE hollywood
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'Portuguese_Brazil.1252'
--     LC_CTYPE = 'Portuguese_Brazil.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- SELECT COUNT(*) FROM actors;
-- SELECT * FROM actors;
-- INSERT INTO actors (first_name, last_name, birth_date, number_oscars)
-- VALUES
-- ('', 'Megan', '', ''); ERROR:  invalid input syntax for type date: ""
-- LINE 3: ('', 'Megan', '', '');