-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 30, 2024 at 06:02 AM
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
(43, 'Enero - Junio 2019', '2019-01-14', '2019-06-14', 0, 300, 1),
(44, 'Julio - Diciembre 2019', '2019-07-15', '2019-12-13', 0, 350, 2),
(45, 'Enero - Junio 2020', '2020-01-13', '2020-06-12', 0, 425, 3),
(46, 'Julio - Diciembre 2020', '2020-07-13', '2020-12-11', 0, 450, 4),
(47, 'Enero - Junio 2021', '2021-01-11', '2021-06-11', 0, 480, 5),
(48, 'Julio - Diciembre 2021', '2021-07-12', '2021-12-10', 0, 500, 6),
(49, 'Enero - Junio 2022', '2022-01-10', '2022-06-10', 0, 525, 7),
(50, 'Julio - Diciembre 2022', '2022-07-11', '2022-12-09', 0, 525, 8),
(51, 'Enero - Junio 2023', '2023-01-09', '2023-06-09', 0, 550, 9),
(52, 'Julio - Diciembre 2023', '2023-07-10', '2023-12-08', 0, 550, 10),
(53, 'Enero - Junio 2024', '2024-01-08', '2024-06-08', 1, 600, 13),
(54, 'Julio - Diciembre 2024', '2024-07-08', '2024-12-13', 0, 600, 14);

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
(179, 'Taller de diseño', 7.00, 309),
(180, 'Confección de prendas infantiles', 5.00, 317),
(181, 'Taller para representación', 6.00, 325),
(182, 'Confección de representación', 9.00, 333),
(183, 'Diseño de diseño', 8.00, 341),
(184, 'Fundamentos para prendas masculinas', 8.00, 349),
(185, 'Diseño de diseño', 5.00, 307),
(186, 'Teoría para joyería', 9.00, 315),
(187, 'Teoría de representación', 9.00, 323),
(188, 'Teoría para mercadotecnia', 8.00, 331),
(189, 'Confección para prendas básicas', 6.00, 339),
(190, 'Fundamentos para textiles', 9.00, 347);

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
(2, 28, 6, 782.83, '2024-03-09', 'Transferencia', 'Banco C', 'Pago realizado satisfactoriamente'),
(3, 14, 19, 230.57, '2024-03-09', 'Efectivo', 'N/A', 'Pago realizado satisfactoriamente'),
(4, 36, 19, 256.85, '2024-03-09', 'Efectivo', 'Banco A', 'Pago realizado satisfactoriamente'),
(5, 46, 25, 336.57, '2024-03-09', 'Transferencia', 'Banco A', 'Pago realizado satisfactoriamente'),
(6, 9, 9, 862.11, '2024-03-09', 'Transferencia', 'Banco A', 'Pago realizado satisfactoriamente'),
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
(20, 13, 9, 385.07, '2024-03-09', 'Efectivo', 'Banco B', 'Pago realizado satisfactoriamente'),
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
(74, 179, 29, 50, 33),
(75, 180, 29, 50, 33),
(76, 181, 29, 50, 33),
(77, 181, 29, 50, 33),
(78, 182, 29, 50, 33),
(79, 183, 29, 50, 33),
(80, 184, 29, 50, 33),
(81, 185, 29, 10, 34),
(82, 186, 29, 10, 34),
(83, 186, 29, 10, 34),
(84, 187, 29, 10, 34),
(85, 188, 29, 10, 34),
(86, 189, 29, 10, 34),
(87, 190, 29, 10, 34),
(88, 179, 29, 50, 33),
(89, 180, 29, 50, 33),
(90, 181, 29, 50, 33),
(91, 181, 29, 50, 33),
(92, 182, 29, 50, 33),
(93, 183, 29, 50, 33),
(94, 184, 29, 50, 33),
(95, 179, 29, 50, 33),
(96, 180, 29, 50, 33),
(97, 181, 29, 50, 33),
(98, 181, 29, 50, 33),
(99, 182, 29, 50, 33),
(100, 183, 29, 50, 33),
(101, 184, 29, 50, 33),
(102, 179, 29, 50, 33),
(103, 180, 29, 50, 33),
(104, 181, 29, 50, 33),
(105, 181, 29, 50, 33),
(106, 182, 29, 50, 33),
(107, 183, 29, 50, 33),
(108, 184, 29, 50, 33),
(109, 179, 29, 50, 33),
(110, 180, 29, 50, 33),
(111, 181, 29, 50, 33),
(112, 181, 29, 50, 33),
(113, 182, 29, 50, 33),
(114, 183, 29, 50, 33),
(115, 184, 29, 50, 33),
(116, 179, 29, 50, 33),
(117, 180, 29, 50, 33),
(118, 181, 29, 50, 33),
(119, 181, 29, 50, 33),
(120, 182, 29, 50, 33),
(121, 183, 29, 50, 33),
(122, 184, 29, 50, 33),
(123, 179, 29, 50, 33),
(124, 180, 29, 50, 33),
(125, 181, 29, 50, 33),
(126, 181, 29, 50, 33),
(127, 182, 29, 50, 33),
(128, 183, 29, 50, 33),
(129, 184, 29, 50, 33),
(130, 179, 29, 50, 33),
(131, 180, 29, 50, 33),
(132, 181, 29, 50, 33),
(133, 181, 29, 50, 33),
(134, 182, 29, 50, 33),
(135, 183, 29, 50, 33),
(136, 184, 29, 50, 33);

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
(2, 34, 1),
(3, 38, 1),
(4, 35, 1),
(5, 36, 2),
(6, 37, 3),
(7, 39, 2),
(136, 304, 1),
(137, 303, 1),
(140, 305, 1),
(141, 307, 1);

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
(26, 'Arturo', 1275427, 'arturo@gmail.com', '$2a$12$medFPjiMnK8DaJK.1eicveqN2e9c3jCCL1EcfwPRn4/ABZpXv6MKS', 0, 0, 1),
(27, 'ejemplo', 123456789, 'ejemplo@gmail.com', '$2a$12$Jf5YITGVYsV31hG3cyCdWOBJb5AVrTyQp/OhBWYsctRKQJUx5QeR2', 0, 0, NULL),
(28, 'Roberta Espinoza', 200001, 'roberta@example.com', 'contraseñaRoberta', 0, 0, NULL),
(29, 'Miguel Ángel Torres', 200002, 'miguel@example.com', 'contraseñaMiguel', 0, 0, NULL),
(30, 'Samantha Ruiz', 200003, 'samantha@example.com', 'contraseñaSamantha', 0, 0, NULL),
(31, 'Alejandro Mendoza', 200004, 'alejandro@example.com', 'contraseñaAlejandro', 0, 0, NULL),
(32, 'Patricia Solano', 200005, 'patricia@example.com', 'contraseñaPatricia', 0, 0, NULL),
(33, 'Ernesto Acosta', 100008, 'neto@gmail.com', '$2a$12$z8h.xsnjJZjAoU5vhBjDlOBiKZ6KP6Us4a3F.eVkUIG456dFkrrwm', 50, 13649821, 0),
(34, 'alumno', 100006, 'alumno@edu.mx', '$2a$12$kCBfPQ395MgXIu/ii5IxYOamqZPsf28Q.RRbU9isS95e76NpU62da', 10, 123456781, 1),
(35, 'Levi', 100007, 'emilio.levi@hotmail.com', '$2a$12$pzFMWY5fRoa3uqNMNcRvKeptpRzLQGeOdA4yIdQaMpQ69p8jjgmjC', 0, 0, 1),
(36, 'Arturo', 1275427, 'arturo@gmail.com', '$2a$12$38i/IeL3JGN4gJ2q4Friu.I54cHkhWJWziHi4NZ4/rJ8HIfg9ZCt.', 0, 0, 1),
(37, 'daniel', 1234, 'hola@gmail.com', '$2a$12$yc02XJjfPceyDI39jzG6luAS3jxFCkzkj4s9SfpaLSZqE5ix6Wn6S', 0, 0, 1),
(38, 'wqesd', 12313, 'test@edu.mx', '$2a$12$DueRfYp7c86EQqtjGbGqf.Mj.iVtk3iUYwad.gBwX3nSqsrpU0Um6', 12, 2131231, 1),
(39, 'lector', 12321, 'lector@edu.mx', '$2a$12$4xx64y6THqvvjDhfKaAnGewdwZssZn3aJiOIq3PbdgkulMW44JGAa', 111, 111, 1),
(303, 'Bernardo Gomez Romero', 300011, '300011@gmail.com', NULL, NULL, NULL, 1),
(304, 'test test test', 300010, 'institucional@gmail.com', NULL, NULL, NULL, 1),
(305, 'Bernardo Prueba Prueba', 300012, '300012@gmail.com', NULL, NULL, NULL, 1),
(307, 'Bernardo Test Email', 300013, 'bernardogr95@gmail.com', NULL, NULL, NULL, 1);

