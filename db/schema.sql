CREATE DATABASE burgers_db;
USE burgers_db;


CREATE TABLE burger_data 
(
id INT NOT NULL auto_increment PRIMARY KEY,
burger_name VARCHAR(255),
devoured BOOLEAN
);