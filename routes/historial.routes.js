const express = require('express');
const router = express.Router();
const historialController = require('../controllers/historial.controller');
const isAuth = require('../util/is-auth');
const verificaRol = require('../util/verificaRol');

// Asegúrate de que los nombres de las funciones del controlador coincidan con los exportados
router.get('/todos-los-pagos', isAuth, verificaRol(['administrador']), historialController.mostrarHistorialPagoTodos);
router.get('/mi-historial', isAuth, verificaRol(['alumno']), historialController.mostrarHistorialPagoPropio);

module.exports = router;
