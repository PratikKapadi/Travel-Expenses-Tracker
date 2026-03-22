-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: travel
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `expenses`
--

DROP TABLE IF EXISTS `expenses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `expenses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `description` text,
  `tripname` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `expenses`
--

LOCK TABLES `expenses` WRITE;
/*!40000 ALTER TABLE `expenses` DISABLE KEYS */;
INSERT INTO `expenses` VALUES (1,'pratik','2023-10-18','Transportation',5000.00,'Train-trip from Mumbai to pune','pune'),(2,'pratik','2023-10-18','To stay',6000.00,'6 nights at the Hotel tip top','pune'),(3,'pratik','2023-10-18','Food',1000.00,'Breakfast, lunch, and dinner for 10 people ','pune'),(4,'pratik','2023-10-18','Transportation',800.00,'Taxi fare from railway station to hotel','pune'),(5,'pratik','2023-10-19','Transportation',600.00,'Bus passes for 6 days','pune'),(6,'pratik','2023-10-19','Activities/Entertainment',550.00,'Admission to the Shanivar wada','pune'),(7,'pratik','2023-10-19','Food',2000.00,'Breakfast at the hotel, lunch at a cafe, and dinner at restaurant','pune'),(8,'pratik','2023-10-20','Activities/Entertainment',3000.00,'Admission to the Palace of Zoo','pune'),(9,'pratik','2023-10-20','Food',2500.00,'Breakfast at the hotel, lunch at a cafe, and dinner at restaurant','pune'),(10,'pratik','2023-10-21','Shopping',5000.00,'Shopping at the Tulshibag','pune'),(11,'pratik','2023-10-21','Activities/Entertainment',400.00,'Seeing a show at the Shreemant Dagdusheth Halwai Ganpat','pune'),(12,'pratik','2023-10-21','Food',2500.00,'Breakfast at the hotel, lunch at a cafe, and dinner at restaurant','pune'),(13,'pratik','2023-10-22','Activities/Entertainment',5000.00,'Admission to the Wet N Joy','pune'),(14,'pratik','2023-10-22','Food',3000.00,'Breakfast at the hotel, lunch at a cafe, and dinner at dhabha','pune'),(15,'pratik','2023-10-23','Food',2000.00,'Breakfast at the hotel, lunch at a cafe, and dinner at restaurant','pune'),(16,'pratik','2023-10-23','Shopping',4000.00,'Shopping at the FC road','pune'),(17,'pratik','2023-10-24','Transportation',800.00,'Taxi fare from hotel to railway station ','pune'),(18,'pratik','2023-10-24','Transportation',6000.00,'Round-trip airfare from pune to Mumbai ','pune'),(19,'pratik','2023-11-10','Transportation',10000.00,'Round-trip flight from Pimpri-Chinchwad to Delhi','Delhi'),(20,'pratik','2023-11-10','Transportation',500.00,'Taxi fare from airport to hotel','Delhi'),(21,'pratik','2023-11-10','To stay',5000.00,'1 night at the Hotel Taj Mahal','Delhi'),(22,'pratik','2023-11-10','Food',1000.00,'Dinner at a restaurant','Delhi'),(23,'pratik','2023-11-11','Activities/Entertainment',1000.00,'Admission to the Red Fort and the Jama Masjid','Delhi'),(24,'pratik','2023-11-11','Food',1500.00,'Breakfast at the hotel, lunch at a cafe, and dinner at a restaurant','Delhi'),(25,'pratik','2023-11-12','Activities/Entertainment',1000.00,'Visit to the Qutub Minar and the Akshardham Temple','Delhi'),(26,'pratik','2023-11-12','Food',1000.00,'Breakfast at the hotel, lunch at a cafe, and dinner at a restaurant','Delhi'),(27,'pratik','2023-11-12','Transportation',500.00,'Taxi fare from hotel to airport','Delhi'),(28,'pratik','2023-11-12','Transportation',10000.00,'Round-trip flight from Delhi to Pimpri-Chinchwad','Delhi'),(29,'swagat','2023-11-13','Transportation',6000.00,'Round-trip flight from Pimpri-Chinchwad to Bengaluru','Bengaluru '),(30,'swagat','2023-11-13','Transportation',500.00,'Taxi fare from airport to hotel','Bengaluru '),(31,'swagat','2023-11-13','To stay',3000.00,'1 night at the Hotel Ibis Bengaluru City Centre','Bengaluru '),(32,'swagat','2023-11-13','Food',1000.00,'Dinner at a restaurant','Bengaluru '),(33,'swagat','2023-11-14','Activities/Entertainment',1000.00,'Admission to the Bangalore Palace and the Lalbagh Botanical Garden','Bengaluru '),(34,'swagat','2023-11-14','Transportation',1500.00,'Breakfast at the hotel, lunch at a cafe, and dinner at a restaurant','Bengaluru '),(35,'swagat','2023-11-14','Transportation',500.00,'Taxi fare from hotel to airport','Bengaluru '),(36,'swagat','2023-11-14','Transportation',6000.00,'Round-trip flight from Bengaluru to Pimpri-Chinchwad','Bengaluru ');
/*!40000 ALTER TABLE `expenses` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-10 20:47:41
