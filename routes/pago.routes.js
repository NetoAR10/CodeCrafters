const express = require('express');
const router = express.Router();
const pagoController = require('../controllers/pago.controller');

router.get('/descargar-csv', pagoController.descargarCsv);
router.get('/historial-pagos', pagoController.mostrarHistorialPago);

module.exports = router;
