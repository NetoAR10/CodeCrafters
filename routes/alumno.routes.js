const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const isActive = require('../util/is-active');
const materiasController = require('../controllers/materias.controller');
const canViewMaterias = require('../util/can-view-materias');
const historialPersonalController = require('../controllers/historialPersonal.controller');
const canViewHistorial = require('../util/can-view-historial');
const deudasPersonal = require('../controllers/deudasPersonal.controller.js');
 
// Materias
router.get('/materias', isAuth, isActive, materiasController.get_materias);
router.post('/materias', isAuth, isActive, materiasController.post_materias);
 
// Contactar Admin
router.post('/contactar_admin', isAuth, isActive, materiasController.post_contactar_admin);
 
// Historial Personal
router.get('/historial-pagos', isAuth, isActive, historialPersonalController.getHistorialPagosPersonal);
 
// Descargar Ficha
//router.get('/descargar-ficha-personal/pdf', isAuth, isActive, historialPersonalController.descargarFichaPagoPersonal);

//Deudas de alumno
router.get('/historial-deudas/', isAuth, isActive, deudasPersonal.getHistorialDeDeudas);


 
module.exports = router;
 
