-- CREATE TABLE actors(
--  actor_id SERIAL PRIMARY KEY,
--  first_name VARCHAR (50) NOT NULL,
--  last_name VARCHAR (100) NOT NULL,
--  age DATE NOT NULL,
--  number_oscars SMALLINT NOT NULL
-- )

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Matt','Damon','08/10/1970', 5);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('George','Clooney','06/05/1961', 2);


-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Jenifer','Aniston','11/05/1969', 0);

-- SELECT * FROM actors

-- SELECT first_name, last_name FROM actors WHERE number_oscars > 0;

-- SELECT * FROM actors WHERE last_name LIKE '%mon%';

-- SELECT * FROM actors WHERE last_name LIKE '%damon%';

-- SELECT * FROM actors WHERE last_name ILIKE '%damon%';

-- SELECT * FROM actors WHERE number_oscars > 0 LIMIT 1;

-- SELECT * FROM actors WHERE number_oscars > 0 ORDER BY first_name ASC;

-- ALTER TABLE actors RENAME COLUMN age to birth_date;


-- INSERT INTO actors (first_name, last_name, birth_date, number_oscars)
-- VALUES('Steve','Carel','16/08/1962', 0);

-- INSERT INTO actors (first_name, last_name, birth_date, number_oscars)
-- VALUES('Patrick','Stewart','13/07/1940', 0);

-- INSERT INTO actors (first_name, last_name, birth_date, number_oscars)
-- VALUES('Daniel','Day-Lewis','29/04/1957', 0);

-- SELECT first_name, last_name, AGE(CURRENT_DATE, birth_date) FROM actors ORDER BY age DESC;

-- SELECT * FROM actors WHERE first_name ILIKE '%e%';

-- UPDATE actors SET last_name = 'Carell' WHERE actor_id = 4;

-- UPDATE actors SET number_oscars = 3 WHERE actor_id = 6;

-- SELECT * FROM actors WHERE number_oscars >= 2;


-- INSERT INTO actors (first_name, last_name, birth_date, number_oscars)
-- VALUES
-- ('Sandra','Bullock','26/07/1964', 2),
-- ('Carey','Mulligan','28/05/1985', 1);
-- SELECT * FROM actors