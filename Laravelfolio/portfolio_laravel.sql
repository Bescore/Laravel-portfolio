-- MariaDB dump 10.19  Distrib 10.4.28-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: porfolio_laravel
-- ------------------------------------------------------
-- Server version	10.4.28-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `message` varchar(400) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (6,'ssqs','sds@sdsds.fr','sdss','2023-10-29 22:04:31','2023-10-29 22:04:31');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_has_technology`
--

DROP TABLE IF EXISTS `project_has_technology`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project_has_technology` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `project_id` int(11) DEFAULT NULL,
  `technology_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_technology` (`technology_id`),
  KEY `fk_project` (`project_id`),
  CONSTRAINT `fk_project` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`),
  CONSTRAINT `fk_technology` FOREIGN KEY (`technology_id`) REFERENCES `technologies` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_has_technology`
--

LOCK TABLES `project_has_technology` WRITE;
/*!40000 ALTER TABLE `project_has_technology` DISABLE KEYS */;
INSERT INTO `project_has_technology` VALUES (1,1,1),(2,1,2),(3,1,3),(4,1,5),(5,1,7),(6,1,8),(7,1,14),(8,2,1),(9,2,2),(10,2,3),(11,2,4),(12,2,17),(13,2,11),(14,2,5),(15,1,22),(16,1,23),(17,2,23),(18,3,1),(19,3,2),(20,3,3),(21,3,5),(22,3,6),(23,3,7),(24,3,8),(25,3,14),(26,3,23),(27,3,22),(28,2,24),(29,2,25),(30,1,12),(31,3,12),(32,4,1),(33,4,2),(34,4,3),(35,4,23);
/*!40000 ALTER TABLE `project_has_technology` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(50) DEFAULT NULL,
  `lien_video` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `github` varchar(255) DEFAULT NULL,
  `lien_demo` varchar(255) DEFAULT NULL,
  `resume` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES (1,'Projet gestion de parking','RjGqIvF9blU','parking.jpg','https://github.com/Bescore/gestion_parking_J2EE/tree/master/parking_J2EE/src/main',NULL,'J\'ai imaginé une application qui permettrait à chaque client de se garer dans un parking sans passer par un éventuel guichet. Le client s\'inscrit, se connecte, se gare. La somme à payer est calculée en fonction du temps écoulé. Ce projet m\'a permis de mettre en application les compétences acquises lors de ma formation à l\'Afpa de Paris en Java EE. Au programme : sécurité, gestion d\'utilisateurs, protection des champs et regex, tag libs, base de données, programmation orientée objet, MVC, sessions, utilisation des cookies, Servlets, JSP, JDBC, Bcrypt, intégration de l\'API PayPal.'),(2,'Portfolio','','portfolio-img.jpg','https://github.com/Bescore/Laravel-portfolio/tree/main/Laravelfolio',NULL,' Ceci est une première version de mon portfolio  en Laravel. \n\n C\'est tellement jouissif ! Je me suis servi de tout ce que j\'ai pu apprendre lors de ma formation avec O\'clock ( MVC / Routes / API REST ). Avec Laravel on peut presque tout faire. Je n\'ai découvert qu\'une fraction des possiblités. Créer un projet monolithe ou des projets de type single page application est juste une partie de plaisir.\n\nJe dois encore  apprendre, j\'ai l\'impression d\'avoir éffleuré la surface. Ce projet m\'a permis de travailler javascript ( animations etc..), découvrir la librairie WebGL three.js , je suis capable de scanner n\'importe quel objet, en faire un modèle 3D et l\'intégrer sur un site internet. L\'intégration de flux RSS en PHP ci-dessous. L\'intégration d\'un compteur de visites ,  une gestion de base de donnée avec une relation \"many to many\" qui me permet de gérer les \"technologies et outils\" dynamiquement et la récupération, validation de données. En bref je me suis énormément amusé, ne soyez pas surpris !'),(3,'Projet de gestion de factures ','eZhTXINSI_A','factures.png','https://github.com/Bescore/facturation-JEE/tree/master/InvoicesContact/src/main','https://www.invoicescontact.fr','C\'est un projet imaginé pour un éventuel auto-entrepreneur ayant besoin de générer des factures chaque mois pour chacun de ses clients. L\'application fonctionne de la manière suivante : l\'utilisateur se connecte, il doit rentrer les informations de ses clients, il saisit les services qu\'il propose. Il peut ensuite commencer à enregistrer le nombre d\'heures de travail, comme une pointeuse. Les sommes gagnées sont calculées en fonction du temps. Il a la possibilité de générer et d\'imprimer des factures à partir de ces données. La facture est envoyée au client, qui peut régler la somme par Paypal.\n Déploiement Amazon Web Services , cela m\'a permis de comprendre comment déployer une application Java sous AWS, affecter un nom de domaine à mon application.  Les identifiants pour s\'y connecter sont sur mon CV , page Accueil.'),(4,'créateur de groupe / choix aléatoire','oHG8kdXT1Kw','random.jpg','https://github.com/Bescore/Randomizer','https://bescore.github.io/Randomizer/','Un formateur avait l\'habitude de créer des groupes ou de choisir une personne dans la classe à l\'aide d\'un petit programme qu\'il avait lui-même créé car personne ne voulait se désigner. Ce programme fonctionnait dans son navigateur, mais il présentait un problème : il n\'enregistrait rien. À chaque fois, il devait réécrire les noms des personnes concernées. Cela m\'a inspiré, j\'ai essayé de reproduire la même chose en améliorant un peu le concept. Ce projet, entièrement réalisé en JavaScript, m\'a permis de mieux comprendre l\'utilisation des tableaux (arrays), de revoir quelques notions apprises lors de ma formation avec \"O\'clock\" notamment l\'utilisation du \"LocalStorage\". L\'utilisateur peut créer des groupes en fonction du nombre de participants choisi et du nombre de personnes par groupe. Les données sont enregistrées dans le navigateur de manière à pouvoir retrouver les groupes constitués ultérieurement ainsi que le thème (light/dark). J\'ai pris beaucoup de plaisir à réaliser ce projet.'),(5,'sdsdssds',NULL,NULL,'sdsdssdsd',NULL,NULL);
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `technologies`
--

DROP TABLE IF EXISTS `technologies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `technologies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(45) DEFAULT NULL,
  `couleur` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `technologies`
--

LOCK TABLES `technologies` WRITE;
/*!40000 ALTER TABLE `technologies` DISABLE KEYS */;
INSERT INTO `technologies` VALUES (1,'HTML','E34F26'),(2,'CSS','1572B6'),(3,'Javascript','9d8c05'),(4,'PHP','777BB4'),(5,'MySQL','0000FF'),(6,'JAVA','ED8B00'),(7,'JEE','ED8B00'),(8,'JDBC','ED8B00'),(9,'Node.js','6DA55F'),(10,'Vue.js','35495E'),(11,'Figma','F24E1E'),(12,'AnalyseSI','000000'),(13,'Larp',NULL),(14,'AWS','FF9900'),(15,'Wordpress',NULL),(16,'Docker','0DB7ED'),(17,'Laravel','FF2D20'),(18,'Symfony','000000'),(19,'React','4895AC'),(20,'MongoDb','4EA94B'),(21,'Inkscape',NULL),(22,'Eclipse','000000'),(23,'Bootstrap','702CF5'),(24,'Visual S. Code','0066B8'),(25,'Mocodo','000000');
/*!40000 ALTER TABLE `technologies` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-05  1:14:49
