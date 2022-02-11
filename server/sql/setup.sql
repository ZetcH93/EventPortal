--
-- Setup a user, create a database and grant access for the user
-- to the database.
--
-- Create the database 'eventportalen', but only if it does not exists.
CREATE DATABASE IF NOT EXISTS eventportalen;

-- Create the user 'eventportalmaster' with a backward compatible password algorithm
-- and the password 'teamkingshit'
CREATE USER IF NOT EXISTS 'eventportalmaster'@'%'
    IDENTIFIED WITH mysql_native_password
    BY 'teamkingshit'
;

GRANT ALL PRIVILEGES ON eventportalen.* TO 'eventportalmaster'@'%' WITH GRANT OPTION;


-- -----------------------------------------------------
-- Create schema for projoctvaccine
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `eventportalen` DEFAULT CHARACTER SET utf8 ;
USE `eventportalen` ;
