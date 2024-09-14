-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: db_grupo_card
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `inscritos_fluxo`
--

DROP TABLE IF EXISTS `inscritos_fluxo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inscritos_fluxo` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `email` varbinary(1000) NOT NULL,
  `numero_contato` varchar(31) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `localizacao` varchar(255) NOT NULL,
  `cpf` varchar(15) NOT NULL,
  `divulgado_por` varchar(255) NOT NULL,
  `assinado_politica_de_privacidade` datetime NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inscritos_fluxo`
--

LOCK TABLES `inscritos_fluxo` WRITE;
/*!40000 ALTER TABLE `inscritos_fluxo` DISABLE KEYS */;
INSERT INTO `inscritos_fluxo` VALUES (1,_binary '²—!\Å\îü~t>z»þ\à3§¢\"|ÐŸüÁ©\áN±J7•','123456789','JoÃ£o Silva','SÃ£o Paulo','12345678901','Admin','2024-09-13 21:48:58','2024-09-14 00:48:57'),(2,_binary '\Î`VjaûNm³Ùƒ;Qºµ\Î1œ\ã?÷£\ã\æ5Gø','987654321','Maria Oliveira','Rio de Janeiro','10987654321','Admin','2024-09-13 21:48:58','2024-09-14 00:48:57'),(3,_binary '¥Á”\æn÷ü¦\Ívš@DÁú	\Ö\Å\ÕÁ?\Â\'n¹\Ã5V','567890123','Carlos Pereira','Belo Horizonte','12345678912','Admin','2024-09-13 21:48:58','2024-09-14 00:48:57'),(5,_binary 'lTv=\ßM¿\n$•b·','11111111111111111111','Teste 1','1111111111111','11111111111111','Outros 111111111','2024-09-13 22:37:06','2024-09-14 01:37:06');
/*!40000 ALTER TABLE `inscritos_fluxo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'db_grupo_card'
--

--
-- Dumping routines for database 'db_grupo_card'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-14  8:51:05
