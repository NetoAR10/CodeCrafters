// En pago.routes.js
const express = require('express');
const router = express.Router();
const pagoController = require('../controllers/pago.controller');
const isAuth = require('../util/is-auth');
const canViewHistorialTodos = require('../util/can-view-historial-todos');

// Ajusta la ruta para incluir el parámetro :userID
router.get('/historial_pagos/:userID', isAuth, canViewHistorialTodos, pagoController.getPaymentHistory);

// Ajusta la ruta para incluir el parámetro :userID
router.get('/descargar-historial/:userID', isAuth, canViewHistorialTodos, pagoController.downloadPaymentHistory);


module.exports = router;
