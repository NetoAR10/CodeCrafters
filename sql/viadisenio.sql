-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 08, 2024 at 06:15 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `viadisenio`
--

-- --------------------------------------------------------

--
-- Table structure for table `causan`
--

CREATE TABLE `causan` (
  `IDCausan` int(11) NOT NULL,
  `IDDeuda` int(11) DEFAULT NULL,
  `IDMateria` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `causan`
--

INSERT INTO `causan` (`IDCausan`, `IDDeuda`, `IDMateria`) VALUES
(94, 111, 126),
(154, 767, 55),
(219, 119, 768),
(261, 588, 293),
(280, 550, 605),
(478, 566, 524),
(499, 328, 269),
(535, 572, 483),
(554, 181, 677),
(600, 825, 264),
(702, 675, 526),
(743, 660, 583),
(803, 894, 82),
(856, 617, 327),
(886, 253, 586),
(894, 857, 909),
(903, 882, 693),
(957, 290, 319),
(1001, 449, 300),
(1002, 956, 800),
(1003, 21, 217),
(1004, 76, 513),
(1005, 305, 556),
(1006, 445, 249),
(1007, 529, 749),
(1008, 750, 195),
(1009, 702, 139),
(1010, 596, 991),
(1011, 683, 922),
(1012, 87, 419),
(1013, 885, 554),
(1014, 385, 745),
(1015, 185, 44),
(1016, 48, 954),
(1017, 839, 120),
(1018, 309, 268),
(1019, 175, 866),
(1020, 806, 676),
(1021, 29, 646),
(1022, 412, 224),
(1023, 58, 838),
(1024, 174, 487),
(1025, 787, 778);

-- --------------------------------------------------------

--
-- Table structure for table `cicloescolar`
--

CREATE TABLE `cicloescolar` (
  `IDCiclo` int(11) NOT NULL,
  `Ciclo` varchar(30) DEFAULT NULL,
  `Fecha_Inicio` date DEFAULT NULL,
  `Fecha_Fin` date DEFAULT NULL,
  `Ciclo_activo` tinyint(1) NOT NULL,
  `Precio_credito` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cicloescolar`
--

INSERT INTO `cicloescolar` (`IDCiclo`, `Ciclo`, `Fecha_Inicio`, `Fecha_Fin`, `Ciclo_activo`, `Precio_credito`) VALUES
(1, '2024-1', '2024-01-01', '2024-06-29', 1, 1249),
(2, '2024-2', '2024-06-30', '2024-12-27', 0, 1177),
(3, '2024-3', '2024-12-28', '2025-06-26', 1, 1481),
(4, '2024-4', '2025-06-27', '2025-12-24', 0, 1816),
(5, '2024-5', '2025-12-25', '2026-06-23', 1, 1178),
(6, '2024-6', '2026-06-24', '2026-12-21', 0, 1664),
(7, '2024-7', '2026-12-22', '2027-06-20', 1, 1356),
(8, '2024-8', '2027-06-21', '2027-12-18', 0, 1089),
(9, '2024-9', '2027-12-19', '2028-06-16', 1, 1170),
(10, '2024-10', '2028-06-17', '2028-12-14', 0, 1204),
(11, '2024-11', '2028-12-15', '2029-06-13', 1, 1782),
(12, '2024-12', '2029-06-14', '2029-12-11', 0, 1621),
(13, '2024-13', '2029-12-12', '2030-06-10', 1, 1208),
(14, '2024-14', '2030-06-11', '2030-12-08', 0, 1775),
(15, '2024-15', '2030-12-09', '2031-06-07', 1, 1958),
(16, '2024-16', '2031-06-08', '2031-12-05', 0, 1914),
(17, '2024-17', '2031-12-06', '2032-06-03', 1, 1586),
(18, '2024-18', '2032-06-04', '2032-12-01', 0, 1507),
(19, '2024-19', '2032-12-02', '2033-05-31', 1, 1193),
(20, '2024-20', '2033-06-01', '2033-11-28', 0, 1917),
(21, '2024-21', '2033-11-29', '2034-05-28', 1, 1510),
(22, '2024-22', '2034-05-29', '2034-11-25', 0, 1048),
(23, '2024-23', '2034-11-26', '2035-05-25', 1, 1862),
(24, '2024-24', '2035-05-26', '2035-11-22', 0, 1641),
(25, '2024-25', '2035-11-23', '2036-05-21', 1, 1785);

-- --------------------------------------------------------

--
-- Table structure for table `contiene`
--

CREATE TABLE `contiene` (
  `IDContiene` int(11) NOT NULL,
  `IDRol` int(11) DEFAULT NULL,
  `IDPrivilegio` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contiene`
--

INSERT INTO `contiene` (`IDContiene`, `IDRol`, `IDPrivilegio`) VALUES
(1, 3, 9),
(2, 1, 1),
(3, 4, 9),
(4, 3, 2),
(5, 3, 7),
(6, 2, 3),
(7, 1, 1),
(8, 4, 6),
(9, 4, 7),
(10, 1, 7),
(11, 4, 7),
(12, 3, 1),
(13, 5, 7),
(14, 3, 2),
(15, 4, 3),
(16, 1, 10),
(17, 4, 9),
(18, 1, 8),
(19, 2, 9),
(20, 2, 5),
(21, 3, 7),
(22, 1, 3),
(23, 1, 6),
(24, 1, 2),
(25, 3, 5);

-- --------------------------------------------------------

--
-- Table structure for table `deuda`
--

CREATE TABLE `deuda` (
  `IDDeuda` int(11) NOT NULL,
  `IDUsuario` int(11) DEFAULT NULL,
  `Total_deuda` float DEFAULT NULL,
  `Plan_pago` varchar(50) DEFAULT NULL,
  `Concepto` varchar(50) DEFAULT NULL,
  `Mes` varchar(20) DEFAULT NULL,
  `IDCiclo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `deuda`
--

INSERT INTO `deuda` (`IDDeuda`, `IDUsuario`, `Total_deuda`, `Plan_pago`, `Concepto`, `Mes`, `IDCiclo`) VALUES
(1, 39, 7626.82, 'Mensual', 'Colegiatura', 'Julio', NULL),
(2, 46, 9132.64, 'Bimestral', 'Colegiatura', 'Abril', NULL),
(3, 8, 502.38, 'Bimestral', 'Colegiatura', 'Diciembre', NULL),
(4, 27, 1156.18, 'Trimestral', 'Material', 'Julio', NULL),
(5, 12, 3720.85, 'Mensual', 'Colegiatura', 'Mayo', NULL),
(6, 20, 4669.78, 'Bimestral', 'Inscripción', 'Noviembre', NULL),
(7, 16, 2601.81, 'Mensual', 'Material', 'Diciembre', NULL),
(8, 26, 6074.04, 'Bimestral', 'Inscripción', 'Abril', NULL),
(9, 21, 811.57, 'Bimestral', 'Material', 'Septiembre', NULL),
(10, 7, 5680.25, 'Mensual', 'Material', 'Abril', NULL),
(11, 29, 4305.47, 'Bimestral', 'Colegiatura', 'Octubre', NULL),
(12, 1, 3132.31, 'Trimestral', 'Inscripción', 'Diciembre', NULL),
(13, 19, 7084.32, 'Trimestral', 'Inscripción', 'Diciembre', NULL),
(14, 47, 1503.99, 'Mensual', 'Inscripción', 'Julio', NULL),
(15, 32, 5036.65, 'Trimestral', 'Inscripción', 'Abril', NULL),
(16, 31, 5705.96, 'Trimestral', 'Material', 'Septiembre', NULL),
(17, 39, 8882.99, 'Bimestral', 'Colegiatura', 'Mayo', NULL),
(18, 37, 4729.32, 'Bimestral', 'Colegiatura', 'Julio', NULL),
(19, 33, 8554.31, 'Bimestral', 'Material', 'Junio', NULL),
(20, 31, 5020.48, 'Bimestral', 'Material', 'Junio', NULL),
(21, 41, 5603.88, 'Mensual', 'Inscripción', 'Febrero', NULL),
(22, 28, 8166.53, 'Trimestral', 'Inscripción', 'Mayo', NULL),
(23, 43, 2381.81, 'Mensual', 'Material', 'Marzo', NULL),
(24, 34, 5569.51, 'Mensual', 'Colegiatura', 'Mayo', NULL),
(25, 24, 6616.12, 'Trimestral', 'Colegiatura', 'Julio', NULL),
(26, 200001, 5000, 'Mensual', 'Colegiatura', 'Octubre', NULL),
(27, 200002, 3000, 'Bimestral', 'Inscripción', 'Septiembre', NULL),
(28, 200003, 4500, 'Mensual', 'Material', 'Noviembre', NULL),
(29, 200004, 6000, 'Bimestral', 'Colegiatura', 'Octubre', NULL),
(30, 200005, 2500, 'Mensual', 'Inscripción', 'Noviembre', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `materias`
--

CREATE TABLE `materias` (
  `IDMateria` int(11) NOT NULL,
  `idSEP` varchar(255) DEFAULT NULL,
  `Nombre_mat` varchar(255) DEFAULT NULL,
  `Creditos` decimal(10,2) DEFAULT NULL,
  `Activa` bit(1) DEFAULT NULL,
  `MateriaRequisito` varchar(255) DEFAULT NULL,
  `HorasDocente` decimal(10,2) DEFAULT NULL,
  `HorasIndependientes` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `materias`
--

INSERT INTO `materias` (`IDMateria`, `idSEP`, `Nombre_mat`, `Creditos`, `Activa`, `MateriaRequisito`, `HorasDocente`, `HorasIndependientes`) VALUES
(1, '101-2', 'Fundamentos del Diseño', 6.00, b'0', NULL, 48.00, 48.00),
(2, '102-3', 'Textiles', 6.00, b'0', NULL, 48.00, 48.00),
(3, '103-5', 'Ilustración técnica de la Moda I', 6.00, b'0', NULL, 48.00, 48.00),
(4, '104-5', 'Teoría del Color', 6.00, b'0', NULL, 48.00, 48.00),
(5, '105-4', 'Trazo Plano de Prendas Básicas', 6.00, b'0', NULL, 64.00, 32.00),
(6, '106-6', 'Confección de Prendas Básicas', 6.00, b'0', NULL, 64.00, 32.00),
(7, '107-6', 'Herramientas y Puntadas Básicas', 6.00, b'0', NULL, 64.00, 32.00),
(8, '208-2', 'Historia del Arte', 6.00, b'0', NULL, 48.00, 48.00),
(9, '209-7', 'Ilustración Gráfica Digital', 6.00, b'0', NULL, 48.00, 48.00),
(10, '210-1', 'Conceptos y tendencias de Moda I', 6.00, b'0', NULL, 48.00, 48.00),
(11, '211-5', 'Ilustración técnica de la Moda II', 6.00, b'0', '103-5', 64.00, 32.00),
(12, '212-4', 'Trazo Plano de Prendas Femeninas', 6.00, b'0', NULL, 64.00, 32.00),
(13, '213-6', 'Confección de Prendas Femeninas', 6.00, b'0', NULL, 64.00, 32.00),
(14, '214-6', 'Modelado en Maniquí I', 6.00, b'0', NULL, 64.00, 32.00),
(15, '315-2', 'Historia de la Moda', 6.00, b'0', NULL, 48.00, 48.00),
(16, '316-5', 'Ilustración Técnica de la Moda III', 6.00, b'0', '211-5', 48.00, 48.00),
(17, '317-8', 'Fundamentos de Administración', 6.00, b'0', NULL, 48.00, 48.00),
(18, '318-3', 'Aplicación Textil I', 6.00, b'0', '102-3', 64.00, 32.00),
(19, '319-4', 'Trazo Plano de Prendas Masculinas', 6.00, b'0', NULL, 64.00, 32.00),
(20, '320-6', 'Confección de Prendas Masculinas', 6.00, b'0', NULL, 64.00, 32.00),
(21, '321-6', 'Herramientas Industriales', 6.00, b'0', '107-6', 64.00, 32.00),
(22, '422-3', 'Aplicación Textil II', 6.00, b'0', '318-3', 48.00, 48.00),
(23, '423-8', 'Fundamentos de Mercadotecnia', 6.00, b'0', NULL, 48.00, 48.00),
(24, '424-7', 'Edición Digital de Imagen', 6.00, b'0', NULL, 64.00, 32.00),
(25, '425-1', 'Diseño de Joyería', 6.00, b'0', NULL, 64.00, 32.00),
(26, '426-4', 'Trazo Plano de Prendas Infantiles', 6.00, b'0', NULL, 64.00, 32.00),
(27, '427-6', 'Confección de Prendas Infantiles', 6.00, b'0', NULL, 64.00, 32.00),
(28, '528-1', 'Conceptos y Tendencias de Moda II', 6.00, b'0', '210-1', 48.00, 48.00),
(29, '529-2', 'Análisis de Culturas', 6.00, b'0', NULL, 48.00, 48.00),
(30, '530-4', 'Graduación de Tallas', 6.00, b'0', NULL, 48.00, 48.00),
(31, '531-4', 'Trazo Plano de Lencería y Traje de Baño', 6.00, b'0', NULL, 64.00, 32.00),
(32, '532-6', 'Confección de Lencería y Traje de Baño', 6.00, b'0', NULL, 64.00, 32.00),
(33, '533-8', 'Mercadotecnia de la Moda ', 6.00, b'0', '423-8', 48.00, 48.00),
(34, '634-7', 'Diseño de Moda Asistido por Computadora', 6.00, b'0', NULL, 48.00, 48.00),
(35, '635-1', 'Taller Experimental de Moda', 6.00, b'0', '528-1', 48.00, 48.00),
(36, '636-8', 'Optimización de Punto de Venta', 6.00, b'0', NULL, 64.00, 32.00),
(37, '637-4', 'Trazo Plano de Alta Costura', 6.00, b'0', NULL, 64.00, 32.00),
(38, '638-6', 'Confección de Alta Costura', 6.00, b'0', NULL, 48.00, 48.00),
(39, '639-6', 'Modelado en Maniquí II', 6.00, b'0', '214-6', 48.00, 48.00),
(40, '740-1', 'Portafolio Profesional', 6.00, b'0', NULL, 48.00, 48.00),
(41, '741-1', 'Metodología para el Desarrollo de una Colección', 6.00, b'0', NULL, 48.00, 48.00),
(42, '742-4', 'Trazo Plano de Sastrería para Dama', 6.00, b'0', NULL, 64.00, 32.00),
(43, '743-6', 'Confección de Sastrería para Dama', 6.00, b'0', NULL, 64.00, 32.00),
(44, '744-8', 'Sistemas de Producción', 6.00, b'0', NULL, 48.00, 48.00),
(45, '745-8', 'Imagen Corporativa', 6.00, b'0', NULL, 48.00, 48.00),
(46, '846-8', 'Desarrollo Empresarial', 6.00, b'0', NULL, 32.00, 48.00),
(47, '847-1', 'Coordinación de Eventos de Moda', 6.00, b'0', NULL, 64.00, 64.00),
(48, '848-4', 'Trazo Plano de Sastrería para Caballero', 6.00, b'0', NULL, 64.00, 32.00),
(49, '849-6', 'Confección de Sastrería para Caballero', 6.00, b'0', NULL, 64.00, 32.00),
(50, '850-1', 'Desarrollo de Proyecto Integrador', 12.00, b'0', NULL, 64.00, 128.00),
(51, '101', 'Fundamentos del Diseño', 4.00, b'0', NULL, 36.00, 36.00),
(52, '102', 'Materiales Textiles', 4.00, b'0', NULL, 36.00, 36.00),
(53, '103', 'Teoría del Color', 4.00, b'0', NULL, 36.00, 36.00),
(54, '104', 'Técnicas de Representación', 5.00, b'0', NULL, 54.00, 36.00),
(55, '105', 'Herramientas y Puntadas', 5.00, b'0', NULL, 54.00, 36.00),
(56, '106', 'Patronaje de Prendas Básicas', 4.00, b'0', NULL, 36.00, 36.00),
(57, '107', 'Confección de Prendas Básicas', 9.00, b'0', NULL, 72.00, 72.00),
(58, '208', 'Ilustración Gráfica Digital', 6.00, b'0', NULL, 54.00, 54.00),
(59, '209', 'Conceptos y Tendencias de la Moda I', 4.00, b'0', NULL, 36.00, 36.00),
(60, '210', 'Ilustración Técnica de la Moda I', 4.00, b'0', NULL, 36.00, 36.00),
(61, '211', 'Diseño de Accesorios', 6.00, b'0', NULL, 54.00, 54.00),
(62, '212', 'Patronaje de Prendas Femeninas', 4.00, b'0', '106', 36.00, 36.00),
(63, '213', 'Confección de Prendas Femeninas', 9.00, b'0', '107', 72.00, 72.00),
(64, '314', 'Historia del Arte', 4.00, b'0', NULL, 36.00, 36.00),
(65, '315', 'Ilustración Técnica de la Moda II', 6.00, b'0', '210', 54.00, 54.00),
(66, '316', 'Fundamentos de Administración', 4.00, b'0', NULL, 36.00, 36.00),
(67, '317', 'Herramientas Industriales', 6.00, b'0', NULL, 54.00, 54.00),
(68, '318', 'Patronaje de Prendas Infantiles', 4.00, b'0', '106', 36.00, 36.00),
(69, '319', 'Confección de Prendas Infantiles', 9.00, b'0', '107', 72.00, 72.00),
(70, '420', 'Historia de la Moda', 4.00, b'0', NULL, 36.00, 36.00),
(71, '421', 'Ilustración Técnica de la Moda III', 4.00, b'0', '210', 36.00, 36.00),
(72, '422', 'Taller de Lectura Y Redacción', 6.00, b'0', NULL, 36.00, 72.00),
(73, '423', 'Modelado en Maniquí I', 6.00, b'0', NULL, 54.00, 54.00),
(74, '424', 'Patronaje de Prendas Masculinas', 4.00, b'0', '106', 36.00, 36.00),
(75, '425', 'Confección de Prendas Masculinas', 9.00, b'0', '107', 72.00, 72.00),
(76, '526', 'Aplicación Textil I', 6.00, b'0', '102', 54.00, 54.00),
(77, '527', 'Análisis de Culturas', 4.00, b'0', NULL, 36.00, 36.00),
(78, '528', 'Modelado en Maniquí II', 6.00, b'0', '423', 54.00, 54.00),
(79, '529', 'Conceptos y Tendencias de la Moda II', 4.00, b'0', '209', 36.00, 36.00),
(80, '530', 'Patronaje de Lencería y Traje de Baño', 4.00, b'0', '106', 36.00, 36.00),
(81, '531', 'Confección de Lencería y Traje de Baño', 9.00, b'0', '107', 72.00, 72.00),
(82, '632', 'Edición Digital de Imagen', 6.00, b'0', NULL, 36.00, 72.00),
(83, '633', 'Aplicación Textil II', 4.00, b'0', '102', 36.00, 36.00),
(84, '634', 'Graduación de Tallas', 6.00, b'0', NULL, 54.00, 54.00),
(85, '635', 'Fundamentos de Mercadotecnia', 4.00, b'0', NULL, 36.00, 36.00),
(86, '636', 'Patronaje de Alta Costura', 4.00, b'0', '106', 36.00, 36.00),
(87, '637', 'Confección de Alta Costura', 9.00, b'0', '107', 72.00, 72.00),
(88, '738', 'Taller Experimental de Moda', 6.00, b'0', NULL, 54.00, 54.00),
(89, '739', 'Mercadotecnia de la Moda', 4.00, b'0', NULL, 36.00, 36.00),
(90, '740', 'Comunicación Efectiva', 4.00, b'0', NULL, 36.00, 36.00),
(91, '741', 'Optimización de Punto de Venta', 5.00, b'0', NULL, 36.00, 54.00),
(92, '742', 'Patronaje de Sastrería para Dama', 4.00, b'0', '106', 36.00, 36.00),
(93, '743', 'Confección de Sastrería para Dama', 9.00, b'0', '107', 72.00, 72.00),
(94, '844', 'Sistemas de Producción', 5.00, b'0', NULL, 54.00, 36.00),
(95, '845', 'Diseño de Moda Asistido por Computadora', 7.00, b'0', '106', 54.00, 72.00),
(96, '846', 'Técnicas de Joyería Fina', 6.00, b'0', NULL, 72.00, 36.00),
(97, '847', 'Metodología para el Desarrollo de una Colección', 10.00, b'0', NULL, 54.00, 108.00),
(98, '848', 'Imagen Corporativa', 5.00, b'0', '208', 36.00, 54.00),
(99, '949', 'Portafolio Profesional', 7.00, b'0', '208.632', 54.00, 72.00),
(100, '950', 'Desarrollo Empresarial', 4.00, b'0', '316.635', 36.00, 36.00),
(101, '951', 'Coordinación de Eventos de Moda', 6.00, b'0', NULL, 54.00, 54.00),
(102, '952', 'Ética Profesional', 4.00, b'0', NULL, 36.00, 36.00),
(103, '953', 'Desarrollo de Proyecto Integrador', 11.00, b'0', '635.848', 72.00, 108.00),
(104, '101', 'Introduccion al Diseño y Arquitectura de Interiores', 5.00, b'0', NULL, 36.00, 54.00),
(105, '102', 'Historia del Arte', 4.00, b'0', NULL, 36.00, 36.00),
(106, '103', 'Geometría Descriptiva', 6.00, b'0', NULL, 54.00, 54.00),
(107, '104', 'Teoría del Color', 4.00, b'0', NULL, 36.00, 36.00),
(108, '105', 'Técnicas de Representación', 6.00, b'0', NULL, 54.00, 54.00),
(109, '106', 'Modelos y Maquetas', 6.00, b'0', NULL, 72.00, 36.00),
(110, '107', 'Desarrollo del Pensamiento Creativo', 5.00, b'0', NULL, 54.00, 36.00),
(111, '208', 'Historia de la Arquitectura I', 5.00, b'0', NULL, 36.00, 54.00),
(112, '209', 'Taller de Diseño del Espacio Habitable', 9.00, b'0', '106', 90.00, 54.00),
(113, '210', 'Fundamentos del Diseño', 4.00, b'0', NULL, 36.00, 36.00),
(114, '211', 'Taller de Dibujo Arquitectónico', 5.00, b'0', '103.105', 54.00, 36.00),
(115, '212', 'Ergonomía', 5.00, b'0', NULL, 54.00, 36.00),
(116, '213', 'Metodología del Diseño', 5.00, b'0', NULL, 36.00, 54.00),
(117, '214', 'Taller de Lectura y Redacción', 4.00, b'0', NULL, 36.00, 36.00),
(118, '315', 'Historia de la Arquitectura II', 5.00, b'0', '208', 36.00, 54.00),
(119, '316', 'Teoría del Diseño de Interiores', 4.00, b'0', NULL, 36.00, 36.00),
(120, '317', 'Taller de Diseño de Viviendas Residenciales', 10.00, b'0', NULL, 90.00, 72.00),
(121, '318', 'Ambientación de Planos Arquitectonicos', 6.00, b'0', '211', 54.00, 54.00),
(122, '319', 'Dibujo Arquitectónico Digital', 5.00, b'0', '211', 54.00, 36.00),
(123, '320', 'Materiales Textiles', 4.00, b'0', NULL, 36.00, 36.00),
(124, '421', 'Taller de Diseño de Construcciones Efímeras', 10.00, b'0', NULL, 90.00, 90.00),
(125, '422', 'Materiales Pétreos y Madera', 4.00, b'0', NULL, 36.00, 36.00),
(126, '423', 'Fundamentos de Administración', 5.00, b'0', NULL, 54.00, 36.00),
(127, '424', 'Dibujo y Modelación Digital', 6.00, b'0', '318', 54.00, 54.00),
(128, '425', 'Historia del Mueble', 4.00, b'0', NULL, 36.00, 36.00),
(129, '426', 'Psicología del Espacio', 4.00, b'0', NULL, 36.00, 36.00),
(130, '527', 'Taller de Diseño de Espacios Comerciales', 10.00, b'0', NULL, 90.00, 72.00),
(131, '528', 'Recubrimientos y Acabados', 5.00, b'0', NULL, 36.00, 54.00),
(132, '529', 'Modelación Digital I', 5.00, b'0', NULL, 36.00, 54.00),
(133, '530', 'Instalaciones', 4.00, b'0', NULL, 36.00, 36.00),
(134, '531', 'Modelos y Prototipos de Mobiliario', 6.00, b'0', '422', 72.00, 36.00),
(135, '532', 'Apreciación Estética de la Arquitectura Mexicana', 4.00, b'0', NULL, 36.00, 36.00),
(136, '633', 'Taller de Diseño de Espacios Turísticos', 10.00, b'0', NULL, 90.00, 72.00),
(137, '634', 'Procedimientos de Construcción', 4.00, b'0', '530', 36.00, 36.00),
(138, '635', 'Optimización de Punto de Venta', 4.00, b'0', NULL, 36.00, 36.00),
(139, '636', 'Modelación Digital II', 4.00, b'0', '529', 36.00, 36.00),
(140, '637', 'Modelos y Prototipos de Artículos Decorativos', 7.00, b'0', NULL, 72.00, 54.00),
(141, '638', 'Iluminación y Acústica', 4.00, b'0', NULL, 36.00, 36.00),
(142, '739', 'Diseño de Paisaje', 6.00, b'0', NULL, 54.00, 54.00),
(143, '740', 'Taller de Diseño de Espacios Comunitarios', 11.00, b'0', NULL, 90.00, 90.00),
(144, '741', 'Arquitectura Sustentable', 4.00, b'0', NULL, 36.00, 36.00),
(145, '742', 'Ilustración Gráfica Digital', 4.00, b'0', NULL, 36.00, 36.00),
(146, '743', 'Renderización y Recorridos Virtuales', 5.00, b'0', NULL, 36.00, 54.00),
(147, '744', 'Domótica', 4.00, b'0', NULL, 36.00, 36.00),
(148, '845', 'Costos y Presupuestos', 4.00, b'0', NULL, 36.00, 36.00),
(149, '846', 'Taller de Diseño; Proyecto Integrador', 14.00, b'0', '740', 90.00, 146.00),
(150, '847', 'Imagen Corporativa', 4.00, b'0', '742', 36.00, 36.00),
(151, '848', 'Fundamentos de Mercadotecnia', 5.00, b'0', NULL, 36.00, 54.00),
(152, '849', 'Edición Digital de Imagen', 5.00, b'0', NULL, 54.00, 36.00),
(153, '950', 'Desarrollo Empresarial', 6.00, b'0', '848', 54.00, 54.00),
(154, '951', 'Portafolio Profesional', 6.00, b'0', '849', 54.00, 54.00),
(155, '952', 'Ética Profesional', 4.00, b'0', NULL, 36.00, 36.00),
(156, '953', 'Comunicación Efectiva', 4.00, b'0', NULL, 36.00, 36.00),
(157, '954', 'Desarrollo de Proyecto Integrador', 13.00, b'0', NULL, 72.00, 146.00);

-- --------------------------------------------------------

--
-- Table structure for table `pago`
--

CREATE TABLE `pago` (
  `IDPago` int(11) NOT NULL,
  `IDUsuario` int(11) DEFAULT NULL,
  `IDDeuda` int(11) DEFAULT NULL,
  `Cant_pagada` float DEFAULT NULL,
  `Fecha_de_pago` date DEFAULT NULL,
  `Metodo` varchar(50) DEFAULT NULL,
  `Banco` varchar(30) DEFAULT NULL,
  `Nota` varchar(255) DEFAULT NULL,
  `Prorroga` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pago`
--

INSERT INTO `pago` (`IDPago`, `IDUsuario`, `IDDeuda`, `Cant_pagada`, `Fecha_de_pago`, `Metodo`, `Banco`, `Nota`, `Prorroga`) VALUES
(1, 7, 13, 863.83, '2024-03-09', 'Efectivo', 'Banco A', 'Pago realizado satisfactoriamente', NULL),
(2, 28, 6, 782.83, '2024-03-09', 'Transferencia', 'Banco C', 'Pago realizado satisfactoriamente', NULL),
(3, 14, 19, 230.57, '2024-03-09', 'Efectivo', 'N/A', 'Pago realizado satisfactoriamente', NULL),
(4, 36, 19, 256.85, '2024-03-09', 'Efectivo', 'Banco A', 'Pago realizado satisfactoriamente', NULL),
(5, 46, 25, 336.57, '2024-03-09', 'Transferencia', 'Banco A', 'Pago realizado satisfactoriamente', NULL),
(6, 9, 9, 862.11, '2024-03-09', 'Transferencia', 'Banco A', 'Pago realizado satisfactoriamente', NULL),
(7, 49, 12, 681.27, '2024-03-09', 'Transferencia', 'Banco C', 'Pago realizado satisfactoriamente', NULL),
(8, 25, 25, 756.99, '2024-03-09', 'Efectivo', 'Banco A', 'Pago realizado satisfactoriamente', NULL),
(9, 38, 13, 943.02, '2024-03-09', 'Efectivo', 'Banco C', 'Pago realizado satisfactoriamente', NULL),
(10, 20, 5, 718.49, '2024-03-09', 'Tarjeta de crédito', 'N/A', 'Pago realizado satisfactoriamente', NULL),
(11, 43, 1, 218.17, '2024-03-09', 'Efectivo', 'N/A', 'Pago realizado satisfactoriamente', NULL),
(12, 21, 13, 350.46, '2024-03-09', 'Tarjeta de crédito', 'Banco A', 'Pago realizado satisfactoriamente', NULL),
(13, 47, 6, 821.74, '2024-03-09', 'Tarjeta de crédito', 'Banco B', 'Pago realizado satisfactoriamente', NULL),
(14, 6, 20, 184.98, '2024-03-09', 'Efectivo', 'Banco C', 'Pago realizado satisfactoriamente', NULL),
(15, 15, 3, 330.61, '2024-03-09', 'Efectivo', 'N/A', 'Pago realizado satisfactoriamente', NULL),
(16, 42, 9, 176.34, '2024-03-09', 'Transferencia', 'N/A', 'Pago realizado satisfactoriamente', NULL),
(17, 17, 14, 281.41, '2024-03-09', 'Efectivo', 'Banco B', 'Pago realizado satisfactoriamente', NULL),
(18, 23, 7, 833.51, '2024-03-09', 'Efectivo', 'Banco A', 'Pago realizado satisfactoriamente', NULL),
(19, 49, 14, 181.81, '2024-03-09', 'Transferencia', 'Banco C', 'Pago realizado satisfactoriamente', NULL),
(20, 13, 9, 385.07, '2024-03-09', 'Efectivo', 'Banco B', 'Pago realizado satisfactoriamente', NULL),
(21, 3, 19, 500.07, '2024-03-09', 'Transferencia', 'Banco C', 'Pago realizado satisfactoriamente', NULL),
(22, 30, 15, 269.2, '2024-03-09', 'Efectivo', 'Banco A', 'Pago realizado satisfactoriamente', NULL),
(23, 3, 7, 849.94, '2024-03-09', 'Transferencia', 'Banco B', 'Pago realizado satisfactoriamente', NULL),
(24, 18, 4, 176.41, '2024-03-09', 'Efectivo', 'Banco C', 'Pago realizado satisfactoriamente', NULL),
(25, 12, 2, 713.11, '2024-03-09', 'Efectivo', 'Banco A', 'Pago realizado satisfactoriamente', NULL),
(26, 200001, 101, 5000, '2024-10-05', 'Transferencia', 'Banco Z', 'Pago total colegiatura Octubre', NULL),
(27, 200002, 102, 1500, '2024-09-15', 'Efectivo', 'N/A', 'Abono inscripción Septiembre', NULL),
(28, 200003, 103, 4500, '2024-11-01', 'Tarjeta de crédito', 'Banco Y', 'Pago total material Noviembre', NULL),
(29, 200004, 104, 3000, '2024-10-20', 'Transferencia', 'Banco X', 'Abono colegiatura Octubre', NULL),
(30, 200005, 105, 2500, '2024-11-10', 'Efectivo', 'N/A', 'Pago total inscripción Noviembre', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `pertenece`
--

CREATE TABLE `pertenece` (
  `IDPertenece` int(11) NOT NULL,
  `IDMateria` int(11) DEFAULT NULL,
  `IDCiclo` int(11) DEFAULT NULL,
  `Beca` int(11) DEFAULT NULL,
  `IDUsuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pertenece`
--

INSERT INTO `pertenece` (`IDPertenece`, `IDMateria`, `IDCiclo`, `Beca`, `IDUsuario`) VALUES
(1, 63, 4, 1, NULL),
(2, 86, 1, 1, NULL),
(3, 76, 4, 1, NULL),
(4, 92, 1, 0, NULL),
(5, 88, 4, 1, NULL),
(6, 82, 2, 0, NULL),
(7, 98, 1, 1, NULL),
(8, 34, 7, 1, NULL),
(9, 32, 2, 0, NULL),
(10, 76, 4, 0, NULL),
(11, 44, 3, 0, NULL),
(12, 90, 2, 0, NULL),
(13, 20, 5, 1, NULL),
(14, 70, 6, 1, NULL),
(15, 28, 2, 1, NULL),
(16, 56, 1, 0, NULL),
(17, 89, 6, 1, NULL),
(18, 81, 8, 0, NULL),
(19, 61, 5, 1, NULL),
(20, 85, 7, 0, NULL),
(21, 99, 8, 0, NULL),
(22, 11, 5, 0, NULL),
(23, 82, 8, 0, NULL),
(24, 61, 3, 0, NULL),
(25, 34, 9, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `privilegios`
--

CREATE TABLE `privilegios` (
  `IDPrivilegio` int(11) NOT NULL,
  `Actividades` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `privilegios`
--

INSERT INTO `privilegios` (`IDPrivilegio`, `Actividades`) VALUES
(1, 'Admin'),
(2, 'Alumno'),
(3, 'Lector'),
(4, 'Admin 2'),
(5, 'Alumno 2'),
(6, 'Lector 2'),
(7, 'Admin 3'),
(8, 'Alumno 3'),
(9, 'Lector 3'),
(10, 'Admin 4'),
(11, 'Alumno 4'),
(12, 'Lector 4'),
(13, 'Admin 5'),
(14, 'Alumno 5'),
(15, 'Lector 5'),
(16, 'Admin 6'),
(17, 'Alumno 6'),
(18, 'Lector 6'),
(19, 'Admin 7'),
(20, 'Alumno 7'),
(21, 'Lector 7'),
(22, 'Admin 8'),
(23, 'Alumno 8'),
(24, 'Lector 8'),
(25, 'Admin 9');

-- --------------------------------------------------------

--
-- Table structure for table `rol`
--

CREATE TABLE `rol` (
  `IDRol` int(11) NOT NULL,
  `Tipo_rol` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rol`
--

INSERT INTO `rol` (`IDRol`, `Tipo_rol`) VALUES
(2, 'Alumno'),
(3, 'Lector'),
(26, 'Administrador'),
(27, 'Lector'),
(28, 'Alumno');

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `IDUsuario` int(11) NOT NULL,
  `Nombre` varchar(255) DEFAULT NULL,
  `Matricula` int(11) DEFAULT NULL,
  `Correo_electronico` varchar(255) DEFAULT NULL,
  `Contrasena` varchar(255) DEFAULT NULL,
  `Beca_actual` int(11) DEFAULT NULL,
  `Referencia` int(11) DEFAULT NULL,
  `IDRol` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`IDUsuario`, `Nombre`, `Matricula`, `Correo_electronico`, `Contrasena`, `Beca_actual`, `Referencia`, `IDRol`) VALUES
(1, 'Juan', 123456, 'juan@example.com', 'contraseña123', 0, 0, NULL),
(2, 'María', 234567, 'maria@example.com', 'abc123', 0, 0, NULL),
(3, 'Carlos', 345678, 'carlos@example.com', 'password', 0, 0, NULL),
(4, 'Ana', 456789, 'ana@example.com', 'pass123', 0, 0, NULL),
(5, 'Luis', 567890, 'luis@example.com', 'securepass', 0, 0, NULL),
(6, 'Laura', 678901, 'laura@example.com', 'userpass', 0, 0, NULL),
(7, 'Pedro', 789012, 'pedro@example.com', '123abc', 0, 0, NULL),
(8, 'Sofía', 890123, 'sofia@example.com', 'letmein', 0, 0, NULL),
(9, 'Daniel', 901234, 'daniel@example.com', 'password123', 0, 0, NULL),
(10, 'Alejandra', 123, 'alejandra@example.com', 'abc123', 0, 0, NULL),
(11, 'Javier', 234, 'javier@example.com', 'qwerty', 0, 0, NULL),
(12, 'Paula', 345, 'paula@example.com', 'password', 0, 0, NULL),
(13, 'Roberto', 456, 'roberto@example.com', 'pass123', 0, 0, NULL),
(14, 'Elena', 567, 'elena@example.com', 'securepass', 0, 0, NULL),
(15, 'Marta', 678, 'marta@example.com', 'userpass', 0, 0, NULL),
(16, 'Héctor', 789, 'hector@example.com', '123abc', 0, 0, NULL),
(17, 'Carmen', 890, 'carmen@example.com', 'letmein', 0, 0, NULL),
(18, 'Diego', 901, 'diego@example.com', 'password123', 0, 0, NULL),
(19, 'Ana', 123456789, 'ana2@example.com', 'abc123', 0, 0, NULL),
(20, 'María', 234567890, 'maria2@example.com', 'qwerty', 0, 0, NULL),
(21, 'Carlos', 345678901, 'carlos2@example.com', 'password', 0, 0, NULL),
(22, 'Ana', 456789012, 'ana3@example.com', 'pass123', 0, 0, NULL),
(23, 'Luis', 567890123, 'luis2@example.com', 'securepass', 0, 0, NULL),
(24, 'Laura', 678901234, 'laura2@example.com', 'userpass', 0, 0, NULL),
(25, 'Pedro', 789012345, 'pedro2@example.com', '123abc', 0, 0, NULL),
(26, 'Arturo', 1275427, 'arturo@gmail.com', '$2a$12$medFPjiMnK8DaJK.1eicveqN2e9c3jCCL1EcfwPRn4/ABZpXv6MKS', 0, 0, NULL),
(27, 'ejemplo', 123456789, 'ejemplo@gmail.com', '$2a$12$Jf5YITGVYsV31hG3cyCdWOBJb5AVrTyQp/OhBWYsctRKQJUx5QeR2', 0, 0, NULL),
(28, 'Roberta Espinoza', 200001, 'roberta@example.com', 'contraseñaRoberta', 0, 0, NULL),
(29, 'Miguel Ángel Torres', 200002, 'miguel@example.com', 'contraseñaMiguel', 0, 0, NULL),
(30, 'Samantha Ruiz', 200003, 'samantha@example.com', 'contraseñaSamantha', 0, 0, NULL),
(31, 'Alejandro Mendoza', 200004, 'alejandro@example.com', 'contraseñaAlejandro', 0, 0, NULL),
(32, 'Patricia Solano', 200005, 'patricia@example.com', 'contraseñaPatricia', 0, 0, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `causan`
--
ALTER TABLE `causan`
  ADD PRIMARY KEY (`IDCausan`);

--
-- Indexes for table `cicloescolar`
--
ALTER TABLE `cicloescolar`
  ADD PRIMARY KEY (`IDCiclo`);

--
-- Indexes for table `contiene`
--
ALTER TABLE `contiene`
  ADD PRIMARY KEY (`IDContiene`);

--
-- Indexes for table `deuda`
--
ALTER TABLE `deuda`
  ADD PRIMARY KEY (`IDDeuda`);

--
-- Indexes for table `materias`
--
ALTER TABLE `materias`
  ADD PRIMARY KEY (`IDMateria`);

--
-- Indexes for table `pago`
--
ALTER TABLE `pago`
  ADD PRIMARY KEY (`IDPago`);

--
-- Indexes for table `pertenece`
--
ALTER TABLE `pertenece`
  ADD PRIMARY KEY (`IDPertenece`);

--
-- Indexes for table `privilegios`
--
ALTER TABLE `privilegios`
  ADD PRIMARY KEY (`IDPrivilegio`);

--
-- Indexes for table `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`IDRol`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`IDUsuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `causan`
--
ALTER TABLE `causan`
  MODIFY `IDCausan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1026;

--
-- AUTO_INCREMENT for table `cicloescolar`
--
ALTER TABLE `cicloescolar`
  MODIFY `IDCiclo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `contiene`
--
ALTER TABLE `contiene`
  MODIFY `IDContiene` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `deuda`
--
ALTER TABLE `deuda`
  MODIFY `IDDeuda` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `materias`
--
ALTER TABLE `materias`
  MODIFY `IDMateria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=158;

--
-- AUTO_INCREMENT for table `pago`
--
ALTER TABLE `pago`
  MODIFY `IDPago` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `pertenece`
--
ALTER TABLE `pertenece`
  MODIFY `IDPertenece` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `privilegios`
--
ALTER TABLE `privilegios`
  MODIFY `IDPrivilegio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `rol`
--
ALTER TABLE `rol`
  MODIFY `IDRol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `IDUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;