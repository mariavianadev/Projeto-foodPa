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
  `categoria` varchar(45) NOT NULL,
  `foto` VARCHAR(200) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `foodPa`.`reclamacao` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NOT NULL,
  `descricao` VARCHAR(300) NOT NULL,
  `idUsuario` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_reclamacao_usuario_idx` (`idUsuario` ASC),
  CONSTRAINT `fk_reclamacao_usuario`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `foodPa`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

-- Inserir um restaurante com todos os campos especificados
INSERT INTO `foodPa`.`restaurante` (`nome`, `cnpj`, `endereco`, `email`, `senha`, `telefone`)
VALUES ('Restaurante A', '123891234', 'Rua 123, Bairro ABC', 'restauranteA@email.com', 'senhaA', '9874321' );

-- Inserir um restaurante sem especificar a foto e o telefone
INSERT INTO `foodPa`.`restaurante` (`nome`, `cnpj`, `endereco`, `email`, `senha`, `telefone`)
VALUES ('Restaurante B', '987101234', 'Avenida XYZ, Bairro DEF', 'restauranteB@email.com', 'senhaB', 12233313);

-- Inserir um restaurante apenas com os campos obrigatórios
INSERT INTO `foodPa`.`restaurante` (`nome`, `cnpj`, `endereco`, `email`, `senha`, `telefone`)
VALUES ('Restaurante C', '567801234', 'Praça QWE, Bairro GHI', 'restauranteC@email.com', 'senhaC',5435435);

-- Restaurante 1
INSERT INTO `foodPa`.`produto` (`nome`, `valor`, `descricao`, `idRestaurante`)
VALUES
  ('P1R1', 20.0, 'Descrição do Prato 1 Restaurante 1', 1),
  ('P2R1', 25.0, 'Descrição do Prato 2 Restaurante 1', 1);

-- Restaurante 2
INSERT INTO `foodPa`.`produto` (`nome`, `valor`, `descricao`, `idRestaurante`)
VALUES
  ('P1R2', 18.0, 'Descrição do Prato 1 Restaurante 2', 2),
  ('P2R2', 22.0, 'Descrição do Prato 2 Restaurante 2', 2);

-- Restaurante 3
INSERT INTO `foodPa`.`produto` (`nome`, `valor`, `descricao`, `idRestaurante`)
VALUES
  ('P1R3', 15.0,'Descrição do Prato 1 Restaurante 3', 3),
  ('P2R3', 30.0, 'Descrição do Prato 2 Restaurante 3', 3);


-- Insert data into the table
INSERT INTO `foodPa`.`usuario` (`nome`, `email`, `senha`)
VALUES ('Alice Johnson', 'alice@example.com', '123456');

-- Insert another set of data
INSERT INTO `foodPa`.`usuario` (`nome`, `email`, `senha`)
VALUES ('Bob Smith', 'bob@example.com', '456789');

-- Insert one more set of data
INSERT INTO `foodPa`.`usuario` (`nome`, `email`, `senha`)
VALUES ('Eva Davis', 'eva@example.com', '789102');

SELECT * FROM foodPa.produto where nome = nome;
SELECT * FROM foodPa.usuario where nome = nome;
SELECT * FROM foodPa.restaurante where nome = nome;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
