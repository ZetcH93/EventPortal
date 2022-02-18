USE eventportalen;


DROP TABLE IF EXISTS `user2permission`;
DROP TABLE IF EXISTS `permission`;
DROP TABLE IF EXISTS `event_attendee`;
DROP TABLE IF EXISTS `membership_applicant`;
DROP TABLE IF EXISTS `user_log`;
DROP TABLE IF EXISTS `payment`;
DROP TABLE IF EXISTS `news`;
DROP TABLE IF EXISTS `event`;
DROP TABLE IF EXISTS `org_applicant`;
DROP TABLE IF EXISTS `membership`;
DROP TABLE IF EXISTS `organization`;
DROP TABLE IF EXISTS `users`;

-- -----------------------------------------------------
-- Table `eventportalen`.`users`
-- -----------------------------------------------------
CREATE TABLE `users`(
	`id` INT NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(32),
    `last_name` VARCHAR(32),
	`email` VARCHAR(32),
    `password` VARCHAR(32),
    `phone_number` INT(32),
    `adress` VARCHAR(32),
    `access_token` VARCHAR(100),
	`eventportal_admin` BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY(`id`),
    UNIQUE(`email`)
    )
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_swedish_ci;

-- -----------------------------------------------------
-- Table `eventportalen`.`organization`
-- -----------------------------------------------------
CREATE TABLE `organization`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `org_nr` VARCHAR(32),
    `name` VARCHAR(32),
    `description` VARCHAR(32),
    `logo` VARCHAR(256), -- image link
    `banner` VARCHAR(256), -- image link
    `colours` VARCHAR(32) NOT NULL DEFAULT "default", -- selected theme
    `membership_fee` INT(32) NOT NULL DEFAULT 0,
    `admin_fee` INT(32) NOT NULL DEFAULT 0,
    PRIMARY KEY(`id`)
    )
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_swedish_ci;

-- -----------------------------------------------------
-- Table `eventportalen`.`membership`
-- -----------------------------------------------------
CREATE TABLE `membership`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `org_id` INT,
    `user_id` INT,
    `date_joined` TIMESTAMP,
    `has_paid` INT,
    `expiry_date` TIMESTAMP,
    PRIMARY KEY(`id`),
    FOREIGN KEY (`org_id`) REFERENCES `organization`(`id`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)
    )
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_swedish_ci;

-- -----------------------------------------------------
-- Table `eventportalen`.`org_applicant`
-- -----------------------------------------------------
CREATE TABLE `org_applicant`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `org_id` INT,
    `user_id` INT,
    `date_applied` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
    `org_name` VARCHAR (32) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`),
    FOREIGN KEY (`org_id`) REFERENCES `organization`(`id`)
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_swedish_ci;

-- -----------------------------------------------------
-- Table `eventportalen`.`event`
-- -----------------------------------------------------
CREATE TABLE `event`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `org_id` INT,
    `event_name` VARCHAR (32) NOT NULL,
    `price` INT NOT NULL DEFAULT 0,
    `description` VARCHAR (255),
    `picture` VARCHAR (256), -- image link
    `start_date` DATETIME,
    `end_date` DATETIME,
    `location` VARCHAR (32),
    `published` BOOLEAN NOT NULL DEFAULT false,
    `visibility` INT NOT NULL DEFAULT 0, -- 0 = members only, 1 = logged in users only, 2 = ALL users
    `deleted` DATETIME,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`org_id`) REFERENCES `organization`(`id`)
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_swedish_ci;

-- -----------------------------------------------------
-- Table `eventportalen`.`news`
-- -----------------------------------------------------
CREATE TABLE `news`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `org_id` INT,
    `news_name` VARCHAR (32),
    `description` VARCHAR (256),
    `picture` VARCHAR (256), -- image link
    `created` TIMESTAMP,
    `author` VARCHAR(64),
    `published` BOOLEAN NOT NULL DEFAULT 0,
    `visibility` INT NOT NULL DEFAULT 0, -- 0 = members only, 1 = logged in users only, 2 = ALL users
    PRIMARY KEY (`id`),
    FOREIGN KEY (`org_id`) REFERENCES `organization`(`id`)
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_swedish_ci;

-- -----------------------------------------------------
-- Table `eventportalen`.`payment`
--
-- org_id Do we need it or can we delete it?
-- -----------------------------------------------------
CREATE TABLE `payment`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `org_id` INT,
    `user_id` INT,
    `event_id` INT,
    `date_paid` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    -- `payment_for` VARCHAR (32) NOT NULL,
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`),
    FOREIGN KEY (`org_id`) REFERENCES `organization`(`id`),
    FOREIGN KEY (`event_id`) REFERENCES `event`(`id`),
    PRIMARY KEY (`id`)
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_swedish_ci;

-- -----------------------------------------------------
-- Table `eventportalen`.`user_log`
-- -----------------------------------------------------
CREATE TABLE `user_log`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `user_id` INT,
    `what` VARCHAR(64),
    `when` TIMESTAMP,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_swedish_ci;

-- -----------------------------------------------------
-- Table `eventportalen`.`membership_applicant`
-- -----------------------------------------------------
CREATE TABLE `membership_applicant`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `user_id` INT,
    `org_id` INT,
    `date_applied` TIMESTAMP,
    PRIMARY KEY(`id`),
    FOREIGN KEY(`user_id`) REFERENCES `users`(`id`)
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_swedish_ci;

-- -----------------------------------------------------
-- Table `eventportalen`.`event_attendee`
-- -----------------------------------------------------
CREATE TABLE `event_attendee`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `user_id` INT,
    `event_id` INT,
    `payment` BOOLEAN,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`),
    FOREIGN KEY (`event_id`) REFERENCES `event`(`id`)
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_swedish_ci;

-- -----------------------------------------------------
-- Table `eventportalen`.`permission`                   
-- -----------------------------------------------------
CREATE TABLE `permission`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(32), 
    `description` VARCHAR(255),
    PRIMARY KEY (`id`)
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_swedish_ci;


 -- -----------------------------------------------------
 -- Table `eventportalen`.`user2permissions`             
 -- -----------------------------------------------------
 CREATE TABLE `user2permission`(
     `id` INT NOT NULL AUTO_INCREMENT,
     `user_id` INT,
     `org_id` INT,
     `permission_id` INT, 
     PRIMARY KEY (`id`),
     FOREIGN KEY (`user_id`) REFERENCES `users`(`id`),
     FOREIGN KEY (`org_id`) REFERENCES `organization`(`id`),
     FOREIGN KEY (`permission_id`) REFERENCES `permission`(`id`)
 )
 ENGINE = InnoDB
 DEFAULT CHARACTER SET = utf8
 COLLATE = utf8_swedish_ci;
