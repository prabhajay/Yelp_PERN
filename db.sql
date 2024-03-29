--psql password prajai86s

--for help \?

--list database \l

--create database CREATE DATABASE database_name;

-- changed database \c database_name

-- create table practice=# CREATE TABLE employee(id INT,name VARCHAR(50));

-- list out database \d

-- list out table fields \d employee

-- ALTER table or add column 
-- ALTER TABLE employee ADD COLUMN address VARCHAR(50);

--List out and display employee table and fields 

-- \d employee
--                    Table "public.employee"
-- Column  |         Type          | Collation | Nullable | Default
---------+-----------------------+-----------+----------+---------
 --id      | integer               |           |          |
 --name    | character varying(50) |           |          |
 --address | character varying(50) |           |          |

-- insert into employee(id,name,address) VALUES(101,'prabha','west st');
--INSERT 0 1

--read the employee table 

--select * from employee;
 --id  |  name  | address
-----+--------+---------
 --101 | prabha | west st
--(1 row)

-- Drop the column fields
--ALTER TABLE employee DROP COLUMN address;
--ALTER TABLE
-- \d employee
--                     Table "public.employee"
 --Column |         Type          | Collation | Nullable | Default
--------+-----------------------+-----------+----------+---------
 --id     | integer               |           |          |
 --name   | character varying(50) |           |          |

 --DROP TABLE 
 --DROP TABLE products;
--DROP TABLE
--\d

--practice=# \c postgres
--You are now connected to database "postgres" as user "postgres".

--DROP DATABASE 
--postgres=# DROP DATABASE practice;
--DROP DATABASE




--CREATE new database
--postgres=# CREATE DATABASE yelp_practice;
--CREATE DATABASE

--changed new database
--postgres=# \c yelp_practice
--You are now connected to database "yelp_practice" as user "postgres".

--create table restaurants
--CREATE TABLE
CREATE TABLE restaurants (id BIGSERIAL NOT NULL,name VARCHAR(50) NOT NULL, location VARCHAR(50) NOT NULL,price_range INT NOT NULL);
--CREATE TABLE

 INSERT INTO restaurants(id,name,location,price_range)VALUES(101,'prabha','west ST',1200);
--INSERT 0 1

select * from restaurants;
 --id  |  name  | location | price_range
-----+--------+----------+-------------
 --101 | prabha | west ST  |        1200
--(1 row)