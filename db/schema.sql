DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
    id INT not null auto_increment, 
    burger_name VARCHAR(100) not null,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);