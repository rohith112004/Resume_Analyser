CREATE DATABASE resume_analyser;

USE resume_analyser;

CREATE TABLE resumes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    skills TEXT,
    score INT,
    filename VARCHAR(255)
);