SELECT name, title
FROM film
INNER JOIN language
ON language.language_id = film.language_id


SELECT name, title, description
FROM film
LEFT JOIN language
ON language.language_id = film.language_id


SELECT name, title, description
FROM film
RIGHT JOIN language
ON language.language_id = film.language_id

SELECT *
FROM language

CREATE TABLE new_film(
	id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL
)

INSERT INTO new_film(name)
VALUES
('Back to the Future'),
('Titanic'),
('Star Wars'),
('Avatar'),
('Citizen Kaine')

SELECT * FROM new_film

CREATE TABLE customer_review(
	review_id SERIAL PRIMARY KEY NOT NULL,
	film_id INTEGER REFERENCES new_film (id) ON DELETE CASCADE ON UPDATE CASCADE,
	language_id INTEGER REFERENCES language (language_id) ON DELETE CASCADE ON UPDATE CASCADE,
	title VARCHAR(100) NOT NULL,
	score SMALLINT CHECK (score BETWEEN 1 AND 10),
	review_text VARCHAR NOT NULL,
	last_update DATE DEFAULT NOW()
)

INSERT INTO customer_review(film_id, language_id, title, score, review_text)
VALUES
('1', '1', 'This is a review n.1', '8', 'Amazing'),
('2', '1', 'This is a review n.2', '4', 'Pretty Bad'),
('3', '1', 'This is a review n.3', '1', 'Worst Ever'),
('5', '1', 'This is a review n.4', '10', 'WOW')

DELETE FROM new_film
WHERE id = 5;

SELECT * FROM customer_review


UPDATE film
SET language_id = 3
WHERE film_id < 100;

UPDATE film
SET language_id = 2
WHERE film_id BETWEEN 80 AND 99;

-- address_id and store_id. It is required to know the id of the store and address_id to insert new data

DROP TABLE customer_review;

-- it was an easy step did not need extra checking
SELECT COUNT(*), rental_rate
FROM rental
WHERE return_date > now()

-- SELECT rental_rate
-- FROM film
-- INNER JOIN 
-- WHERE return_date > now()
-- INNER JOIN film
-- ON language.language_id = film.language_id

