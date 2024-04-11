const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const pagoController = require('../controllers/rPago.controller');

router.get('/registrarPago', isAuth,  pagoController.getRegistrarPago);
router.post('/registrarPago', isAuth, pagoController.postRegistrarPago);

module.exports = router;
