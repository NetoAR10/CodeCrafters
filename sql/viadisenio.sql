-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-04-2024 a las 20:35:29
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `viadisenio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `causan`
--

CREATE TABLE `causan` (
  `IDCausan` int(11) NOT NULL,
  `IDDeuda` int(11) DEFAULT NULL,
  `IDMateria` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `causan`
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
-- Estructura de tabla para la tabla `cicloescolar`
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
-- Volcado de datos para la tabla `cicloescolar`
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
(28, 'Enero - Junio 2024', '2024-04-02', '2024-04-28', 1, 87878),
(29, 'Enero - Junio 2024', '2024-04-02', '2024-04-27', 0, 555),
(30, 'Enero - Junio 2024', '2024-04-02', '2024-05-03', 1, 123),
(31, 'Enero - Junio 2024', '2024-04-02', '2024-04-28', 1, 555),
(32, 'Julio - Diciembre 2024', '2024-07-12', '2024-12-05', 0, 678);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contiene`
--

CREATE TABLE `contiene` (
  `IDContiene` int(11) NOT NULL,
  `IDRol` int(11) DEFAULT NULL,
  `IDPrivilegio` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `contiene`
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
-- Estructura de tabla para la tabla `deuda`
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
-- Volcado de datos para la tabla `deuda`
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
-- Estructura de tabla para la tabla `materias`
--

CREATE TABLE `materias` (
  `IDMateria` int(11) NOT NULL,
  `Nombre_mat` varchar(255) DEFAULT NULL,
  `Creditos` decimal(10,2) DEFAULT NULL,
  `IDMateriaEXT` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `materias`
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
(157, 'Desarrollo de Proyecto Integrador', 13.00, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pago`
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
-- Volcado de datos para la tabla `pago`
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
-- Estructura de tabla para la tabla `pertenece`
--

CREATE TABLE `pertenece` (
  `IDPertenece` int(11) NOT NULL,
  `IDMateria` int(11) DEFAULT NULL,
  `IDCiclo` int(11) DEFAULT NULL,
  `Beca` int(11) DEFAULT NULL,
  `IDUsuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pertenece`
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
-- Estructura de tabla para la tabla `privilegios`
--

CREATE TABLE `privilegios` (
  `IDPrivilegio` int(11) NOT NULL,
  `Actividades` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `privilegios`
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
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `IDRol` int(11) NOT NULL,
  `Tipo_rol` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`IDRol`, `Tipo_rol`) VALUES
(1, 'Administrador'),
(2, 'Alumno'),
(3, 'Lector');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tiene`
--

CREATE TABLE `tiene` (
  `IDTiene` int(11) NOT NULL,
  `IDUsuario` int(11) NOT NULL,
  `IDRol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `tiene`
--

INSERT INTO `tiene` (`IDTiene`, `IDUsuario`, `IDRol`) VALUES
(1, 33, 1),
(2, 34, 2),
(3, 38, 2),
(4, 35, 1),
(5, 36, 1),
(6, 37, 1),
(7, 39, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
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
-- Volcado de datos para la tabla `usuario`
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
(26, 'Arturo', 1275427, 'arturo@gmail.com', '$2a$12$medFPjiMnK8DaJK.1eicveqN2e9c3jCCL1EcfwPRn4/ABZpXv6MKS', 0, 0, NULL),
(27, 'ejemplo', 123456789, 'ejemplo@gmail.com', '$2a$12$Jf5YITGVYsV31hG3cyCdWOBJb5AVrTyQp/OhBWYsctRKQJUx5QeR2', 0, 0, NULL),
(28, 'Roberta Espinoza', 200001, 'roberta@example.com', 'contraseñaRoberta', 0, 0, NULL),
(29, 'Miguel Ángel Torres', 200002, 'miguel@example.com', 'contraseñaMiguel', 0, 0, NULL),
(30, 'Samantha Ruiz', 200003, 'samantha@example.com', 'contraseñaSamantha', 0, 0, NULL),
(31, 'Alejandro Mendoza', 200004, 'alejandro@example.com', 'contraseñaAlejandro', 0, 0, NULL),
(32, 'Patricia Solano', 200005, 'patricia@example.com', 'contraseñaPatricia', 0, 0, NULL),
(33, 'Ernesto Acosta', 1364982, 'neto@gmail.com', '$2a$12$z8h.xsnjJZjAoU5vhBjDlOBiKZ6KP6Us4a3F.eVkUIG456dFkrrwm', 50, 13649821, NULL),
(34, 'alumno', 12345678, 'alumno@edu.mx', '$2a$12$kCBfPQ395MgXIu/ii5IxYOamqZPsf28Q.RRbU9isS95e76NpU62da', 10, 123456781, NULL),
(35, 'Levi', 1234567, 'levi@correo.com', '$2a$12$474BO8FQf3BiTL4JjomlIeUgYnuMZBnS92Dymmyx1tNQXErzxoSFy', 0, 0, NULL),
(36, 'Arturo', 1275427, 'arturo@gmail.com', '$2a$12$38i/IeL3JGN4gJ2q4Friu.I54cHkhWJWziHi4NZ4/rJ8HIfg9ZCt.', 0, 0, NULL),
(37, 'daniel', 1234, 'hola@gmail.com', '$2a$12$yc02XJjfPceyDI39jzG6luAS3jxFCkzkj4s9SfpaLSZqE5ix6Wn6S', 0, 0, NULL),
(38, 'wqesd', 12313, 'test@edu.mx', '$2a$12$DueRfYp7c86EQqtjGbGqf.Mj.iVtk3iUYwad.gBwX3nSqsrpU0Um6', 12, 2131231, NULL),
(39, 'lector', 12321, 'lector@edu.mx', '$2a$12$4xx64y6THqvvjDhfKaAnGewdwZssZn3aJiOIq3PbdgkulMW44JGAa', 111, 111, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cicloescolar`
--
ALTER TABLE `cicloescolar`
  ADD PRIMARY KEY (`IDCiclo`);

--
-- Indices de la tabla `contiene`
--
ALTER TABLE `contiene`
  ADD PRIMARY KEY (`IDContiene`);

--
-- Indices de la tabla `deuda`
--
ALTER TABLE `deuda`
  ADD PRIMARY KEY (`IDDeuda`);

--
-- Indices de la tabla `materias`
--
ALTER TABLE `materias`
  ADD PRIMARY KEY (`IDMateria`);

--
-- Indices de la tabla `pago`
--
ALTER TABLE `pago`
  ADD PRIMARY KEY (`IDPago`);

--
-- Indices de la tabla `pertenece`
--
ALTER TABLE `pertenece`
  ADD PRIMARY KEY (`IDPertenece`);

--
-- Indices de la tabla `privilegios`
--
ALTER TABLE `privilegios`
  ADD PRIMARY KEY (`IDPrivilegio`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`IDRol`);

--
-- Indices de la tabla `tiene`
--
ALTER TABLE `tiene`
  ADD PRIMARY KEY (`IDTiene`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`IDUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cicloescolar`
--
ALTER TABLE `cicloescolar`
  MODIFY `IDCiclo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de la tabla `contiene`
--
ALTER TABLE `contiene`
  MODIFY `IDContiene` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `deuda`
--
ALTER TABLE `deuda`
  MODIFY `IDDeuda` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `materias`
--
ALTER TABLE `materias`
  MODIFY `IDMateria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=158;

--
-- AUTO_INCREMENT de la tabla `pago`
--
ALTER TABLE `pago`
  MODIFY `IDPago` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `pertenece`
--
ALTER TABLE `pertenece`
  MODIFY `IDPertenece` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `privilegios`
--
ALTER TABLE `privilegios`
  MODIFY `IDPrivilegio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `IDRol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de la tabla `tiene`
--
ALTER TABLE `tiene`
  MODIFY `IDTiene` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `IDUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
