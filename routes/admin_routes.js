const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const cicloEscolarController = require('../controllers/ciclo_escolar.controller');
const canResgisterCiclo = require('../util/can-register-ciclo');
const listaUsuariosController = require('../controllers/lista_usuarios.controller');
const pagoController = require('../controllers/rPago.controller');
const deudaController = require('../controllers/Deuda.controller');

//Ciclo Escolar
router.get('/ciclo_escolar', isAuth, canResgisterCiclo, cicloEscolarController.get_nuevo_ciclo);
router.post('/ciclo_escolar', isAuth, cicloEscolarController.post_nuevo_ciclo);

//Lista de Usuarios
router.get('/usuarios', isAuth, listaUsuariosController.get_listUsers);
router.get('/usuarios/buscar/:valor_busqueda', isAuth, listaUsuariosController.get_buscar);

//Registrar Pago
router.get('/registrarPago', isAuth,  pagoController.getRegistrarPago);
router.post('/registrarPago', isAuth, pagoController.postRegistrarPago);

//Crear Deuda
router.get('/crearDeuda', isAuth, deudaController.getCrearDeuda);
router.post('/crearDeuda', isAuth, deudaController.postCrearDeuda);


module.exports = router;