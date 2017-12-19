CREATE DATABASE dinosauriosDB;
USE dinosauriosDB;

CREATE TABLE IF NOT EXISTS `dinosaurios` (
  `id` INT(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) COLLATE utf8_unicode_ci NOT NULL,
  `tipo` VARCHAR(50) COLLATE utf8_unicode_ci NOT NULL,
  `tipo_alimento` VARCHAR(50) COLLATE utf8_unicode_ci NOT NULL,
  `region` VARCHAR(50) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `dinosaurios_nombre_unique` (`nombre`)
) ENGINE=InnoDB DEFAULT CHARACTER SET=utf8;

DESCRIBE dinosaurios;
