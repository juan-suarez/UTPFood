-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: utpfood
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(16) NOT NULL,
  `password` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'juan','$2a$10$DZbOS9iecUUS4WvytcUzLu.WemFk7wmeFtU4fNIax3CAAx/BD0xV6'),(2,'juan','$2a$10$V5yAT4ElD4ajUHiUt/w3u.PbxB9urh8qUhjJp518L5hcqQxZ9a1CO'),(3,'adsad','$2a$10$AYBD9z/O3NbmFLyvGBSlRO1EVQOIkDoxtAlmIr2VaZQvaY3IQIY/u'),(4,'asas','$2a$10$gUDln5YRxlxcKqUHaDr3qeXdJfA0V3hkH0PvZZ4.V9irB/AdFzPWu'),(5,'asas','$2a$10$LAeLUDfmuXZh2AeY.c2SD.BQlqnK/vq.d/Iym5sxxj3kyVSAPacsO'),(6,'joe','$2a$10$XW1tc/wK3lkB5dkwFrfAsuSQGYXdp8tA3xaHkOsS2ti9CkWdgr/ai'),(7,'joe','$2a$10$gBGsDoHulpzb16YrxBhuz.ULgGy6SRvI8i0tMsuU60A63Bc/vXcY2'),(8,'hola','$2a$10$ROLpX.AakkwGlxp/Go/YcevJ.hrmxMO4hQQXUnR.Nd7qYZr7jv8F6'),(9,'asdasda','$2a$10$fuEf7FXISZacSxFjwyDUhu31ivPU/aSyxM4aOcfZl4D51NB3WW2.a'),(10,'asda','$2a$10$jT98/gThH78JsqxQB7hy2ODyTzM.w3i15Xi/d4qLb3G7d8HHoQH.u'),(11,'asda','$2a$10$9ysQIu8wtuvMkfnBFJXiC.ami8WIrFPEw2VXzDylhOEI7BVxLz9MO'),(12,'juan','[object Promise]'),(13,'juan','[object Promise]'),(14,'juan','[object Promise]'),(15,'juan','[object Promise]'),(16,'juan','$2a$10$KvSmnr8HQzS6Sw78iEB6oOem55DwN1rHZvx/8GiKdn463S9VPAlI2'),(17,'admin','$2a$10$.t4HZxAqtsfYFohq5ZoqdeeY26Z60rEWSmQvcxpYbA6s.5JvFkuiS'),(18,'manuel','$2a$10$Sx706bod/k4gNHbSQgM0AO69p.B7chUPQ03lJKL9ak4frXcUimJGi'),(19,'random','$2a$10$O3wWgozdy1Y/XxIF5DIyWuks/KjoVks.JhcVKmvB.tWCzwh.woR.u'),(20,'utpfood','$2a$10$EiX6/CvwecptTfZ02Ji3iOdUM2oaPhDO2kNyb1P4UWfp4FgPzCttK');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-24 11:33:32
