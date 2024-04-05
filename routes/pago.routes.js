// En pago.routes.js
const express = require('express');
const router = express.Router();
const pagoController = require('../controllers/pago.controller');

// Ajusta la ruta para incluir el parámetro :userID
router.get('/historial_pagos/:userID', pagoController.getPaymentHistory);

// Ajusta la ruta para incluir el parámetro :userID
router.get('/descargar-historial/:userID', pagoController.downloadPaymentHistory);


module.exports = router;
