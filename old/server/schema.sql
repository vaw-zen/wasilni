-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema public_transport
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema public_transport
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `public_transport` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `public_transport` ;

-- -----------------------------------------------------
-- Table `public_transport`.`areas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `public_transport`.`areas` (
  `idareas` INT NOT NULL AUTO_INCREMENT,
  `area` VARCHAR(45) NOT NULL,
  `latituede` DECIMAL(7,5) NOT NULL,
  `longitude` DECIMAL(7,5) NOT NULL,
  PRIMARY KEY (`idareas`))
ENGINE = InnoDB
AUTO_INCREMENT = 245
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `public_transport`.`bus`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `public_transport`.`bus` (
  `idbus` INT NOT NULL AUTO_INCREMENT,
  `line_number` VARCHAR(20) NOT NULL,
  `station_number` INT NOT NULL,
  `station_name` VARCHAR(255) NOT NULL,
  `latitude` DECIMAL(7,5) NOT NULL,
  `longitude` DECIMAL(7,5) NOT NULL,
  PRIMARY KEY (`idbus`))
ENGINE = InnoDB
AUTO_INCREMENT = 8942
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `public_transport`.`geolocation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `public_transport`.`geolocation` (
  `idGeolocation` INT NOT NULL AUTO_INCREMENT,
  `station_name` VARCHAR(45) NOT NULL,
  `latitude` DECIMAL(7,5) NOT NULL,
  `longitude` DECIMAL(7,5) NOT NULL,
  `line_number` INT NOT NULL,
  PRIMARY KEY (`idGeolocation`))
ENGINE = InnoDB
AUTO_INCREMENT = 216
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `public_transport`.`train`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `public_transport`.`train` (
  `idtrain` INT NOT NULL AUTO_INCREMENT,
  `line` VARCHAR(45) NOT NULL,
  `departure` VARCHAR(45) NULL DEFAULT NULL,
  `arrival` VARCHAR(45) NULL DEFAULT NULL,
  `stations_number` VARCHAR(100) NULL DEFAULT NULL,
  `itenerary` VARCHAR(50) NULL DEFAULT NULL,
  `latitude` DECIMAL(7,5) NOT NULL,
  `longitude` DECIMAL(7,5) NOT NULL,
  `traject` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idtrain`))
ENGINE = InnoDB
AUTO_INCREMENT = 47
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `public_transport`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `public_transport`.`users` (
  `idfirebase` VARCHAR(100) NOT NULL,
  `user_email` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idfirebase`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `public_transport`.`favourites`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `public_transport`.`favourites` (
  `place_id` INT NOT NULL AUTO_INCREMENT,
  `place_name` VARCHAR(100) NOT NULL,
  `latitude` DECIMAL(7,5) NOT NULL,
  `longitude` DECIMAL(7,5) NOT NULL,
  `users_idfirebase` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`place_id`),
  INDEX `fk_favourites_users_idx` (`users_idfirebase` ASC) VISIBLE,
  CONSTRAINT `fk_favourites_users`
    FOREIGN KEY (`users_idfirebase`)
    REFERENCES `public_transport`.`users` (`idfirebase`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
