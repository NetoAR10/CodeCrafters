const express = require('express');
const router = express.Router();
const pagoController = require('../controllers/pago.controller');

router.get('/historial_pagos/:userID', pagoController.getPaymentHistory);
router.get('/descargar-historial/:userID', pagoController.downloadPaymentHistory);

module.exports = router;
