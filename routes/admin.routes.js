const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const cicloEscolarController = require('../controllers/ciclo_escolar.controller');
const canResgisterCiclo = require('../util/can-register-ciclo');
const listaUsuariosController = require('../controllers/lista_usuarios.controller');
const pagoController = require('../controllers/rPago.controller');
const deudaController = require('../controllers/deuda.controller');
const pagosDeAlumnosController = require('../controllers/pagos_de_alumnos.controller');
const historialPagosGeneralController = require('../controllers/historialGeneralPagos.controller');
const isActive = require('../util/is-active');
const canViewHistorialTodos = require('../util/can-view-historial-todos');
const reporteController = require('../controllers/reports.controller'); 
const canViewReporte = require('../util/can-view-reporte');


//Ciclo Escolar
router.get('/ciclo_escolar', isAuth, canResgisterCiclo, isActive, cicloEscolarController.get_nuevo_ciclo);
router.post('/ciclo_escolar', isAuth, isActive, cicloEscolarController.post_nuevo_ciclo);

//Lista de Usuarios
router.get('/usuarios', isAuth, isActive, listaUsuariosController.get_listUsers);
router.get('/usuarios/buscar/:valor_busqueda', isAuth, isActive, listaUsuariosController.get_buscar);
router.get('/usuarios/buscar', isAuth, isActive, listaUsuariosController.get_buscar);

//Desactivar o Reactivas
router.post('/usuarios/desactivar', isAuth, isActive, listaUsuariosController.post_desactivar);
router.post('/usuarios/reactivar', isAuth, isActive, listaUsuariosController.post_reactivar);

// Modificar Usuario
router.get('/usuarios/acceso_modificar/', isAuth, isActive, listaUsuariosController.get_modificarRol);
router.get('/usuarios/acceso_modificar/:correo', isAuth, isActive, listaUsuariosController.get_modificarRol);
router.post('/usuarios/acceso_modificar/', isAuth, isActive, listaUsuariosController.post_modificarRol);
router.post('/usuarios/acceso_modificar/:correo', isAuth, isActive, listaUsuariosController.post_modificarRol);

//Registrar Pago
router.get('/registrarPago', isAuth, isActive, pagoController.getRegistrarPago);
router.post('/registrarPago', isAuth, isActive, pagoController.postRegistrarPago);
router.get('/pagos/lista', isAuth, isActive, pagoController.getPagos);

//Crear Deuda
router.get('/crearDeuda', isAuth, isActive, deudaController.getCrearDeuda);
router.post('/crearDeuda', isAuth, isActive, deudaController.postCrearDeuda);
router.get('/deudas/lista', isAuth, isActive, deudaController.getDeudas);

//Pagos de Alumnos
router.get('/pagos_de_alumnos', isAuth, isActive, pagosDeAlumnosController.get_listUsers);
router.get('/pagos_de_alumnos/buscar/:valor_busqueda', isAuth, isActive, pagosDeAlumnosController.get_buscar);
router.get('/pagos_de_alumnos/buscar', isAuth, isActive, pagosDeAlumnosController.get_buscar);
router.post('/pagos_de_alumnos/desactivar', isAuth, isActive, pagosDeAlumnosController.post_desactivar);
router.post('/pagos_de_alumnos/reactivar', isAuth, isActive, pagosDeAlumnosController.post_reactivar);
router.get('/pagos_de_alumnos/historial/:id', isAuth, isActive, pagosDeAlumnosController.getHistorialDePagos);

// Ruta para Historial de Pagos General
router.get('/historial-pagos-general', isAuth, isActive, canViewHistorialTodos, historialPagosGeneralController.getHistorialPagosGeneral);

// Ruta para obtener datos de reportes de deudas
router.get('/reportes', isAuth, isActive, canViewReporte, reporteController.getReport);


module.exports = router;