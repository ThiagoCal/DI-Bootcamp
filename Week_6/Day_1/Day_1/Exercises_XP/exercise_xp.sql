-- Database: public

-- DROP DATABASE IF EXISTS public;

-- CREATE DATABASE public
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'Portuguese_Brazil.1252'
--     LC_CTYPE = 'Portuguese_Brazil.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- CREATE TABLE products(
-- 	product_id SERIAL PRIMARY KEY,
-- 	product_name VARCHAR (50) NOT NULL,
-- 	product_price SMALLINT NOT NULL
-- );

-- CREATE TABLE customers(
-- 	customer_id SERIAL PRIMARY KEY,
-- 	customer_first_name VARCHAR (50) NOT NULL,
-- 	customer_last_name VARCHAR (100) NOT NULL
-- );


-- INSERT INTO products(product_name, product_price)
-- VALUES
-- ('Small Desk', 100),
-- ('Large Desk', 300),
-- ('Fan', 80);


-- INSERT INTO customers(customer_first_name, customer_last_name)
-- VALUES
-- ('Greg', 'Jones'),
-- ('Sandra', 'Jones'),
-- ('Scott', 'Scott'),
-- ('Trevor', 'Green'),
-- ('Melanie', 'Johson');


-- SELECT * FROM products;
-- SELECT * FROM products WHERE product_price > 80;
-- SELECT * FROM products WHERE product_price <= 300;
-- SELECT * FROM customers WHERE customer_last_name = 'Smith'; returned an empty table
-- SELECT * FROM customers WHERE customer_last_name = 'Jones';
-- SELECT * FROM customers WHERE customer_first_name != 'Scott'