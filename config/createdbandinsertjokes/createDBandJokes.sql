CREATE DATABASE jokesdbv6;

USE jokesdbv6;

CREATE TABLE jokes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  question VARCHAR(255),
  answer VARCHAR(255),
  rating INT
);
