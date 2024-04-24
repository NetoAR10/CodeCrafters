const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const cicloEscolarController = require('../controllers/ciclo_escolar.controller');
const canResgisterCiclo = require('../util/can-register-ciclo');
const listaUsuariosController = require('../controllers/lista_usuarios.controller');
const pagoController = require('../controllers/rPago.controller');
const deudaController = require('../controllers/deuda.controller');
const usuarioController = require('../controllers/usuario.controller');
const pagosDeAlumnosController = require('../controllers/pagos_de_alumnos.controller');
const historialPagosGeneralController = require('../controllers/historialGeneralPagos.controller');
const isActive = require('../util/is-active');
const canViewHistorialTodos = require('../util/can-view-historial-todos');

//Ciclo Escolar
router.get('/ciclo_escolar', isAuth, canResgisterCiclo, isActive, cicloEscolarController.get_nuevo_ciclo);
router.post('/ciclo_escolar', isAuth, isActive, cicloEscolarController.post_nuevo_ciclo);

//Lista de Usuarios
router.get('/usuarios', isAuth, isActive, listaUsuariosController.get_listUsers);
router.get('/usuarios/buscar/:valor_busqueda', isAuth, isActive, listaUsuariosController.get_buscar);
router.get('/usuarios/buscar', isAuth, isActive, listaUsuariosController.get_buscar);
router.post('/usuarios', isAuth, isActive, listaUsuariosController.post_actualizar);

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
router.get('/pagos_de_alumnos/historial/:id', isAuth, isActive, pagosDeAlumnosController.getHistorialDePagos);
router.get('/pagos_de_alumnos/deudas/:id', isAuth, isActive, pagosDeAlumnosController.getHistorialDeDeudas);

// Ruta para Historial de Pagos General
router.get('/historial-pagos-general', isAuth, isActive, canViewHistorialTodos, historialPagosGeneralController.getHistorialPagosGeneral);
router.get('/historial-pagos-general/buscar/:valor_busqueda', isAuth, isActive, canViewHistorialTodos, historialPagosGeneralController.getBuscarHistorial);
router.get('/historial-pagos-general/buscar', isAuth, isActive, canViewHistorialTodos, historialPagosGeneralController.getBuscarHistorial);
router.delete('/historial-pagos-general/borrar/:id', isAuth, isActive, canViewHistorialTodos, historialPagosGeneralController.deletePago);

//Actualizar base de datos
router.post('/usuarios/actualizar', isAuth, isActive, listaUsuariosController.post_actualizar);



module.exports = router;
