-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 28, 2024 at 05:22 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

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
(1025, 787, 778),
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
  `Precio_credito` int(11) DEFAULT NULL,
  `IDCicloEXT` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cicloescolar`
--

INSERT INTO `cicloescolar` (`IDCiclo`, `Ciclo`, `Fecha_Inicio`, `Fecha_Fin`, `Ciclo_activo`, `Precio_credito`, `IDCicloEXT`) VALUES
(1, '2024-1', '2024-01-01', '2024-06-29', 1, 1249, 0),
(2, '2024-2', '2024-06-30', '2024-12-27', 0, 1177, 0),
(3, '2024-3', '2024-12-28', '2025-06-26', 1, 1481, 0),
(4, '2024-4', '2025-06-27', '2025-12-24', 0, 1816, 0),
(5, '2024-5', '2025-12-25', '2026-06-23', 1, 1178, 0),
(6, '2024-6', '2026-06-24', '2026-12-21', 0, 1664, 0),
(7, '2024-7', '2026-12-22', '2027-06-20', 1, 1356, 0),
(8, '2024-8', '2027-06-21', '2027-12-18', 0, 1089, 0),
(9, '2024-9', '2027-12-19', '2028-06-16', 1, 1170, 0),
(10, '2024-10', '2028-06-17', '2028-12-14', 0, 1204, 0),
(11, '2024-11', '2028-12-15', '2029-06-13', 1, 1782, 0),
(12, '2024-12', '2029-06-14', '2029-12-11', 0, 1621, 0),
(13, '2024-13', '2029-12-12', '2030-06-10', 1, 1208, 0),
(14, '2024-14', '2030-06-11', '2030-12-08', 0, 1775, 0),
(15, '2024-15', '2030-12-09', '2031-06-07', 1, 1958, 0),
(16, '2024-16', '2031-06-08', '2031-12-05', 0, 1914, 0),
(17, '2024-17', '2031-12-06', '2032-06-03', 1, 1586, 0),
(18, '2024-18', '2032-06-04', '2032-12-01', 0, 1507, 0),
(19, '2024-19', '2032-12-02', '2033-05-31', 1, 1193, 0),
(20, '2024-20', '2033-06-01', '2033-11-28', 0, 1917, 0),
(21, '2024-21', '2033-11-29', '2034-05-28', 1, 1510, 0),
(22, '2024-22', '2034-05-29', '2034-11-25', 0, 1048, 0),
(23, '2024-23', '2034-11-26', '2035-05-25', 1, 1862, 0),
(24, '2024-24', '2035-05-26', '2035-11-22', 0, 1641, 0),
(28, 'Enero - Junio 2024', '2024-04-02', '2024-04-28', 1, 87878, 0),
(29, 'Enero - Junio 2024', '2024-04-02', '2024-04-27', 1, 555, 13),
(30, 'Enero - Junio 2024', '2024-04-02', '2024-05-03', 1, 123, 0),
(31, 'Enero - Junio 2024', '2024-04-02', '2024-04-28', 1, 555, 0),
(32, 'Julio - Diciembre 2024', '2024-07-12', '2024-12-05', 0, 678, 0),
(33, '', '0000-00-00', '0000-00-00', 1, 0, 0),
(34, '', '0000-00-00', '0000-00-00', 1, 0, 0);

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
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 1, 4),
(5, 1, 5),
(6, 1, 6),
(7, 1, 7),
(8, 1, 8),
(9, 1, 9),
(10, 1, 10),
(11, 1, 11),
(12, 1, 12),
(13, 1, 13),
(14, 1, 14),
(15, 2, 10),
(16, 2, 14),
(17, 3, 1),
(18, 3, 2),
(19, 3, 4),
(20, 3, 9),
(21, 3, 10),
(22, 3, 12);

-- --------------------------------------------------------

--
-- Table structure for table `deuda`
--

CREATE TABLE `deuda` (
  `IDDeuda` int(11) NOT NULL,
  `IDUsuario` int(11) DEFAULT NULL,
  `Total_deuda` float DEFAULT NULL,
  `Concepto` varchar(50) DEFAULT NULL,
  `Mes` varchar(20) DEFAULT NULL,
  `Fecha_limite` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `deuda`
--

INSERT INTO `deuda` (`IDDeuda`, `IDUsuario`, `Total_deuda`, `Concepto`, `Mes`, `Fecha_limite`) VALUES
(1, 39, 7626.82, 'Colegiatura', 'Julio', NULL),
(2, 46, 9132.64, 'Colegiatura', 'Abril', NULL),
(3, 8, 502.38, 'Colegiatura', 'Diciembre', NULL),
(4, 27, 1156.18, 'Material', 'Julio', NULL),
(5, 12, 3720.85, 'Colegiatura', 'Mayo', NULL),
(6, 20, 4669.78, 'Inscripción', 'Noviembre', NULL),
(7, 16, 2601.81, 'Material', 'Diciembre', NULL),
(8, 26, 6074.04, 'Inscripción', 'Abril', NULL),
(9, 21, 811.57, 'Material', 'Septiembre', NULL),
(10, 7, 5680.25, 'Material', 'Abril', NULL),
(11, 29, 4305.47, 'Colegiatura', 'Octubre', NULL),
(12, 1, 3132.31, 'Inscripción', 'Diciembre', NULL),
(13, 19, 7084.32, 'Inscripción', 'Diciembre', NULL),
(14, 47, 1503.99, 'Inscripción', 'Julio', NULL),
(15, 32, 5036.65, 'Inscripción', 'Abril', NULL),
(16, 31, 5705.96, 'Material', 'Septiembre', NULL),
(17, 39, 8882.99, 'Colegiatura', 'Mayo', NULL),
(18, 37, 4729.32, 'Colegiatura', 'Julio', NULL),
(19, 33, 8554.31, 'Material', 'Junio', NULL),
(20, 31, 5020.48, 'Material', 'Junio', NULL),
(21, 41, 5603.88, 'Inscripción', 'Febrero', NULL),
(22, 28, 8166.53, 'Inscripción', 'Mayo', NULL),
(23, 43, 2381.81, 'Material', 'Marzo', NULL),
(24, 34, 5569.51, 'Colegiatura', 'Mayo', NULL),
(25, 24, 6616.12, 'Colegiatura', 'Julio', NULL),
(26, 200001, 5000, 'Colegiatura', 'Octubre', NULL),
(27, 200002, 3000, 'Inscripción', 'Septiembre', NULL),
(28, 200003, 4500, 'Material', 'Noviembre', NULL),
(29, 200004, 6000, 'Colegiatura', 'Octubre', NULL),
(30, 200005, 2500, 'Inscripción', 'Noviembre', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `materias`
--

CREATE TABLE `materias` (
  `IDMateria` int(11) NOT NULL,
  `Nombre_mat` varchar(255) DEFAULT NULL,
  `Creditos` decimal(10,2) DEFAULT NULL,
  `IDMateriaEXT` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `materias`
--

INSERT INTO `materias` (`IDMateria`, `Nombre_mat`, `Creditos`, `IDMateriaEXT`) VALUES
(1, 'Fundamentos del Diseño', 6.00, NULL),
(2, 'Textiles', 6.00, NULL),
(3, 'Ilustración técnica de la Moda I', 6.00, NULL),
(4, 'Teoría del Color', 6.00, NULL),
(5, 'Trazo Plano de Prendas Básicas', 6.00, NULL),
(6, 'Confección de Prendas Básicas', 6.00, NULL),
(7, 'Herramientas y Puntadas Básicas', 6.00, NULL),
(8, 'Historia del Arte', 6.00, NULL),
(9, 'Ilustración Gráfica Digital', 6.00, NULL),
(10, 'Conceptos y tendencias de Moda I', 6.00, NULL),
(11, 'Ilustración técnica de la Moda II', 6.00, NULL),
(12, 'Trazo Plano de Prendas Femeninas', 6.00, NULL),
(13, 'Confección de Prendas Femeninas', 6.00, NULL),
(14, 'Modelado en Maniquí I', 6.00, NULL),
(15, 'Historia de la Moda', 6.00, NULL),
(16, 'Ilustración Técnica de la Moda III', 6.00, NULL),
(17, 'Fundamentos de Administración', 6.00, NULL),
(18, 'Aplicación Textil I', 6.00, NULL),
(19, 'Trazo Plano de Prendas Masculinas', 6.00, NULL),
(20, 'Confección de Prendas Masculinas', 6.00, NULL),
(21, 'Herramientas Industriales', 6.00, NULL),
(22, 'Aplicación Textil II', 6.00, NULL),
(23, 'Fundamentos de Mercadotecnia', 6.00, NULL),
(24, 'Edición Digital de Imagen', 6.00, NULL),
(25, 'Diseño de Joyería', 6.00, NULL),
(26, 'Trazo Plano de Prendas Infantiles', 6.00, NULL),
(27, 'Confección de Prendas Infantiles', 6.00, NULL),
(28, 'Conceptos y Tendencias de Moda II', 6.00, NULL),
(29, 'Análisis de Culturas', 6.00, NULL),
(30, 'Graduación de Tallas', 6.00, NULL),
(31, 'Trazo Plano de Lencería y Traje de Baño', 6.00, NULL),
(32, 'Confección de Lencería y Traje de Baño', 6.00, NULL),
(33, 'Mercadotecnia de la Moda ', 6.00, NULL),
(34, 'Diseño de Moda Asistido por Computadora', 6.00, NULL),
(35, 'Taller Experimental de Moda', 6.00, NULL),
(36, 'Optimización de Punto de Venta', 6.00, NULL),
(37, 'Trazo Plano de Alta Costura', 6.00, NULL),
(38, 'Confección de Alta Costura', 6.00, NULL),
(39, 'Modelado en Maniquí II', 6.00, NULL),
(40, 'Portafolio Profesional', 6.00, NULL),
(41, 'Metodología para el Desarrollo de una Colección', 6.00, NULL),
(42, 'Trazo Plano de Sastrería para Dama', 6.00, NULL),
(43, 'Confección de Sastrería para Dama', 6.00, NULL),
(44, 'Sistemas de Producción', 6.00, NULL),
(45, 'Imagen Corporativa', 6.00, NULL),
(46, 'Desarrollo Empresarial', 6.00, NULL),
(47, 'Coordinación de Eventos de Moda', 6.00, NULL),
(48, 'Trazo Plano de Sastrería para Caballero', 6.00, NULL),
(49, 'Confección de Sastrería para Caballero', 6.00, NULL),
(50, 'Desarrollo de Proyecto Integrador', 12.00, NULL),
(51, 'Fundamentos del Diseño', 4.00, NULL),
(52, 'Materiales Textiles', 4.00, NULL),
(53, 'Teoría del Color', 4.00, NULL),
(54, 'Técnicas de Representación', 5.00, NULL),
(55, 'Herramientas y Puntadas', 5.00, NULL),
(56, 'Patronaje de Prendas Básicas', 4.00, NULL),
(57, 'Confección de Prendas Básicas', 9.00, NULL),
(58, 'Ilustración Gráfica Digital', 6.00, NULL),
(59, 'Conceptos y Tendencias de la Moda I', 4.00, NULL),
(60, 'Ilustración Técnica de la Moda I', 4.00, NULL),
(61, 'Diseño de Accesorios', 6.00, NULL),
(62, 'Patronaje de Prendas Femeninas', 4.00, NULL),
(63, 'Confección de Prendas Femeninas', 9.00, NULL),
(64, 'Historia del Arte', 4.00, NULL),
(65, 'Ilustración Técnica de la Moda II', 6.00, NULL),
(66, 'Fundamentos de Administración', 4.00, NULL),
(67, 'Herramientas Industriales', 6.00, NULL),
(68, 'Patronaje de Prendas Infantiles', 4.00, NULL),
(69, 'Confección de Prendas Infantiles', 9.00, NULL),
(70, 'Historia de la Moda', 4.00, NULL),
(71, 'Ilustración Técnica de la Moda III', 4.00, NULL),
(72, 'Taller de Lectura Y Redacción', 6.00, NULL),
(73, 'Modelado en Maniquí I', 6.00, NULL),
(74, 'Patronaje de Prendas Masculinas', 4.00, NULL),
(75, 'Confección de Prendas Masculinas', 9.00, NULL),
(76, 'Aplicación Textil I', 6.00, NULL),
(77, 'Análisis de Culturas', 4.00, NULL),
(78, 'Modelado en Maniquí II', 6.00, NULL),
(79, 'Conceptos y Tendencias de la Moda II', 4.00, NULL),
(80, 'Patronaje de Lencería y Traje de Baño', 4.00, NULL),
(81, 'Confección de Lencería y Traje de Baño', 9.00, NULL),
(82, 'Edición Digital de Imagen', 6.00, NULL),
(83, 'Aplicación Textil II', 4.00, NULL),
(84, 'Graduación de Tallas', 6.00, NULL),
(85, 'Fundamentos de Mercadotecnia', 4.00, NULL),
(86, 'Patronaje de Alta Costura', 4.00, NULL),
(87, 'Confección de Alta Costura', 9.00, NULL),
(88, 'Taller Experimental de Moda', 6.00, NULL),
(89, 'Mercadotecnia de la Moda', 4.00, NULL),
(90, 'Comunicación Efectiva', 4.00, NULL),
(91, 'Optimización de Punto de Venta', 5.00, NULL),
(92, 'Patronaje de Sastrería para Dama', 4.00, NULL),
(93, 'Confección de Sastrería para Dama', 9.00, NULL),
(94, 'Sistemas de Producción', 5.00, NULL),
(95, 'Diseño de Moda Asistido por Computadora', 7.00, NULL),
(96, 'Técnicas de Joyería Fina', 6.00, NULL),
(97, 'Metodología para el Desarrollo de una Colección', 10.00, NULL),
(98, 'Imagen Corporativa', 5.00, NULL),
(99, 'Portafolio Profesional', 7.00, NULL),
(100, 'Desarrollo Empresarial', 4.00, NULL),
(101, 'Coordinación de Eventos de Moda', 6.00, NULL),
(102, 'Ética Profesional', 4.00, NULL),
(103, 'Desarrollo de Proyecto Integrador', 11.00, NULL),
(104, 'Introduccion al Diseño y Arquitectura de Interiores', 5.00, NULL),
(105, 'Historia del Arte', 4.00, NULL),
(106, 'Geometría Descriptiva', 6.00, NULL),
(107, 'Teoría del Color', 4.00, NULL),
(108, 'Técnicas de Representación', 6.00, NULL),
(109, 'Modelos y Maquetas', 6.00, NULL),
(110, 'Desarrollo del Pensamiento Creativo', 5.00, NULL),
(111, 'Historia de la Arquitectura I', 5.00, NULL),
(112, 'Taller de Diseño del Espacio Habitable', 9.00, NULL),
(113, 'Fundamentos del Diseño', 4.00, NULL),
(114, 'Taller de Dibujo Arquitectónico', 5.00, NULL),
(115, 'Ergonomía', 5.00, NULL),
(116, 'Metodología del Diseño', 5.00, NULL),
(117, 'Taller de Lectura y Redacción', 4.00, NULL),
(118, 'Historia de la Arquitectura II', 5.00, NULL),
(119, 'Teoría del Diseño de Interiores', 4.00, NULL),
(120, 'Taller de Diseño de Viviendas Residenciales', 10.00, NULL),
(121, 'Ambientación de Planos Arquitectonicos', 6.00, NULL),
(122, 'Dibujo Arquitectónico Digital', 5.00, NULL),
(123, 'Materiales Textiles', 4.00, NULL),
(124, 'Taller de Diseño de Construcciones Efímeras', 10.00, NULL),
(125, 'Materiales Pétreos y Madera', 4.00, NULL),
(126, 'Fundamentos de Administración', 5.00, NULL),
(127, 'Dibujo y Modelación Digital', 6.00, NULL),
(128, 'Historia del Mueble', 4.00, NULL),
(129, 'Psicología del Espacio', 4.00, NULL),
(130, 'Taller de Diseño de Espacios Comerciales', 10.00, NULL),
(131, 'Recubrimientos y Acabados', 5.00, NULL),
(132, 'Modelación Digital I', 5.00, NULL),
(133, 'Instalaciones', 4.00, NULL),
(134, 'Modelos y Prototipos de Mobiliario', 6.00, NULL),
(135, 'Apreciación Estética de la Arquitectura Mexicana', 4.00, NULL),
(136, 'Taller de Diseño de Espacios Turísticos', 10.00, NULL),
(137, 'Procedimientos de Construcción', 4.00, NULL),
(138, 'Optimización de Punto de Venta', 4.00, NULL),
(139, 'Modelación Digital II', 4.00, NULL),
(140, 'Modelos y Prototipos de Artículos Decorativos', 7.00, NULL),
(141, 'Iluminación y Acústica', 4.00, NULL),
(142, 'Diseño de Paisaje', 6.00, NULL),
(143, 'Taller de Diseño de Espacios Comunitarios', 11.00, NULL),
(144, 'Arquitectura Sustentable', 4.00, NULL),
(145, 'Ilustración Gráfica Digital', 4.00, NULL),
(146, 'Renderización y Recorridos Virtuales', 5.00, NULL),
(147, 'Domótica', 4.00, NULL),
(148, 'Costos y Presupuestos', 4.00, NULL),
(149, 'Taller de Diseño; Proyecto Integrador', 14.00, NULL),
(150, 'Imagen Corporativa', 4.00, NULL),
(151, 'Fundamentos de Mercadotecnia', 5.00, NULL),
(152, 'Edición Digital de Imagen', 5.00, NULL),
(153, 'Desarrollo Empresarial', 6.00, NULL),
(154, 'Portafolio Profesional', 6.00, NULL),
(155, 'Ética Profesional', 4.00, NULL),
(156, 'Comunicación Efectiva', 4.00, NULL),
(157, 'Desarrollo de Proyecto Integrador', 13.00, NULL),
(158, 'Taller de diseño', 7.00, 309),
(159, 'Confección de prendas infantiles', 5.00, 317),
(160, 'Taller para representación', 6.00, 325),
(161, 'Taller para representación', 6.00, 325),
(162, 'Confección de representación', 9.00, 333),
(163, 'Diseño de diseño', 8.00, 341),
(164, 'Fundamentos para prendas masculinas', 8.00, 349),
(165, 'Taller de diseño', 7.00, 309),
(166, 'Confección de prendas infantiles', 5.00, 317),
(167, 'Taller para representación', 6.00, 325),
(168, 'Taller para representación', 6.00, 325),
(169, 'Confección de representación', 9.00, 333),
(170, 'Diseño de diseño', 8.00, 341),
(171, 'Fundamentos para prendas masculinas', 8.00, 349);

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
  `Nota` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pago`
