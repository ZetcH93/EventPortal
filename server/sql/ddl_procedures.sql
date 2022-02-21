USE eventportalen;

-- -----------------------------------------------------
-- procedure `get__ten_events`. Fetches 10 events from current date and one month ahead
-- -----------------------------------------------------
DROP PROCEDURE IF EXISTS `get_ten_events`;
DELIMITER ;;
CREATE PROCEDURE `get_ten_events`(
    a_limit INT
)
BEGIN
SELECT
	e.*,
    o.name AS `org_name`,
    o.logo AS `org_logo`
FROM `event` AS e
	INNER JOIN `organization` AS o
		ON o.id = e.org_id
WHERE `start_date` BETWEEN curdate() AND (SELECT DATE_ADD(curdate(), INTERVAL 30 DAY ))           -- <---- Fungerar detta
GROUP BY e.event_name
LIMIT a_limit;
END
;;
DELIMITER ;


-- (OM iNTE TESTA DENNA )
-- Find events scheduled between one week ago and 3 days from now:
-- select *
-- from events
-- where event_date between (select dateadd(week, -1, getdate())) and (select dateadd(day, +3, getdate()));



-- -----------------------------------------------------
-- procedure `get_all_events`. Fetches all the events in the database
-- -----------------------------------------------------
DROP PROCEDURE IF EXISTS `get_all_events`;
DELIMITER ;;
CREATE PROCEDURE `get_all_events`()
BEGIN
SELECT
	e.*,
    o.name AS `org_name`,
    o.logo AS `org_logo`
FROM `event` AS e
	INNER JOIN `organization` AS o
		ON o.id = e.org_id
GROUP BY e.event_name;
END
;;
DELIMITER ;



-- -----------------------------------------------------
-- procedure `get_one_event`. Fetches one event based on event id
-- -----------------------------------------------------
DROP PROCEDURE IF EXISTS `get_one_event`;
DELIMITER ;;
CREATE PROCEDURE `get_one_event`(
    a_id INT
)
BEGIN
SELECT
	e.*,
    o.name AS `org_name`,
    o.logo AS `org_logo`
FROM `event` AS e
	INNER JOIN `organization` AS o
		ON o.id = e.org_id
WHERE e.id = a_id
GROUP BY e.event_name;
END
;;
DELIMITER ;


-- -----------------------------------------------------
-- procedure `create_event`. Inserts a new event into DB
-- -----------------------------------------------------
DROP PROCEDURE IF EXISTS `create_event`;
DELIMITER ;;
CREATE PROCEDURE `create_event`(
    a_org_id INT(32),
    a_name VARCHAR(32),
    a_price INT(32),
    a_description VARCHAR(32),
    a_picture VARCHAR(256),
    a_start_date TIMESTAMP,
    a_end_date TIMESTAMP,
    a_location VARCHAR(64),
    a_published BOOLEAN,
    a_visibility INT
)
BEGIN
INSERT INTO `event`(
    `org_id`,
    `event_name`,
    `price`,
    `description`,
    `picture`,
    `start_date`,
    `end_date`,
    `location`,
    `published`,
    `visibility`
    ) 
VALUES (a_org_id,
    a_name,
    a_price,
    a_description,
    a_picture,
    a_start_date,
    a_end_date,
    a_location,
    a_published,
    a_visibility);
END
;;
DELIMITER ;


-- -----------------------------------------------------
-- procedure `update_event`. Inserts a new event into DB
-- -----------------------------------------------------
DROP PROCEDURE IF EXISTS `update_event`;
DELIMITER ;;
CREATE PROCEDURE `update_event`(
    a_event_id INT,
    a_org_id INT(32),
    a_name VARCHAR(32),
    a_price INT(32),
    a_description VARCHAR(32),
    a_picture VARCHAR(256),
    a_start_date TIMESTAMP,
    a_end_date TIMESTAMP,
    a_location VARCHAR(64),
    a_published BOOLEAN,
    a_visibility INT
)
BEGIN
UPDATE `event`
    SET `org_id`= a_org_id,
    `event_name`= a_name,
    `price`= a_price,
    `description`= a_description,
    `picture`= a_picture,
    `start_date`= a_start_date,
    `end_date`= a_end_date,
    `location`= a_location,
    `published`= a_published,
    `visibility` = a_visibility
    WHERE id = a_event_id
    ;
