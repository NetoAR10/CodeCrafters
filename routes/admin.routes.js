const express = require('express');
const router = express.Router();
const cicloEscolarController = require('../controllers/ciclo_escolar.controller');
const canResgisterCiclo = require('../util/can-register-ciclo');
const listaUsuariosController = require('../controllers/lista_usuarios.controller');
const pagoController = require('../controllers/rPago.controller');
const deudaController = require('../controllers/deuda.controller');
const isActive = require('../util/is-active');
const csvController = require('../controllers/csv.controller');
const isAuth = require('../util/is-auth'); 

//Ciclo Escolar
console.log("get_nuevo_ciclo:", cicloEscolarController.get_nuevo_ciclo);
router.get('/ciclo_escolar', isAuth, canResgisterCiclo, isActive, cicloEscolarController.get_nuevo_ciclo);
router.post('/ciclo_escolar', isAuth, isActive, cicloEscolarController.post_nuevo_ciclo);

//Lista de Usuarios
router.get('/usuarios', isAuth, isActive, listaUsuariosController.get_listUsers);
router.get('/usuarios/buscar/:valor_busqueda', isAuth, isActive, listaUsuariosController.get_buscar);
router.get('/usuarios/buscar', isAuth, isActive, listaUsuariosController.get_buscar);
router.post('/usuarios/desactivar', isAuth, isActive, listaUsuariosController.post_desactivar);
router.post('/usuarios/reactivar', isAuth, isActive, listaUsuariosController.post_reactivar);

//Registrar Pago
router.get('/registrarPago', isAuth, isActive, pagoController.getRegistrarPago);
router.post('/registrarPago', isAuth, isActive, pagoController.postRegistrarPago);

//Crear Deuda
router.get('/crearDeuda', isAuth, isActive, deudaController.getCrearDeuda);
router.post('/crearDeuda', isAuth, isActive, deudaController.postCrearDeuda);

//Cargar CSV
router.get('/csv/upload', isAuth,  isActive, csvController.getUploadCsv);
router.post('/csv/upload', isAuth, isActive, csvController.postUploadCsv);

module.exports = router;