--

INSERT INTO `pago` (`IDPago`, `IDUsuario`, `IDDeuda`, `Cant_pagada`, `Fecha_de_pago`, `Metodo`, `Banco`, `Nota`) VALUES
(1, 7, 13, 863.83, '2024-03-09', 'Efectivo', 'Banco A', 'Pago realizado satisfactoriamente'),
(3, 14, 19, 230.57, '2024-03-09', 'Efectivo', 'N/A', 'Pago realizado satisfactoriamente'),
(4, 36, 19, 256.85, '2024-03-09', 'Efectivo', 'Banco A', 'Pago realizado satisfactoriamente'),
(5, 46, 25, 336.57, '2024-03-09', 'Transferencia', 'Banco A', 'Pago realizado satisfactoriamente'),
(7, 49, 12, 681.27, '2024-03-09', 'Transferencia', 'Banco C', 'Pago realizado satisfactoriamente'),
(8, 25, 25, 756.99, '2024-03-09', 'Efectivo', 'Banco A', 'Pago realizado satisfactoriamente'),
(9, 38, 13, 943.02, '2024-03-09', 'Efectivo', 'Banco C', 'Pago realizado satisfactoriamente'),
(10, 20, 5, 718.49, '2024-03-09', 'Tarjeta de crédito', 'N/A', 'Pago realizado satisfactoriamente'),
(11, 43, 1, 218.17, '2024-03-09', 'Efectivo', 'N/A', 'Pago realizado satisfactoriamente'),
(12, 21, 13, 350.46, '2024-03-09', 'Tarjeta de crédito', 'Banco A', 'Pago realizado satisfactoriamente'),
(13, 47, 6, 821.74, '2024-03-09', 'Tarjeta de crédito', 'Banco B', 'Pago realizado satisfactoriamente'),
(14, 6, 20, 184.98, '2024-03-09', 'Efectivo', 'Banco C', 'Pago realizado satisfactoriamente'),
(15, 15, 3, 330.61, '2024-03-09', 'Efectivo', 'N/A', 'Pago realizado satisfactoriamente'),
(16, 42, 9, 176.34, '2024-03-09', 'Transferencia', 'N/A', 'Pago realizado satisfactoriamente'),
(17, 17, 14, 281.41, '2024-03-09', 'Efectivo', 'Banco B', 'Pago realizado satisfactoriamente'),
(18, 23, 7, 833.51, '2024-03-09', 'Efectivo', 'Banco A', 'Pago realizado satisfactoriamente'),
(19, 49, 14, 181.81, '2024-03-09', 'Transferencia', 'Banco C', 'Pago realizado satisfactoriamente'),
(21, 3, 19, 500.07, '2024-03-09', 'Transferencia', 'Banco C', 'Pago realizado satisfactoriamente'),
(22, 30, 15, 269.2, '2024-03-09', 'Efectivo', 'Banco A', 'Pago realizado satisfactoriamente'),
(23, 3, 7, 849.94, '2024-03-09', 'Transferencia', 'Banco B', 'Pago realizado satisfactoriamente'),
(24, 18, 4, 176.41, '2024-03-09', 'Efectivo', 'Banco C', 'Pago realizado satisfactoriamente'),
(25, 12, 2, 713.11, '2024-03-09', 'Efectivo', 'Banco A', 'Pago realizado satisfactoriamente'),
(26, 200001, 101, 5000, '2024-10-05', 'Transferencia', 'Banco Z', 'Pago total colegiatura Octubre'),
(27, 200002, 102, 1500, '2024-09-15', 'Efectivo', 'N/A', 'Abono inscripción Septiembre'),
(28, 200003, 103, 4500, '2024-11-01', 'Tarjeta de crédito', 'Banco Y', 'Pago total material Noviembre'),
(29, 200004, 104, 3000, '2024-10-20', 'Transferencia', 'Banco X', 'Abono colegiatura Octubre'),
(30, 200005, 105, 2500, '2024-11-10', 'Efectivo', 'N/A', 'Pago total inscripción Noviembre');

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
(1, 63, 4, 1, 1),
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
(25, 34, 29, 50, 35);

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
(1, 'generar ficha'),
(2, 'modificar ficha'),
(3, 'modificar pago'),
(4, 'modificar prorroga'),
(5, 'modificar usuario'),
(6, 'registrar ciclo'),
(7, 'registrar pago'),
(8, 'registrar usuario'),
(9, 'pedir pago'),
(10, 'restaurar contrasena'),
(11, 'subir transferencias'),
(12, 'ver historial todos'),
(13, 'ver historial propio'),
(14, 'ver materias');

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
(1, 'Administrador'),
(2, 'Alumno'),
(3, 'Lector');