END
;;
DELIMITER ;

-- -----------------------------------------------------
-- procedure `delete_event`. Inserts a new event into DB
-- -----------------------------------------------------
DROP PROCEDURE IF EXISTS `delete_event`;
DELIMITER ;;
CREATE PROCEDURE `delete_event`(
    a_event_id INT
)
BEGIN
UPDATE `event`
    SET `deleted`= CURRENT_TIMESTAMP()
    WHERE id = a_event_id;
END
;;
DELIMITER ;

-- -----------------------------------------------------
-- procedure `buy_ticket`. Inserts a new payment into DB
-- -----------------------------------------------------
DROP PROCEDURE IF EXISTS `buy_ticket`;
DELIMITER ;;
CREATE PROCEDURE `buy_ticket`(
    a_org_id INT,
    a_event_id INT,
    a_user_id INT
)
BEGIN
INSERT INTO `payment`(`org_id`, `event_id`, `user_id`)
VALUES(a_org_id, a_event_id, a_user_id);
END
;;
DELIMITER ;

-- -----------------------------------------------------
-- procedure `get_all_organizations`. Fetches all organizations from DB
-- -----------------------------------------------------
DROP PROCEDURE IF EXISTS `get_all_organizations`;
DELIMITER ;;
CREATE PROCEDURE `get_all_organizations`(
)
BEGIN
SELECT
	o.*
FROM `organization` AS o
GROUP BY o.name;
END
;;
DELIMITER ;

-- -----------------------------------------------------
-- procedure `get_one_organization`. Fetches one organization based organization id
-- -----------------------------------------------------
DROP PROCEDURE IF EXISTS `get_one_organization`;
DELIMITER ;;
CREATE PROCEDURE `get_one_organization`(
    `a_id` INT
)
BEGIN
SELECT
	*
FROM `organization` 
WHERE `id` = `a_id`;
END
;;
DELIMITER ;

-- -----------------------------------------------------
-- procedure `create_organization`. Inserts a new organization into DB
-- -----------------------------------------------------
DROP PROCEDURE IF EXISTS `create_organization`;
DELIMITER ;;
CREATE PROCEDURE `create_organization`(
    a_org_nr VARCHAR(32),
    a_name VARCHAR(32),
    a_description VARCHAR(32),
    a_logo VARCHAR(256),
    a_banner VARCHAR(256),
    a_colours VARCHAR(32),
    a_membership_fee INT(32),
    a_admin_fee INT(32)
)
BEGIN
INSERT INTO organization(`org_nr`, `name`, `description`, `logo`, `banner`, `colours`, `membership_fee`, `admin_fee`) 
VALUES (a_org_nr, a_name, a_description, a_logo, a_banner, a_colours, a_membership_fee, a_admin_fee);
END
;;
DELIMITER ;

-- -----------------------------------------------------
-- procedure `login`. Fetches user data from table users based email and password
-- -----------------------------------------------------
DROP PROCEDURE IF EXISTS `login`;
DELIMITER ;;
CREATE PROCEDURE `login`(
    `a_email` VARCHAR(32),
    `a_password` VARCHAR(32)
)
BEGIN
SELECT
	*
FROM `users` 
WHERE `email` = `a_email` AND `password` = `a_password`;
END
;;
DELIMITER ;

-- -----------------------------------------------------
-- procedure `create_account`. Creates a user object in DB
-- -----------------------------------------------------
DROP PROCEDURE IF EXISTS `create_account`;
DELIMITER ;;
CREATE PROCEDURE `create_account`(
    a_first_name VARCHAR(32),
    a_last_name VARCHAR(32),
    a_email VARCHAR(32),
    a_password VARCHAR(32),
    a_phone_number INT(32),
    a_adress VARCHAR(32),
    a_access_token VARCHAR(32)
)
BEGIN
INSERT INTO `users`(
    `first_name`,
    `last_name`,
	`email`,
    `password`,
    `phone_number`,
    `adress`,
    `access_token`
    )
VALUES (
    a_first_name,
    a_last_name,
    a_email,
    a_password,
    a_phone_number,
    a_adress,
    a_access_token
    );
