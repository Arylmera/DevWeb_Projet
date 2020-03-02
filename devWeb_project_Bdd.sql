CREATE DATABASE  IF NOT EXISTS `devWeb_Project_Bdd` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `devWeb_Project_Bdd`;
-- MySQL dump 10.13  Distrib 8.0.18, for macos10.14 (x86_64)
--
-- Host: localhost    Database: devWeb_Project_Bdd
-- ------------------------------------------------------
-- Server version	8.0.18

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
-- Table structure for table `Caracteristique`
--

DROP TABLE IF EXISTS `Caracteristique`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Caracteristique` (
  `idCaracteristique` int(3) NOT NULL AUTO_INCREMENT,
  `nameCaracteristique` varchar(45) NOT NULL,
  PRIMARY KEY (`idCaracteristique`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Caracteristique`
--

LOCK TABLES `Caracteristique` WRITE;
/*!40000 ALTER TABLE `Caracteristique` DISABLE KEYS */;
INSERT INTO `Caracteristique` VALUES (1,'faune'),(2,'flore'),(3,'autres'),(4,'Oiseaux'),(5,'UCL');
/*!40000 ALTER TABLE `Caracteristique` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `caracteristiquePoint`
--

DROP TABLE IF EXISTS `caracteristiquePoint`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `caracteristiquePoint` (
  `idPointCP` int(5) NOT NULL,
  `idCaracteristiqueCP` int(5) NOT NULL,
  PRIMARY KEY (`idPointCP`,`idCaracteristiqueCP`),
  KEY `CPC_idx` (`idCaracteristiqueCP`),
  CONSTRAINT `CPC` FOREIGN KEY (`idCaracteristiqueCP`) REFERENCES `caracteristique` (`idCaracteristique`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `CPP` FOREIGN KEY (`idPointCP`) REFERENCES `point` (`idPoint`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `caracteristiquePoint`
--

LOCK TABLES `caracteristiquePoint` WRITE;
/*!40000 ALTER TABLE `caracteristiquePoint` DISABLE KEYS */;
INSERT INTO `caracteristiquePoint` VALUES (1,1),(2,2),(4,2),(5,2),(3,3),(1,4),(5,5);
/*!40000 ALTER TABLE `caracteristiquePoint` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Point`
--

DROP TABLE IF EXISTS `Point`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Point` (
  `idPoint` int(5) NOT NULL AUTO_INCREMENT,
  `namePoint` varchar(45) NOT NULL,
  `descriptionPoint` varchar(200) DEFAULT NULL,
  `latitudePoint` int(11) NOT NULL,
  `longitudePoint` int(11) NOT NULL,
  PRIMARY KEY (`idPoint`,`longitudePoint`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Point`
--

LOCK TABLES `Point` WRITE;
/*!40000 ALTER TABLE `Point` DISABLE KEYS */;
INSERT INTO `Point` VALUES (1,'Colibris','Vous pourrez trouver ici de beaux colibris colorés',10,30),(2,'LierreBiéreau','Ce magnifique bosquet est composé d\'espèces de lierres rares.',14,25),(3,'fontaineRivère','Cette époustouflante fontaine naturelle est le résultat de l\'érodation de la pierre.',16,20),(4,'BouleauLAuzelle','Un regroupement de bouleaux centenaires provenant d\'une espèce Russe qui pousse uniquement dans les forêt froides de la Sibérie.',15,22),(5,'SerresUCL','C\'est ici que nos étudiants en plantes apprennent à cultiver tous types de plantes.',17,28);
/*!40000 ALTER TABLE `Point` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'devWeb_Project_Bdd'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-02 19:28:49
