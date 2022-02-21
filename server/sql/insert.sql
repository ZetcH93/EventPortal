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
--membership
--
LOAD DATA LOCAL INFILE 'csv/membership.csv'
INTO TABLE membership
CHARSET utf8
FIELDS
    TERMINATED BY ','
    ENCLOSED BY '"'
LINES
    TERMINATED BY '\n'
IGNORE 1 LINES
;

-- 
--org_applicant
--

LOAD DATA LOCAL INFILE 'csv/org_applicant.csv'
INTO TABLE org_applicant
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

-- 
--news
--

LOAD DATA LOCAL INFILE 'csv/news.csv'
INTO TABLE news
CHARSET utf8
FIELDS
    TERMINATED BY ','
    ENCLOSED BY '"'
LINES
    TERMINATED BY '\n'
IGNORE 1 LINES
;

-- 
--payment
--

LOAD DATA LOCAL INFILE 'csv/payment.csv'
INTO TABLE payment
CHARSET utf8
FIELDS
    TERMINATED BY ','
    ENCLOSED BY '"'
LINES
    TERMINATED BY '\n'
IGNORE 1 LINES
;

-- 
--user_log
--

LOAD DATA LOCAL INFILE 'csv/user_log.csv'
INTO TABLE user_log
CHARSET utf8
FIELDS
    TERMINATED BY ','
    ENCLOSED BY '"'
LINES
    TERMINATED BY '\n'
IGNORE 1 LINES
;

-- 
--membership_applicant
--

LOAD DATA LOCAL INFILE 'csv/membership_applicant.csv'
INTO TABLE membership_applicant
CHARSET utf8
FIELDS
    TERMINATED BY ','
    ENCLOSED BY '"'
LINES
    TERMINATED BY '\n'
IGNORE 1 LINES
;

-- 
--event_attendee
--

LOAD DATA LOCAL INFILE 'csv/event_attendee.csv'
INTO TABLE event_attendee
CHARSET utf8
FIELDS
    TERMINATED BY ','
    ENCLOSED BY '"'
LINES
    TERMINATED BY '\n'
IGNORE 1 LINES
;

-- 
--permission
--

LOAD DATA LOCAL INFILE 'csv/permission.csv'
INTO TABLE permission
CHARSET utf8
FIELDS
    TERMINATED BY ','
    ENCLOSED BY '"'
LINES
    TERMINATED BY '\n'
IGNORE 1 LINES
;

-- 
--user2permission
--
LOAD DATA LOCAL INFILE 'csv/user2permission.csv'
INTO TABLE user2permission
CHARSET utf8
FIELDS
    TERMINATED BY ','
    ENCLOSED BY '"'
LINES
    TERMINATED BY '\n'
IGNORE 1 LINES
;
