-- Database: Exercises_In_Class

-- DROP DATABASE IF EXISTS "Exercises_In_Class";

-- CREATE DATABASE "Exercises_In_Class"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'Portuguese_Brazil.1252'
--     LC_CTYPE = 'Portuguese_Brazil.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- CREATE TABLE city_info (
-- 	event_datetime timestamp NOT NULL, 
-- 	city VARCHAR(50) NOT NULL, 
-- 	temperature decimal NOT NULL, 
-- 	light decimal NOT NULL, 
-- 	airquality_raw decimal NOT NULL, 
-- 	sound decimal NOT NULL, 
-- 	humidity decimal NOT NULL, 
-- 	dust decimal NOT NULL
-- );


-- COPY city_info(event_datetime, city, temperature, light, airquality_raw, sound, humidity, dust)
-- FROM 'C:\Users\Public\city_info.csv'
-- DELIMITER ','
-- CSV HEADER;

-- SELECT temperature FROM city_info WHERE city = 'Boston' AND event_datetime = '2015-03-01 11:00';

-- SELECT * FROM city_info WHERE city = 'San Francisco' AND temperature BETWEEN 28 AND 30;

-- SELECT * FROM city_info ORDER BY sound DESC LIMIT 1;

-- SELECT * FROM city_info ORDER BY sound ASC LIMIT 1;

-- SELECT dust FROM city_info WHERE city = 'San Francisco' AND EXTRACT(HOUR FROM event_datetime) > 20 AND event_datetime::timestamp::date = '2015-03-26';

-- SELECT * FROM city_info WHERE city = 'Geneva' AND humidity < 40 OR humidity > 60 ;

-- SELECT To_Char(event_datetime, 'Day'), * FROM city_info ORDER BY light DESC LIMIT 1 ;

-- SELECT DISTINCT city FROM city_info WHERE city ILIKE 's%';

-- ,
;

-- SELECT * FROM city_info WHERE city = 'Tel Aviv' ORDER BY event_datetime DESC LIMIT 5;