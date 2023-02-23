-- CREATE TABLE customer(
-- 	id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR(100),
-- 	last_name VARCHAR(100) NOT NULL
-- )

-- CREATE TABLE customer_profile(
-- 	profile_id SERIAL PRIMARY KEY,
-- 	isLoggedIn BOOLEAN DEFAULT false,
-- 	customer_id INTEGER UNIQUE REFERENCES customer (id) ON DELETE CASCADE ON UPDATE CASCADE
-- )

-- INSERT INTO customer(first_name, last_name)
-- VALUES ('John', 'Doe'), ('Jerome', 'Lalu'), ('Lea', 'Rive');

-- INSERT INTO customer_profile (isLoggedIn, customer_id)
-- VALUES(true,(SELECT id FROM customer WHERE first_name='John')),
-- (DEFAULT,(SELECT id FROM customer WHERE first_name='Jerome'))

-- SELECT first_name, isLoggedIn
-- FROM customer
-- INNER JOIN customer_profile
-- ON customer.id = customer_profile.customer_id
-- WHERE isLoggedIn = true;


-- SELECT first_name, isLoggedIn
-- FROM customer
-- LEFT JOIN customer_profile
-- ON customer.id = customer_profile.customer_id

-- SELECT COUNT(*)
-- FROM customer_profile
-- WHERE isLoggedIn = false

-- CREATE TABLE book (
-- 	book_id SERIAL PRIMARY KEY,
-- 	title VARCHAR(100) NOT NULL,
-- 	author VARCHAR(100) NOT NULL
-- )

-- INSERT INTO book (title, author)
-- VALUES('Alice in Wonderland', 'Lewis Carroll'),
-- ('Harry Potter', 'J.K.Rowling'),
-- ('To Kill a Mockinbird', 'Harper Lee')
-- RETURNING *;

-- CREATE TABLE student (
-- 	student_id SERIAL PRIMARY KEY,
-- 	name VARCHAR(50) NOT NULL UNIQUE,
-- 	age SMALLINT CHECK (age<=15)
-- )

-- INSERT INTO student (name, age)
-- VALUES('John', 12),
-- ('Lera', 11),
-- ('Patrick', 10),
-- ('Bob',14)

-- CREATE TABLE library (
-- 	book_fk_id INTEGER REFERENCES book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- 	student_fk_id INTEGER REFERENCES STUDENT(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- 	borrowed_date DATE DEFAULT NOW(),
-- 	PRIMARY KEY (book_fk_id, student_fk_id)
-- )


-- INSERT INTO library (book_fk_id, student_fk_id, borrowed_date)
-- VALUES ((SELECT book_id FROM book WHERE title ILIKE '%alice%'),
-- 		(SELECT student_id FROM student WHERE name ='John'), '2022-02-15'),
-- 		((SELECT book_id FROM book WHERE title ILIKE '%kill%'),
-- 		(SELECT student_id FROM student WHERE name ='Bob'), '2021-03-03'),
-- 		((SELECT book_id FROM book WHERE title ILIKE '%alice%'),
-- 		(SELECT student_id FROM student WHERE name ='Lera'), '2021-03-25'),
-- 		((SELECT book_id FROM book WHERE title ILIKE '%harry%'),
-- 		(SELECT student_id FROM student WHERE name ='Bob'), '2021-08-12')

-- SELECT * FROM library;

-- SELECT name, title 
-- FROM library
-- INNER JOIN student ON student.student_id = library.student_fk_id
-- INNER JOIN book ON book.book_id = library.book_fk_id;

-- SELECT ROUND(AVG(age),1)
-- FROM library
-- INNER JOIN student ON student.student_id = library.student_fk_id
-- INNER JOIN book ON book.book_id = library.book_fk_id
-- WHERE title ILIKE '%alice%';

-- DELETE FROM student
-- WHERE name = 'Bob';