END
;;
DELIMITER ;


-- -----------------------------------------------------
-- procedure `get_user_permissions`. Fetches all permissions from a user in an org  
-- 
-- Check if this actually works
--
-- Want all permissions from a_user_id in a_org_id
--
-- -----------------------------------------------------
DROP PROCEDURE IF EXISTS `get_user_permissions`;
DELIMITER ;;
CREATE PROCEDURE `get_user_permissions`(
    `a_user_id` INT,
    `a_org_id` INT
)
BEGIN
SELECT
    *
    FROM `user2permission` AS u
        INNER JOIN `permission` AS p ON u.permission_id = p.id
    WHERE u.user_id = `a_user_id`
    AND u.org_id = `a_org_id`;
END
;;
DELIMITER ;

-- -----------------------------------------------------
-- procedure `get_org_members`. Fetches all members from an org  
-- -----------------------------------------------------
DROP PROCEDURE IF EXISTS `get_org_members`;
DELIMITER ;;
CREATE PROCEDURE `get_org_members`(
    `a_org_id` INT
)
BEGIN
SELECT
    u.id AS `UserID`,
    u.first_name AS `FirstName`,
    u.last_name AS `LastName`,
    u.email AS `Email`,
    u.phone_number AS `PhoneNumber`,
    u.adress AS `Adress`,
    m.date_joined AS `DateJoined`,
    m.expiry_date AS `ExpireDate`,
    m.has_paid AS `PaymentStatus`   
    FROM `users` AS u
        INNER JOIN `membership` AS m ON u.id = m.user_id
        INNER JOIN `organization` AS o ON o.id = m.org_id
    WHERE o.id = `a_org_id`;
END
;;
DELIMITER ;

-- -----------------------------------------------------
-- procedure `get_one_member`. Fetches one member by id  
-- -----------------------------------------------------
DROP PROCEDURE IF EXISTS `get_one_member`;
DELIMITER ;;
CREATE PROCEDURE `get_one_member`(
    `a_user_id` INT
)
BEGIN
SELECT
    u.id AS `UserID`,
    u.first_name AS `FirstName`,
    u.last_name AS `LastName`,
    u.email AS `Email`,
    u.phone_number AS `PhoneNumber`,
    u.adress AS `Adress`,
    o.name AS `Organization`,
    m.date_joined AS `DateJoined`,
    m.expiry_date AS `ExpireDate`,
    m.has_paid AS `PaymentStatus` 
    FROM `users` AS u
        INNER JOIN `membership` as m ON m.user_id = u.id
        INNER JOIN `organization ` as o ON o.org_id = m.org_id
    WHERE u.id = `a_user_id`;
END
;;
DELIMITER ;


-- -----------------------------------------------------
-- procedure `get_all_news`. Fetches all the news
-- -----------------------------------------------------
DROP PROCEDURE IF EXISTS `get_all_news`;
DELIMITER ;;
CREATE PROCEDURE `get_all_news`()
BEGIN
SELECT * FROM `news`;
END
;;
DELIMITER ;

-- -----------------------------------------------------
-- procedure `get_one_news`. Fetches one news based on id
-- -----------------------------------------------------
DROP PROCEDURE IF EXISTS `get_one_news`;
DELIMITER ;;
CREATE PROCEDURE `get_one_news`(
    a_id INT
)
BEGIN
SELECT * FROM `news` WHERE `id` = a_id;
END
;;
DELIMITER ;

-- -----------------------------------------------------
-- procedure `update_news`. Inserts a new event into DB
-- -----------------------------------------------------

DROP PROCEDURE IF EXISTS `update_news`;
DELIMITER ;;
CREATE PROCEDURE `update_news`(
    a_news_id INT,
    a_news_name VARCHAR(32),
    a_description VARCHAR(256),
    a_picture VARCHAR(256),
    a_author VARCHAR(64),
    a_published BOOLEAN,
    a_visibility INT
)
BEGIN
UPDATE `news`
    SET
    `news_name`= a_news_name,
    `description`= a_description,
    `picture`= a_picture,
    `author`= a_author,
    `published`= a_published,
    `visibility` = a_visibility
    WHERE `id` = a_news_id
    ;
END
;;
DELIMITER ;