-- --------------------------------------------------------

--
-- Table structure for table `tiene`
--

CREATE TABLE `tiene` (
  `IDTiene` int(11) NOT NULL,
  `IDUsuario` int(11) NOT NULL,
  `IDRol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `tiene`
--

INSERT INTO `tiene` (`IDTiene`, `IDUsuario`, `IDRol`) VALUES
(1, 33, 1),
(2, 34, 2),
(3, 38, 2),
(4, 35, 1),
(5, 36, 1),
(6, 37, 1),
(7, 39, 3),
(16237, 41, 1),
(18806, 3599, 1),
(18807, 3598, 1),
(18810, 3602, 1),
(18811, 3603, 1),
(18812, 3604, 2),
(18813, 3607, 2),
(18814, 3605, 2),
(18815, 3606, 2),
(18816, 3613, 2),
(18817, 3608, 2),
(18818, 3611, 2),
(18819, 3615, 2),
(18820, 3609, 2),
(18821, 3621, 2),
(18822, 3610, 1),
(18823, 3612, 2),
(18824, 3616, 2),
(18825, 3614, 2),
(18826, 3620, 2),
(18827, 3624, 2),
(18828, 3628, 2),
(18829, 3625, 2),
(18830, 3627, 2),
(18831, 3629, 2),
(18832, 3626, 2),
(18833, 3622, 2),
(18834, 3634, 2),
(18835, 3632, 2),
(18836, 3623, 2),
(18837, 3619, 2),
(18838, 3618, 2),
(18839, 3617, 2),
(18840, 3636, 2),
(18841, 3638, 2),
(18842, 3630, 2),
(18843, 3639, 2),
(18844, 3631, 2),
(18845, 3635, 2),
(18846, 3643, 2),
(18847, 3633, 2),
(18848, 3646, 2),
(18849, 3641, 2),
(18850, 3637, 2),
(18851, 3640, 2),
(18852, 3645, 2),
(18853, 3642, 2),
(18854, 3652, 2),
(18855, 3648, 2),
(18856, 3644, 2),
(18857, 3650, 2),
(18858, 3651, 2),
(18859, 3647, 2),
(18860, 3655, 2),
(18861, 3653, 2),
(18862, 3657, 2),
(18863, 3656, 2),
(18864, 3659, 2),
(18865, 3658, 2),
(18866, 3649, 2),
(18867, 3661, 2),
(18868, 3660, 2),
(18869, 3662, 2),
(18870, 3663, 2),
(18871, 3665, 2),
(18872, 3666, 2),
(18873, 3667, 2),
(18874, 3668, 2),
(18875, 3654, 2),
(18876, 3670, 2),
(18877, 3671, 2),
(18878, 3672, 2),
(18879, 3664, 2),
(18880, 3673, 2),
(18881, 3675, 2),
(18882, 3674, 2),
(18883, 3676, 2),
(18884, 3669, 2),
(18885, 3678, 2),
(18886, 3679, 2),
(18887, 3677, 2),
(18888, 3686, 2),
(18889, 3680, 2),
(18890, 3682, 2),
(18891, 3681, 2),
(18892, 3685, 2),
(18893, 3689, 2),
(18894, 3684, 2),
(18895, 3687, 2),
(18896, 3690, 2),
(18897, 3691, 2),
(18898, 3688, 2),
(18899, 3696, 2),
(18900, 3697, 2),
(18901, 3693, 2),
(18902, 3695, 2),
(18903, 3694, 2),
(18904, 3683, 2),
(18905, 3692, 2),
(18906, 3701, 2),
(18907, 3700, 2),
(18908, 3702, 2),
(18909, 3699, 2),
(18910, 3705, 2),
(18911, 3698, 2),
(18912, 3703, 2),
(18913, 3704, 2),
(18914, 3707, 2),
(18915, 3706, 2),
(18916, 3708, 2),
(18917, 3709, 2),
(18918, 3715, 2),
(18919, 3716, 2),
(18920, 3714, 2),
(18921, 3711, 2),
(18922, 3710, 2),
(18923, 3718, 2),
(18924, 3719, 2),
(18925, 3717, 2),
(18926, 3712, 2),
(18927, 3713, 2),
(18928, 3722, 2),
(18929, 3723, 2),
(18930, 3720, 2),
(18931, 3721, 2),
(18932, 3724, 2),
(18933, 3725, 1),
(18934, 3726, 1),
(18935, 3728, 1),
(18936, 3730, 1),
(18937, 3729, 1),
(18938, 3731, 1),
(18939, 3727, 1),
(18940, 3732, 2),
(18941, 3733, 2);

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
  `Alumno_activo` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`IDUsuario`, `Nombre`, `Matricula`, `Correo_electronico`, `Contrasena`, `Beca_actual`, `Referencia`, `Alumno_activo`) VALUES
(1, 'Juan', 123456, 'juan@example.com', 'contraseña123', 0, 0, NULL),
(4, 'Ana', 456789, 'ana@example.com', 'pass123', 0, 0, NULL),
(5, 'Luis', 567890, 'luis@example.com', 'securepass', 0, 0, NULL),
(6, 'Laura', 678901, 'laura@example.com', 'userpass', 0, 0, NULL),
(7, 'Pedro', 789012, 'pedro@example.com', '123abc', 0, 0, NULL),
(8, 'Sofía', 890123, 'sofia@example.com', 'letmein', 0, 0, NULL),
(9, 'Daniel', 901234, 'daniel@example.com', 'password123', 0, 0, NULL),
(10, 'Alejandra', 123, 'alejandra@example.com', 'abc123', 0, 0, NULL),
(13, 'Roberto', 456, 'roberto@example.com', 'pass123', 0, 0, NULL),
(14, 'Elena', 567, 'elena@example.com', 'securepass', 0, 0, NULL),
(15, 'Marta', 678, 'marta@example.com', 'userpass', 0, 0, NULL),
(16, 'Héctor', 789, 'hector@example.com', '123abc', 0, 0, NULL),
(17, 'Carmen', 890, 'carmen@example.com', 'letmein', 0, 0, NULL),
(18, 'Diego', 901, 'diego@example.com', 'password123', 0, 0, NULL),
(19, 'Ana', 123456789, 'ana2@example.com', 'abc123', 0, 0, NULL),
(22, 'Ana', 456789012, 'ana3@example.com', 'pass123', 0, 0, NULL),
(23, 'Luis', 567890123, 'luis2@example.com', 'securepass', 0, 0, NULL),
(24, 'Laura', 678901234, 'laura2@example.com', 'userpass', 0, 0, NULL),
(25, 'Pedro', 789012345, 'pedro2@example.com', '123abc', 0, 0, NULL),
(26, 'Arturo', 1275427, 'arturo@gmail.com', '$2a$12$medFPjiMnK8DaJK.1eicveqN2e9c3jCCL1EcfwPRn4/ABZpXv6MKS', 0, 0, NULL),
(27, 'ejemplo', 123456789, 'ejemplo@gmail.com', '$2a$12$Jf5YITGVYsV31hG3cyCdWOBJb5AVrTyQp/OhBWYsctRKQJUx5QeR2', 0, 0, NULL),
(33, 'Ernesto Acosta', 100017, 'neto@gmail.com', '$2a$12$z8h.xsnjJZjAoU5vhBjDlOBiKZ6KP6Us4a3F.eVkUIG456dFkrrwm', 50, 13649821, 1),
(34, 'alumno', 12345678, 'alumno@edu.mx', '$2a$12$kCBfPQ395MgXIu/ii5IxYOamqZPsf28Q.RRbU9isS95e76NpU62da', 10, 123456781, 1),
(35, 'Levi', 100327, 'emilio.levi@hotmail.com', '$2a$12$K4FEQ9/yIjY.cpGtLLrPvuM5kmwKoY8ZmUGSdPJAijsih/0T8DGl.', 0, 0, 1),
(36, 'Arturo', 1275427, 'arturo@gmail.com', '$2a$12$38i/IeL3JGN4gJ2q4Friu.I54cHkhWJWziHi4NZ4/rJ8HIfg9ZCt.', 0, 0, 1),
(37, 'daniel', 1234, 'hola@gmail.com', '$2a$12$yc02XJjfPceyDI39jzG6luAS3jxFCkzkj4s9SfpaLSZqE5ix6Wn6S', 0, 0, 1),
(38, 'wqesd', 12313, 'test@edu.mx', '$2a$12$DueRfYp7c86EQqtjGbGqf.Mj.iVtk3iUYwad.gBwX3nSqsrpU0Um6', 12, 2131231, 1),
(39, 'lector', 12321, 'lector@edu.mx', '$2a$12$4xx64y6THqvvjDhfKaAnGewdwZssZn3aJiOIq3PbdgkulMW44JGAa', 111, 111, 1),
(41, 'Levi', 45574, 'blue778tv@gmail.com', '$2a$12$vhMbgCsTywS9.GoOUki0x./UIhb4xWkM3Wwhw6u/H1aghUG6Paceq', 50, 342, 1),
(3598, 'test test test', 300010, 'institucional@gmail.com', NULL, NULL, NULL, 1),
(3599, 'Bernardo Gomez Romero', 300011, '300011@gmail.com', NULL, NULL, NULL, 1),
(3602, 'Bernardo Prueba Prueba', 300012, '300012@gmail.com', NULL, NULL, NULL, 1),
(3603, 'Bernardo Test Email', 300013, 'bernardogr95@gmail.com', NULL, NULL, NULL, 1),
(3604, 'Belen Lemke Heidenreich', 100003, '100003@ivd.edu.mx', NULL, NULL, NULL, 1),
(3605, 'Jorge Bins Dibbert', 100001, '100001@ivd.edu.mx', NULL, NULL, NULL, 1),
(3606, 'Louise Dicki Kihn', 100006, '100006@ivd.edu.mx', NULL, NULL, NULL, 1),
(3607, 'Eugena Russel Gorczany', 100004, '100004@ivd.edu.mx', NULL, NULL, NULL, 1),
(3608, 'Lottie Hamill Barton', 100009, '100009@ivd.edu.mx', NULL, NULL, NULL, 1),
(3609, 'Tynisha Marks Runte', 100005, '100005@ivd.edu.mx', NULL, NULL, NULL, 1),
(3610, 'Li Mertz Streich', 300001, '300001@ivd.edu.mx', NULL, NULL, NULL, 1),
(3611, 'Rich Cronin Altenwerth', 100002, '100002@ivd.edu.mx', NULL, NULL, NULL, 1),
(3612, 'Arlen McLaughlin Rath', 100008, '100008@ivd.edu.mx', NULL, NULL, NULL, 1),
(3613, 'Billy Koch Lueilwitz', 100010, '100010@ivd.edu.mx', NULL, NULL, NULL, 1),
(3614, 'Halina Runte Ziemann', 100007, '100007@ivd.edu.mx', NULL, NULL, NULL, 1),
(3615, 'Enrique Brakus Ritchie', 100011, '100011@ivd.edu.mx', NULL, NULL, NULL, 1),
(3616, 'Lynelle Harris Brakus', 100013, '100013@ivd.edu.mx', NULL, NULL, NULL, 1),
(3617, 'Becky Ritchie Cassin', 100014, '100014@ivd.edu.mx', NULL, NULL, NULL, 1),
(3618, 'Winford O\'Kon O\'Reilly', 100015, '100015@ivd.edu.mx', NULL, NULL, NULL, 1),
(3619, 'Sophie Keebler Mertz', 100016, '100016@ivd.edu.mx', NULL, NULL, NULL, 1),
(3620, 'Zachary Zieme McLaughlin', 100012, '100012@ivd.edu.mx', NULL, NULL, NULL, 1),
(3621, 'Rudolf Hackett Erdman', 100017, '100017@ivd.edu.mx', NULL, NULL, NULL, 1),
(3622, 'Ivelisse Rutherford Wilkinson', 100018, '100018@ivd.edu.mx', NULL, NULL, NULL, 1),
(3623, 'Ramiro Crist Rutherford', 100019, '100019@ivd.edu.mx', NULL, NULL, NULL, 1),
(3624, 'Dave Baumbach Heaney', 100020, '100020@ivd.edu.mx', NULL, NULL, NULL, 1),
(3625, 'Kimbery Treutel O\'Connell', 100021, '100021@ivd.edu.mx', NULL, NULL, NULL, 1),
(3626, 'Lizzette Schaden Ruecker', 100022, '100022@ivd.edu.mx', NULL, NULL, NULL, 1),
(3627, 'Brad Nienow Crooks', 100023, '100023@ivd.edu.mx', NULL, NULL, NULL, 1),
(3628, 'Mikel Moore Strosin', 100024, '100024@ivd.edu.mx', NULL, NULL, NULL, 1),
(3629, 'Malik Spencer Langworth', 100025, '100025@ivd.edu.mx', NULL, NULL, NULL, 1),
(3630, 'Lucina Walter D\'Amore', 100026, '100026@ivd.edu.mx', NULL, NULL, NULL, 1),
(3631, 'France Schowalter Heathcote', 100027, '100027@ivd.edu.mx', NULL, NULL, NULL, 1),
(3632, 'Kandy Littel Roberts', 100028, '100028@ivd.edu.mx', NULL, NULL, NULL, 1),
(3633, 'Leatha Moore Jenkins', 100029, '100029@ivd.edu.mx', NULL, NULL, NULL, 1),
(3634, 'Salina Nader Deckow', 100030, '100030@ivd.edu.mx', NULL, NULL, NULL, 1),
(3635, 'Werner Halvorson Mayert', 100031, '100031@ivd.edu.mx', NULL, NULL, NULL, 1),
(3636, 'Brett McLaughlin Wiegand', 100032, '100032@ivd.edu.mx', NULL, NULL, NULL, 1),
(3637, 'Elvis Waters Steuber', 100033, '100033@ivd.edu.mx', NULL, NULL, NULL, 1),
(3638, 'Tracy Collier Nicolas', 100034, '100034@ivd.edu.mx', NULL, NULL, NULL, 1),
(3639, 'Leia Kiehn Moen', 100035, '100035@ivd.edu.mx', NULL, NULL, NULL, 1),
(3640, 'Ada Tromp Barrows', 100036, '100036@ivd.edu.mx', NULL, NULL, NULL, 1),
(3641, 'Beatrice Gibson Quitzon', 100037, '100037@ivd.edu.mx', NULL, NULL, NULL, 1),
(3642, 'Terrence Osinski Walker', 100039, '100039@ivd.edu.mx', NULL, NULL, NULL, 1),
(3643, 'Clarence Grimes Reynolds', 100038, '100038@ivd.edu.mx', NULL, NULL, NULL, 1),
(3644, 'Guillermina Schamberger Quigley', 100041, '100041@ivd.edu.mx', NULL, NULL, NULL, 1),
(3645, 'Francene Steuber Berge', 100040, '100040@ivd.edu.mx', NULL, NULL, NULL, 1),
(3646, 'Shane Oberbrunner Murazik', 100042, '100042@ivd.edu.mx', NULL, NULL, NULL, 1),
(3647, 'Alphonso Lemke Funk', 100043, '100043@ivd.edu.mx', NULL, NULL, NULL, 1),
(3648, 'Erich Padberg Wunsch', 100044, '100044@ivd.edu.mx', NULL, NULL, NULL, 1),
(3649, 'Jamel Streich Weissnat', 100045, '100045@ivd.edu.mx', NULL, NULL, NULL, 1),
(3650, 'Ossie Mohr Hilpert', 100046, '100046@ivd.edu.mx', NULL, NULL, NULL, 1),
(3651, 'Alexandria West Kohler', 100047, '100047@ivd.edu.mx', NULL, NULL, NULL, 1),
(3652, 'Alton Stroman Leannon', 100048, '100048@ivd.edu.mx', NULL, NULL, NULL, 1),
(3653, 'Karima Turner Koss', 100049, '100049@ivd.edu.mx', NULL, NULL, NULL, 1),
(3654, 'Amelia Bergnaum Kiehn', 100050, '100050@ivd.edu.mx', NULL, NULL, NULL, 1),
(3655, 'Jayson Boyle Herman', 100051, '100051@ivd.edu.mx', NULL, NULL, NULL, 1),
(3656, 'Barry Kulas Blanda', 100052, '100052@ivd.edu.mx', NULL, NULL, NULL, 1),
(3657, 'Maryjo Gleason Konopelski', 100053, '100053@ivd.edu.mx', NULL, NULL, NULL, 1),
(3658, 'Cari Little Fisher', 100055, '100055@ivd.edu.mx', NULL, NULL, NULL, 1),
(3659, 'Kendrick Senger Schimmel', 100058, '100058@ivd.edu.mx', NULL, NULL, NULL, 1),
(3660, 'Diego Lesch Abernathy', 100054, '100054@ivd.edu.mx', NULL, NULL, NULL, 1),
(3661, 'Roland Gerhold O\'Connell', 100056, '100056@ivd.edu.mx', NULL, NULL, NULL, 1),
(3662, 'Marco Ebert Mueller', 100059, '100059@ivd.edu.mx', NULL, NULL, NULL, 1),
(3663, 'Lila Cummings Kihn', 100060, '100060@ivd.edu.mx', NULL, NULL, NULL, 1),
(3664, 'Yuonne Witting Wyman', 100064, '100064@ivd.edu.mx', NULL, NULL, NULL, 1),
(3665, 'Manuel Bernhard Aufderhar', 100062, '100062@ivd.edu.mx', NULL, NULL, NULL, 1),
(3666, 'Antoine Macejkovic Tromp', 100065, '100065@ivd.edu.mx', NULL, NULL, NULL, 1),
(3667, 'Jenine Tromp Carter', 100061, '100061@ivd.edu.mx', NULL, NULL, NULL, 1),
(3668, 'Pearlie Gorczany Hamill', 100057, '100057@ivd.edu.mx', NULL, NULL, NULL, 1),
(3669, 'Jerrold Stehr Reynolds', 100068, '100068@ivd.edu.mx', NULL, NULL, NULL, 1),
(3670, 'Galen Schmitt Purdy', 100069, '100069@ivd.edu.mx', NULL, NULL, NULL, 1),
(3671, 'Morgan Wilkinson Frami', 100066, '100066@ivd.edu.mx', NULL, NULL, NULL, 1),
(3672, 'Thomasena Lang Oberbrunner', 100071, '100071@ivd.edu.mx', NULL, NULL, NULL, 1),
(3673, 'Sebastian Feest Nader', 100073, '100073@ivd.edu.mx', NULL, NULL, NULL, 1),
(3674, 'Amada Witting Funk', 100063, '100063@ivd.edu.mx', NULL, NULL, NULL, 1),
(3675, 'Bruce Kutch Feest', 100074, '100074@ivd.edu.mx', NULL, NULL, NULL, 1),
(3676, 'Roman Connelly Welch', 100075, '100075@ivd.edu.mx', NULL, NULL, NULL, 1),
(3677, 'Melony Maggio Breitenberg', 100067, '100067@ivd.edu.mx', NULL, NULL, NULL, 1),
(3678, 'Tod Reichert Shields', 100076, '100076@ivd.edu.mx', NULL, NULL, NULL, 1),
(3679, 'Stacie Franecki Jakubowski', 100070, '100070@ivd.edu.mx', NULL, NULL, NULL, 1),
(3680, 'Terra Hessel Sporer', 100072, '100072@ivd.edu.mx', NULL, NULL, NULL, 1),
(3681, 'Jacinto Gerhold Harvey', 100078, '100078@ivd.edu.mx', NULL, NULL, NULL, 1),
(3682, 'Omar Lueilwitz Wintheiser', 100077, '100077@ivd.edu.mx', NULL, NULL, NULL, 1),
(3683, 'Merle Rutherford Gerlach', 100079, '100079@ivd.edu.mx', NULL, NULL, NULL, 1),
(3684, 'Bev Littel Kling', 100080, '100080@ivd.edu.mx', NULL, NULL, NULL, 1),
(3685, 'Stanton Olson Rodriguez', 100081, '100081@ivd.edu.mx', NULL, NULL, NULL, 1),
(3686, 'Micheal Bahringer Wolff', 100082, '100082@ivd.edu.mx', NULL, NULL, NULL, 1),
(3687, 'Joel McClure Ward', 100083, '100083@ivd.edu.mx', NULL, NULL, NULL, 1),
(3688, 'Olga Mosciski Hane', 100084, '100084@ivd.edu.mx', NULL, NULL, NULL, 1),
(3689, 'Domonique Wolff Mann', 100085, '100085@ivd.edu.mx', NULL, NULL, NULL, 1),
(3690, 'Alphonso Hessel Rippin', 100086, '100086@ivd.edu.mx', NULL, NULL, NULL, 1),
(3691, 'Tyson Gottlieb Terry', 100087, '100087@ivd.edu.mx', NULL, NULL, NULL, 1),
(3692, 'Gwenn Stokes Medhurst', 100088, '100088@ivd.edu.mx', NULL, NULL, NULL, 1),
(3693, 'Ranae Hoppe Gorczany', 100089, '100089@ivd.edu.mx', NULL, NULL, NULL, 1),
(3694, 'Nieves Jast Halvorson', 100090, '100090@ivd.edu.mx', NULL, NULL, NULL, 1),
(3695, 'Walter Hane Batz', 100091, '100091@ivd.edu.mx', NULL, NULL, NULL, 1),
(3696, 'Floyd Buckridge Erdman', 100092, '100092@ivd.edu.mx', NULL, NULL, NULL, 1),
(3697, 'Terrell Stiedemann Boehm', 100093, '100093@ivd.edu.mx', NULL, NULL, NULL, 1),
(3698, 'Belen Keeling Wunsch', 100096, '100096@ivd.edu.mx', NULL, NULL, NULL, 1),
(3699, 'Rubye Olson McKenzie', 100094, '100094@ivd.edu.mx', NULL, NULL, NULL, 1),
(3700, 'Mallie Legros Douglas', 100095, '100095@ivd.edu.mx', NULL, NULL, NULL, 1),
(3701, 'Garrett Goyette Pouros', 100097, '100097@ivd.edu.mx', NULL, NULL, NULL, 1),
(3702, 'Santiago Metz Douglas', 100099, '100099@ivd.edu.mx', NULL, NULL, NULL, 1),
(3703, 'Rickie Gutkowski Stanton', 100098, '100098@ivd.edu.mx', NULL, NULL, NULL, 1),
(3704, 'Wilson Jacobi McCullough', 100101, '100101@ivd.edu.mx', NULL, NULL, NULL, 1),
(3705, 'Jeffery Mante Bruen', 100100, '100100@ivd.edu.mx', NULL, NULL, NULL, 1),
(3706, 'Rickey Beatty Bartoletti', 100102, '100102@ivd.edu.mx', NULL, NULL, NULL, 1),
(3707, 'Ned Hauck Wolff', 100103, '100103@ivd.edu.mx', NULL, NULL, NULL, 1),
(3708, 'Brett Crist McKenzie', 100106, '100106@ivd.edu.mx', NULL, NULL, NULL, 1),
(3709, 'Sue Lindgren Okuneva', 100105, '100105@ivd.edu.mx', NULL, NULL, NULL, 1),
(3710, 'Bernie Braun Crona', 100108, '100108@ivd.edu.mx', NULL, NULL, NULL, 1),
(3711, 'Lesley Vandervort Abbott', 100104, '100104@ivd.edu.mx', NULL, NULL, NULL, 1),
(3712, 'Dean Ritchie Fahey', 100107, '100107@ivd.edu.mx', NULL, NULL, NULL, 1),
(3713, 'Lavern Gleichner Bartell', 100109, '100109@ivd.edu.mx', NULL, NULL, NULL, 1),
(3714, 'Omar Bashirian Schamberger', 100111, '100111@ivd.edu.mx', NULL, NULL, NULL, 1),
(3715, 'Reggie Howe Jenkins', 100112, '100112@ivd.edu.mx', NULL, NULL, NULL, 1),
(3716, 'Tracee Padberg Langworth', 100110, '100110@ivd.edu.mx', NULL, NULL, NULL, 1),
(3717, 'Blair Tillman Wolff', 100113, '100113@ivd.edu.mx', NULL, NULL, NULL, 1),
(3718, 'Krystyna Macejkovic Wiegand', 100114, '100114@ivd.edu.mx', NULL, NULL, NULL, 1),
(3719, 'Carmelo Hirthe Schuster', 100115, '100115@ivd.edu.mx', NULL, NULL, NULL, 1),
(3720, 'Roberto Oberbrunner Schulist', 100117, '100117@ivd.edu.mx', NULL, NULL, NULL, 1),
(3721, 'Jacklyn Paucek Johnson', 100116, '100116@ivd.edu.mx', NULL, NULL, NULL, 1),
(3722, 'Maximo Goldner Littel', 100118, '100118@ivd.edu.mx', NULL, NULL, NULL, 1),
(3723, 'Thanh King Reynolds', 100119, '100119@ivd.edu.mx', NULL, NULL, NULL, 1),
(3724, 'Stephnie Mann Stark', 100120, '100120@ivd.edu.mx', NULL, NULL, NULL, 1),
(3725, 'Delila Spinka Schaefer', 300002, '300002@ivd.edu.mx', NULL, NULL, NULL, 1),
(3726, 'Ellan Parisian Gusikowski', 300003, '300003@ivd.edu.mx', NULL, NULL, NULL, 1),
(3727, 'Joshua Wyman Graham', 300004, '300004@ivd.edu.mx', NULL, NULL, NULL, 1),
(3728, 'Bernardo Gomez Romero', 300007, '300007@ivd.edu.mx', NULL, NULL, NULL, 1),
(3729, 'Gonzalo Connelly Gibson', 300005, '300005@ivd.edu.mx', NULL, NULL, NULL, 1),
(3730, 'Nenita Ratke Fadel', 300006, '300006@ivd.edu.mx', NULL, NULL, NULL, 1),
(3731, 'Bernardo Gomez Romero', 300008, '300008@ivd.edu.mx', NULL, NULL, NULL, 1),
(3732, 'Juan Peréz López', 100122, '100122@ivd.edu.mx', NULL, NULL, NULL, 1),
(3733, 'Oscar Villeda null', 100121, '100121@ivd.edu.mx', NULL, NULL, NULL, 1);

--
-- Triggers `usuario`
--
DELIMITER $$
CREATE TRIGGER `activarUsuario` BEFORE INSERT ON `usuario` FOR EACH ROW SET NEW.Alumno_activo = 1
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `asignarRol` AFTER INSERT ON `usuario` FOR EACH ROW BEGIN 

DECLARE id_rol INT; 

IF NEW.Matricula LIKE '1%' THEN 
	SET id_rol = 2; 
ELSEIF NEW.Matricula LIKE '3%' THEN 
	SET id_rol = 1; 
END IF; 

INSERT INTO tiene (IDUsuario, IDRol) VALUES (NEW.IDUsuario, id_rol); END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `borrarRolUsuario` AFTER DELETE ON `usuario` FOR EACH ROW DELETE FROM tiene
WHERE IDUsuario = OLD.IDUsuario
$$
DELIMITER ;

--
-- Indexes for dumped tables
--

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
-- Indexes for table `tiene`
--
ALTER TABLE `tiene`
  ADD PRIMARY KEY (`IDTiene`),
  ADD UNIQUE KEY `IDTiene` (`IDTiene`,`IDUsuario`,`IDRol`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`IDUsuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cicloescolar`
--
ALTER TABLE `cicloescolar`
  MODIFY `IDCiclo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

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
  MODIFY `IDMateria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=172;

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
-- AUTO_INCREMENT for table `tiene`
--
ALTER TABLE `tiene`
  MODIFY `IDTiene` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18942;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `IDUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3734;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
