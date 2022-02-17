--
-- users
--
LOAD DATA LOCAL INFILE 'csv/users.csv'
INTO TABLE users
CHARSET utf8
FIELDS
    TERMINATED BY ','
    ENCLOSED BY '"'
LINES
    TERMINATED BY '\n'
IGNORE 1 LINES
;

--
-- organization
--
LOAD DATA LOCAL INFILE 'csv/organization.csv'
INTO TABLE organization
CHARSET utf8
FIELDS
    TERMINATED BY ','
    ENCLOSED BY '"'
LINES
    TERMINATED BY '\n'
IGNORE 1 LINES
;

--
-- event
--
LOAD DATA LOCAL INFILE 'csv/event.csv'
INTO TABLE event
CHARSET utf8
FIELDS
    TERMINATED BY ','
    ENCLOSED BY '"'
LINES
    TERMINATED BY '\n'
IGNORE 1 LINES
;

