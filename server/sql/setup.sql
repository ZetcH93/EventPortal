DROP DATABASE IF EXISTS eventportalen;
-- start by dropping the database
-- Create a database
-- Drop user if exists. 
-- Create a user and grant all access to the user
--
-- Create the database 'eventportalen', but only if it does not exists.
CREATE DATABASE IF NOT EXISTS eventportalen;

USE eventportalen;

DROP USER IF EXISTS 'eventportalmaster';

-- Create the user 'eventportalmaster' with a backward compatible password algorithm
-- and the password 'teamkingshit'
CREATE USER IF NOT EXISTS 'eventportalmaster'@'%'
    IDENTIFIED WITH mysql_native_password
    BY 'teamkingshit'
;

GRANT ALL PRIVILEGES ON eventportalen.* TO 'eventportalmaster'@'%';

SET
    GLOBAL local_infile = 1;
