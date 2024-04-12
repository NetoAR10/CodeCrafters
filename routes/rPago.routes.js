const express = require('express');
const router = express.Router();
const pagoController = require('../controllers/pago.controller');

router.post('/registrarPago', pagoController.postRegistrarPago);

module.exports = router;


