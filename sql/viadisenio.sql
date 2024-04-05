-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 04, 2024 at 01:00 AM
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
-- Table structure for table `Causan`
--

CREATE TABLE `Causan` (
  `IDCausan` int(11) NOT NULL,
  `IDDeuda` int(11) DEFAULT NULL,
  `IDMateria` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Causan`
--

INSERT INTO `Causan` (`IDCausan`, `IDDeuda`, `IDMateria`) VALUES
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
-- Table structure for table `CicloEscolar`
--

CREATE TABLE `CicloEscolar` (
  `IDCiclo` int(11) NOT NULL,
  `Ciclo` varchar(30) DEFAULT NULL,
  `Fecha_Inicio` datetime DEFAULT NULL,
  `Fecha_Fin` datetime DEFAULT NULL,
  `Ciclo_activo` tinyint(1) DEFAULT NULL,
  `Precio_credito` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `CicloEscolar`
--

INSERT INTO `CicloEscolar` (`IDCiclo`, `Ciclo`, `Fecha_Inicio`, `Fecha_Fin`, `Ciclo_activo`, `Precio_credito`) VALUES
(1, '2024-1', '2024-01-01 00:00:00', '2024-06-29 00:00:00', 1, 1249),
(2, '2024-2', '2024-06-30 00:00:00', '2024-12-27 00:00:00', 0, 1177),
(3, '2024-3', '2024-12-28 00:00:00', '2025-06-26 00:00:00', 1, 1481),
(4, '2024-4', '2025-06-27 00:00:00', '2025-12-24 00:00:00', 0, 1816),
(5, '2024-5', '2025-12-25 00:00:00', '2026-06-23 00:00:00', 1, 1178),
(6, '2024-6', '2026-06-24 00:00:00', '2026-12-21 00:00:00', 0, 1664),
(7, '2024-7', '2026-12-22 00:00:00', '2027-06-20 00:00:00', 1, 1356),
(8, '2024-8', '2027-06-21 00:00:00', '2027-12-18 00:00:00', 0, 1089),
(9, '2024-9', '2027-12-19 00:00:00', '2028-06-16 00:00:00', 1, 1170),
(10, '2024-10', '2028-06-17 00:00:00', '2028-12-14 00:00:00', 0, 1204),
(11, '2024-11', '2028-12-15 00:00:00', '2029-06-13 00:00:00', 1, 1782),
(12, '2024-12', '2029-06-14 00:00:00', '2029-12-11 00:00:00', 0, 1621),
(13, '2024-13', '2029-12-12 00:00:00', '2030-06-10 00:00:00', 1, 1208),
(14, '2024-14', '2030-06-11 00:00:00', '2030-12-08 00:00:00', 0, 1775),
(15, '2024-15', '2030-12-09 00:00:00', '2031-06-07 00:00:00', 1, 1958),
(16, '2024-16', '2031-06-08 00:00:00', '2031-12-05 00:00:00', 0, 1914),
(17, '2024-17', '2031-12-06 00:00:00', '2032-06-03 00:00:00', 1, 1586),
(18, '2024-18', '2032-06-04 00:00:00', '2032-12-01 00:00:00', 0, 1507),
(19, '2024-19', '2032-12-02 00:00:00', '2033-05-31 00:00:00', 1, 1193),
(20, '2024-20', '2033-06-01 00:00:00', '2033-11-28 00:00:00', 0, 1917),
(21, '2024-21', '2033-11-29 00:00:00', '2034-05-28 00:00:00', 1, 1510),
(22, '2024-22', '2034-05-29 00:00:00', '2034-11-25 00:00:00', 0, 1048),
(23, '2024-23', '2034-11-26 00:00:00', '2035-05-25 00:00:00', 1, 1862),
(24, '2024-24', '2035-05-26 00:00:00', '2035-11-22 00:00:00', 0, 1641),
(25, '2024-25', '2035-11-23 00:00:00', '2036-05-21 00:00:00', 1, 1785);

-- --------------------------------------------------------

--
-- Table structure for table `Contiene`
--

CREATE TABLE `Contiene` (
  `IDContiene` int(11) NOT NULL,
  `IDRol` int(11) DEFAULT NULL,
  `IDPrivilegios` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Contiene`
--

INSERT INTO `Contiene` (`IDContiene`, `IDRol`, `IDPrivilegios`) VALUES
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
-- Table structure for table `Deuda`
--

CREATE TABLE `Deuda` (
  `IDDeuda` int(11) NOT NULL,
  `IDUsuario` int(11) DEFAULT NULL,
  `Total_deuda` float DEFAULT NULL,
  `Plan_pago` varchar(50) DEFAULT NULL,
  `Concepto` varchar(50) DEFAULT NULL,
  `Mes` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Deuda`
--

INSERT INTO `Deuda` (`IDDeuda`, `IDUsuario`, `Total_deuda`, `Plan_pago`, `Concepto`, `Mes`) VALUES
(1, 39, 7626.82, 'Mensual', 'Colegiatura', 'Julio'),
(2, 46, 9132.64, 'Bimestral', 'Colegiatura', 'Abril'),
(3, 8, 502.38, 'Bimestral', 'Colegiatura', 'Diciembre'),
(4, 27, 1156.18, 'Trimestral', 'Material', 'Julio'),
(5, 12, 3720.85, 'Mensual', 'Colegiatura', 'Mayo'),
(6, 20, 4669.78, 'Bimestral', 'Inscripción', 'Noviembre'),
(7, 16, 2601.81, 'Mensual', 'Material', 'Diciembre'),
(8, 26, 6074.04, 'Bimestral', 'Inscripción', 'Abril'),
(9, 21, 811.57, 'Bimestral', 'Material', 'Septiembre'),
(10, 7, 5680.25, 'Mensual', 'Material', 'Abril'),
(11, 29, 4305.47, 'Bimestral', 'Colegiatura', 'Octubre'),
(12, 1, 3132.31, 'Trimestral', 'Inscripción', 'Diciembre'),
(13, 19, 7084.32, 'Trimestral', 'Inscripción', 'Diciembre'),
(14, 47, 1503.99, 'Mensual', 'Inscripción', 'Julio'),
(15, 32, 5036.65, 'Trimestral', 'Inscripción', 'Abril'),
(16, 31, 5705.96, 'Trimestral', 'Material', 'Septiembre'),
(17, 39, 8882.99, 'Bimestral', 'Colegiatura', 'Mayo'),
(18, 37, 4729.32, 'Bimestral', 'Colegiatura', 'Julio'),
(19, 33, 8554.31, 'Bimestral', 'Material', 'Junio'),
(20, 31, 5020.48, 'Bimestral', 'Material', 'Junio'),
(21, 41, 5603.88, 'Mensual', 'Inscripción', 'Febrero'),
(22, 28, 8166.53, 'Trimestral', 'Inscripción', 'Mayo'),
(23, 43, 2381.81, 'Mensual', 'Material', 'Marzo'),
(24, 34, 5569.51, 'Mensual', 'Colegiatura', 'Mayo'),
(25, 24, 6616.12, 'Trimestral', 'Colegiatura', 'Julio');

-- --------------------------------------------------------

--
-- Table structure for table `Inscribe`
--

CREATE TABLE `Inscribe` (
  `IDInscribe` int(11) NOT NULL,
  `IDUsuario` int(11) DEFAULT NULL,
  `IDMateria` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Inscribe`
--

INSERT INTO `Inscribe` (`IDInscribe`, `IDUsuario`, `IDMateria`) VALUES
(1, 18, 95),
(2, 15, 3),
(3, 35, 89),
(4, 45, 52),
(5, 50, 42),
(6, 47, 5),
(7, 11, 72),
(8, 23, 73),
(9, 2, 100),
(10, 32, 60),
(11, 7, 79),
(12, 8, 30),
(13, 11, 49),
(14, 42, 33),
(15, 16, 3),
(16, 44, 29),
(17, 29, 63),
(18, 26, 89),
(19, 22, 44),
(20, 32, 96),
(21, 41, 17),
(22, 11, 6),
(23, 44, 46),
(24, 12, 8),
(25, 24, 64);

-- --------------------------------------------------------

--
-- Table structure for table `Materias`
--

CREATE TABLE `Materias` (
  `IDMateria` int(11) NOT NULL,
  `Nombre_mat` varchar(50) DEFAULT NULL,
  `Creditos` float DEFAULT NULL,
  `Semestre` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Materias`
--

INSERT INTO `Materias` (`IDMateria`, `Nombre_mat`, `Creditos`, `Semestre`) VALUES
(1, 'Filosofía 0', 10, 3),
(2, 'Física 1', 3, 2),
(3, 'Filosofía 2', 2, 7),
(4, 'Educación Física 3', 1, 3),
(5, 'Química 4', 7, 8),
(6, 'Educación Física 5', 6, 4),
(7, 'Física 6', 4, 8),
(8, 'Filosofía 7', 1, 3),
(9, 'Matemáticas 8', 7, 4),
(10, 'Biología 9', 3, 3),
(11, 'Geografía 10', 4, 8),
(12, 'Inglés 11', 3, 3),
(13, 'Biología 12', 8, 5),
(14, 'Biología 13', 10, 4),
(15, 'Inglés 14', 6, 2),
(16, 'Literatura 15', 2, 2),
(17, 'Geografía 16', 10, 6),
(18, 'Inglés 17', 9, 6),
(19, 'Biología 18', 5, 4),
(20, 'Inglés 19', 7, 5),
(21, 'Biología 20', 5, 3),
(22, 'Literatura 21', 3, 8),
(23, 'Geografía 22', 1, 7),
(24, 'Física 23', 6, 6),
(25, 'Química 24', 4, 5);

-- --------------------------------------------------------

--
-- Table structure for table `Pago`
--

CREATE TABLE `Pago` (
  `IDPago` int(11) NOT NULL,
  `IDUsuario` int(11) DEFAULT NULL,
  `IDDueda` int(11) DEFAULT NULL,
  `Cant_pagada` float DEFAULT NULL,
  `Fecha_de_pago` datetime DEFAULT NULL,
  `Metodo` varchar(50) DEFAULT NULL,
  `Banco` varchar(30) DEFAULT NULL,
  `Nota` varchar(255) DEFAULT NULL,
  `Prorroga` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Pago`
--

INSERT INTO `Pago` (`IDPago`, `IDUsuario`, `IDDueda`, `Cant_pagada`, `Fecha_de_pago`, `Metodo`, `Banco`, `Nota`, `Prorroga`) VALUES
(1, 7, 13, 863.83, '2024-03-09 00:22:13', 'Efectivo', 'Banco A', 'Pago realizado satisfactoriamente', NULL),
(2, 28, 6, 782.83, '2024-03-09 00:22:13', 'Transferencia', 'Banco C', 'Pago realizado satisfactoriamente', NULL),
(3, 14, 19, 230.57, '2024-03-09 00:22:13', 'Efectivo', 'N/A', 'Pago realizado satisfactoriamente', NULL),
(4, 36, 19, 256.85, '2024-03-09 00:22:13', 'Efectivo', 'Banco A', 'Pago realizado satisfactoriamente', NULL),
(5, 46, 25, 336.57, '2024-03-09 00:22:13', 'Transferencia', 'Banco A', 'Pago realizado satisfactoriamente', NULL),
(6, 9, 9, 862.11, '2024-03-09 00:22:13', 'Transferencia', 'Banco A', 'Pago realizado satisfactoriamente', NULL),
(7, 49, 12, 681.27, '2024-03-09 00:22:13', 'Transferencia', 'Banco C', 'Pago realizado satisfactoriamente', NULL),
(8, 25, 25, 756.99, '2024-03-09 00:22:13', 'Efectivo', 'Banco A', 'Pago realizado satisfactoriamente', NULL),
(9, 38, 13, 943.02, '2024-03-09 00:22:13', 'Efectivo', 'Banco C', 'Pago realizado satisfactoriamente', NULL),
(10, 20, 5, 718.49, '2024-03-09 00:22:13', 'Tarjeta de crédito', 'N/A', 'Pago realizado satisfactoriamente', NULL),
(11, 43, 1, 218.17, '2024-03-09 00:22:13', 'Efectivo', 'N/A', 'Pago realizado satisfactoriamente', NULL),
(12, 21, 13, 350.46, '2024-03-09 00:22:13', 'Tarjeta de crédito', 'Banco A', 'Pago realizado satisfactoriamente', NULL),
(13, 47, 6, 821.74, '2024-03-09 00:22:13', 'Tarjeta de crédito', 'Banco B', 'Pago realizado satisfactoriamente', NULL),
(14, 6, 20, 184.98, '2024-03-09 00:22:13', 'Efectivo', 'Banco C', 'Pago realizado satisfactoriamente', NULL),
(15, 15, 3, 330.61, '2024-03-09 00:22:13', 'Efectivo', 'N/A', 'Pago realizado satisfactoriamente', NULL),
(16, 42, 9, 176.34, '2024-03-09 00:22:13', 'Transferencia', 'N/A', 'Pago realizado satisfactoriamente', NULL),
(17, 17, 14, 281.41, '2024-03-09 00:22:13', 'Efectivo', 'Banco B', 'Pago realizado satisfactoriamente', NULL),
(18, 23, 7, 833.51, '2024-03-09 00:22:13', 'Efectivo', 'Banco A', 'Pago realizado satisfactoriamente', NULL),
(19, 49, 14, 181.81, '2024-03-09 00:22:13', 'Transferencia', 'Banco C', 'Pago realizado satisfactoriamente', NULL),
(20, 13, 9, 385.07, '2024-03-09 00:22:13', 'Efectivo', 'Banco B', 'Pago realizado satisfactoriamente', NULL),
(21, 3, 19, 500.07, '2024-03-09 00:22:13', 'Transferencia', 'Banco C', 'Pago realizado satisfactoriamente', NULL),
(22, 30, 15, 269.2, '2024-03-09 00:22:13', 'Efectivo', 'Banco A', 'Pago realizado satisfactoriamente', NULL),
(23, 3, 7, 849.94, '2024-03-09 00:22:13', 'Transferencia', 'Banco B', 'Pago realizado satisfactoriamente', NULL),
(24, 18, 4, 176.41, '2024-03-09 00:22:13', 'Efectivo', 'Banco C', 'Pago realizado satisfactoriamente', NULL),
(25, 12, 2, 713.11, '2024-03-09 00:22:13', 'Efectivo', 'Banco A', 'Pago realizado satisfactoriamente', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Pertenece`
--

CREATE TABLE `Pertenece` (
  `IDPertenece` int(11) NOT NULL,
  `IDMateria` int(11) DEFAULT NULL,
  `IDCiclo` int(11) DEFAULT NULL,
  `Beca` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Pertenece`
--

INSERT INTO `Pertenece` (`IDPertenece`, `IDMateria`, `IDCiclo`, `Beca`) VALUES
(1, 63, 4, 1),
(2, 86, 1, 1),
(3, 76, 4, 1),
(4, 92, 1, 0),
(5, 88, 4, 1),
(6, 82, 2, 0),
(7, 98, 1, 1),
(8, 34, 7, 1),
(9, 32, 2, 0),
(10, 76, 4, 0),
(11, 44, 3, 0),
(12, 90, 2, 0),
(13, 20, 5, 1),
(14, 70, 6, 1),
(15, 28, 2, 1),
(16, 56, 1, 0),
(17, 89, 6, 1),
(18, 81, 8, 0),
(19, 61, 5, 1),
(20, 85, 7, 0),
(21, 99, 8, 0),
(22, 11, 5, 0),
(23, 82, 8, 0),
(24, 61, 3, 0),
(25, 34, 9, 1);

-- --------------------------------------------------------

--
-- Table structure for table `Privilegios`
--

CREATE TABLE `Privilegios` (
  `IDPrivilegio` int(11) NOT NULL,
  `Actividades` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Privilegios`
--

INSERT INTO `Privilegios` (`IDPrivilegio`, `Actividades`) VALUES
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
-- Table structure for table `Rol`
--

CREATE TABLE `Rol` (
  `IDRol` int(11) NOT NULL,
  `Tipo_rol` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Rol`
--

INSERT INTO `Rol` (`IDRol`, `Tipo_rol`) VALUES
(1, 'Admin'),
(2, 'Alumno'),
(3, 'Lector'),
(4, 'Admin Secundario'),
(5, 'Alumno Avanzado'),
(6, 'Lector Asociado'),
(7, 'Admin de Sistema'),
(8, 'Alumno de Intercambi'),
(9, 'Lector Invitado'),
(10, 'Admin de Red'),
(11, 'Alumno Honorario'),
(12, 'Lector Principal'),
(13, 'Admin de Base de Dat'),
(14, 'Alumno de Posgrado'),
(15, 'Lector Junior'),
(16, 'Admin de Seguridad'),
(17, 'Alumno de Primer Año'),
(18, 'Lector Senior'),
(19, 'Admin de Proyecto'),
(20, 'Alumno Externo'),
(21, 'Lector de Honor'),
(22, 'Admin General'),
(23, 'Alumno de Doctorado'),
(24, 'Lector Especializado'),
(25, 'Admin de Contenidos');

-- --------------------------------------------------------

--
-- Table structure for table `Usuario`
--

CREATE TABLE `Usuario` (
  `IDUsuario` int(11) NOT NULL,
  `Nombre` varchar(255) DEFAULT NULL,
  `Matricula` int(11) DEFAULT NULL,
  `Correo_electronico` varchar(255) DEFAULT NULL,
  `Contrasena` varchar(255) DEFAULT NULL,
  `Beca_actual` varchar(255) DEFAULT NULL,
  `Referencia` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Usuario`
--

INSERT INTO `Usuario` (`IDUsuario`, `Nombre`, `Matricula`, `Correo_electronico`, `Contrasena`, `Beca_actual`, `Referencia`) VALUES
(1, 'Juan', 123456, 'juan@example.com', 'contraseña123', 'Beca A', 'Referencia 1'),
(2, 'María', 234567, 'maria@example.com', 'abc123', 'Beca B', 'Referencia 2'),
(3, 'Carlos', 345678, 'carlos@example.com', 'password', 'Beca C', 'Referencia 3'),
(4, 'Ana', 456789, 'ana@example.com', 'pass123', 'Beca D', 'Referencia 4'),
(5, 'Luis', 567890, 'luis@example.com', 'securepass', 'Beca E', 'Referencia 5'),
(6, 'Laura', 678901, 'laura@example.com', 'userpass', 'Beca F', 'Referencia 6'),
(7, 'Pedro', 789012, 'pedro@example.com', '123abc', 'Beca G', 'Referencia 7'),
(8, 'Sofía', 890123, 'sofia@example.com', 'letmein', 'Beca H', 'Referencia 8'),
(9, 'Daniel', 901234, 'daniel@example.com', 'password123', 'Beca I', 'Referencia 9'),
(10, 'Alejandra', 123, 'alejandra@example.com', 'abc123', 'Beca J', 'Referencia 10'),
(11, 'Javier', 234, 'javier@example.com', 'qwerty', 'Beca K', 'Referencia 11'),
(12, 'Paula', 345, 'paula@example.com', 'password', 'Beca L', 'Referencia 12'),
(13, 'Roberto', 456, 'roberto@example.com', 'pass123', 'Beca M', 'Referencia 13'),
(14, 'Elena', 567, 'elena@example.com', 'securepass', 'Beca N', 'Referencia 14'),
(15, 'Marta', 678, 'marta@example.com', 'userpass', 'Beca O', 'Referencia 15'),
(16, 'Héctor', 789, 'hector@example.com', '123abc', 'Beca P', 'Referencia 16'),
(17, 'Carmen', 890, 'carmen@example.com', 'letmein', 'Beca Q', 'Referencia 17'),
(18, 'Diego', 901, 'diego@example.com', 'password123', 'Beca R', 'Referencia 18'),
(19, 'Ana', 123456789, 'ana2@example.com', 'abc123', 'Beca S', 'Referencia 19'),
(20, 'María', 234567890, 'maria2@example.com', 'qwerty', 'Beca T', 'Referencia 20'),
(21, 'Carlos', 345678901, 'carlos2@example.com', 'password', 'Beca U', 'Referencia 21'),
(22, 'Ana', 456789012, 'ana3@example.com', 'pass123', 'Beca V', 'Referencia 22'),
(23, 'Luis', 567890123, 'luis2@example.com', 'securepass', 'Beca W', 'Referencia 23'),
(24, 'Laura', 678901234, 'laura2@example.com', 'userpass', 'Beca X', 'Referencia 24'),
(25, 'Pedro', 789012345, 'pedro2@example.com', '123abc', 'Beca Y', 'Referencia 25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Causan`
--
ALTER TABLE `Causan`
  ADD PRIMARY KEY (`IDCausan`);

--
-- Indexes for table `CicloEscolar`
--
ALTER TABLE `CicloEscolar`
  ADD PRIMARY KEY (`IDCiclo`);

--
-- Indexes for table `Contiene`
--
ALTER TABLE `Contiene`
  ADD PRIMARY KEY (`IDContiene`);

--
-- Indexes for table `Deuda`
--
ALTER TABLE `Deuda`
  ADD PRIMARY KEY (`IDDeuda`);

--
-- Indexes for table `Inscribe`
--
ALTER TABLE `Inscribe`
  ADD PRIMARY KEY (`IDInscribe`);

--
-- Indexes for table `Materias`
--
ALTER TABLE `Materias`
  ADD PRIMARY KEY (`IDMateria`);

--
-- Indexes for table `Pago`
--
ALTER TABLE `Pago`
  ADD PRIMARY KEY (`IDPago`);

--
-- Indexes for table `Pertenece`
--
ALTER TABLE `Pertenece`
  ADD PRIMARY KEY (`IDPertenece`);

--
-- Indexes for table `Privilegios`
--
ALTER TABLE `Privilegios`
  ADD PRIMARY KEY (`IDPrivilegio`);

--
-- Indexes for table `Rol`
--
ALTER TABLE `Rol`
  ADD PRIMARY KEY (`IDRol`);

--
-- Indexes for table `Usuario`
--
ALTER TABLE `Usuario`
  ADD PRIMARY KEY (`IDUsuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Usuario`
--
ALTER TABLE `Usuario`
  MODIFY `IDUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
