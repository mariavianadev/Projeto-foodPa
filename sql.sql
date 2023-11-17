DROP DATABASE IF EXISTS	`foodPa`;
-- MySQL Workbench Synchronization
-- Generated: 2023-09-22 07:46
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: emers

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `foodPa` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE IF NOT EXISTS `foodPa`.`usuario` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `foodPa`.`produto` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `valor` DOUBLE NOT NULL,
  `foto` VARCHAR(200),
  `descricao` VARCHAR(60) NULL DEFAULT NULL,
  `idRestaurante` INT(11),
  PRIMARY KEY (`id`),
  INDEX `fk_produto_restaurante1_idx` (`idRestaurante` ASC),
  CONSTRAINT `fk_produto_restaurante1`
    FOREIGN KEY (`idRestaurante`)
    REFERENCES `foodPa`.`restaurante` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `foodPa`.`avaliacao` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nota` CHAR(2) NULL DEFAULT NULL,
  `idProduto` INT(11) NULL DEFAULT NULL,
  `idRestaurante` INT(11) NULL DEFAULT NULL,
  `idUsuario` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_avaliacao_produto1_idx` (`idProduto` ASC),
  INDEX `fk_avaliacao_restaurante1_idx` (`idRestaurante` ASC),
  INDEX `fk_avaliacao_usuario1_idx` (`idUsuario` ASC),
  CONSTRAINT `fk_avaliacao_produto1`
    FOREIGN KEY (`idProduto`)
    REFERENCES `foodPa`.`produto` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_avaliacao_restaurante1`
    FOREIGN KEY (`idRestaurante`)
    REFERENCES `foodPa`.`restaurante` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_avaliacao_usuario1`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `foodPa`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `foodPa`.`restaurante` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `cnpj` CHAR(14) NOT NULL,
  `endereco` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  `telefone` CHAR(11) NULL DEFAULT NULL,
  `foto` VARCHAR(200) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `foodPa`.`reclamacao` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NOT NULL,
  `descricao` VARCHAR(300) NOT NULL,
  `idUsuario` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_reclamacao_usuario_idx` (`idUsuario` ASC),
  CONSTRAINT `fk_reclamacao_usuario`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `foodPa`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;



INSERT INTO foodPa.usuario (nome, email, senha) 
VALUES ("enzo", "enzogmail.com", "1234");
INSERT INTO foodPa.restaurante (nome, cnpj, endereco, email, senha, telefone) 
VALUES ("Pizzaria Dom Pedro", "4321", "Rua Castelo", "dompedrogmail.com","admin","123456");
INSERT INTO foodPa.produto (nome, valor, foto, descricao, idRestaurante) 
VALUES ("Coca", "5", "a","Gelada", 1);

SELECT * FROM foodPa.usuario;
SELECT * FROM foodPa.restaurante where nome = nome;
SELECT * FROM foodPa.produto where nome = nome;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;