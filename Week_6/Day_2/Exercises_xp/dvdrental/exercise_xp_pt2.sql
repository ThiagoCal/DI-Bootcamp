SELECT film_id, title, description, release_year, rental_rate
FROM film
ORDER BY rental_rate ASC;

SELECT address, phone
FROM address
WHERE district ='Texas';

SELECT *
FROM film
WHERE film_id BETWEEN 15 AND 150;

SELECT film_id, title, description , length, rental_rate
FROM film
WHERE title = 'Citizen Shrek'

SELECT film_id, title, description , length, rental_rate
FROM film
 ORDER BY rental_rate ASC LIMIT 10;
 
 SELECT film_id, title, description , length, rental_rate
FROM film
 ORDER BY rental_rate ASC OFFSET 10;

SELECT first_name, last_name, amount, payment_date
FROM customer
INNER JOIN payment
ON payment.customer_id = customer.customer_id
ORDER BY customer.customer_id ASC;

SELECT *
FROM film
LEFT JOIN inventory
ON inventory.film_id = film.film_id
WHERE inventory.film_id IS NULL;

SELECT city,country
FROM city
INNER JOIN country
ON country.country_id = city.country_id
ORDER BY country ASC;