--
-- Triggers `usuario`
--
DELIMITER $$
CREATE TRIGGER `activarUsuario` BEFORE INSERT ON `usuario` FOR EACH ROW SET NEW.Alumno_activo = 1
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `asignarRol` AFTER INSERT ON `usuario` FOR EACH ROW BEGIN DECLARE id_rol INT; IF NEW.Matricula LIKE '1%' THEN SET id_rol = 2; ELSEIF NEW.Matricula LIKE '3%' THEN SET id_rol = 1; END IF; INSERT INTO tiene (IDUsuario, IDRol) VALUES (NEW.IDUsuario, id_rol); END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `borrarRolUsuario` AFTER DELETE ON `usuario` FOR EACH ROW DELETE FROM tiene WHERE IDUsuario = OLD.IDUsuario
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
  ADD PRIMARY KEY (`IDMateria`),
  ADD UNIQUE KEY `IDMateriaEXT` (`IDMateriaEXT`);

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
  ADD PRIMARY KEY (`IDTiene`);

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
  MODIFY `IDCiclo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

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
  MODIFY `IDMateria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=191;

--
-- AUTO_INCREMENT for table `pago`
--
ALTER TABLE `pago`
  MODIFY `IDPago` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `pertenece`
--
ALTER TABLE `pertenece`
  MODIFY `IDPertenece` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=137;

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
  MODIFY `IDTiene` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=142;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `IDUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=309;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
