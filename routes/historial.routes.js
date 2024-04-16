const express = require('express');
const router = express.Router();
const pagoController = require('../controllers/historial.controller');
const rbacMiddleware = require('../util/rbac');

router.get('/descargar-csv', pagoController.descargarCsv);
router.get('/historial-pagos', pagoController.mostrarHistorialPago);

module.exports = router;
