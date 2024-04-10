const express = require('express');
const router = express.Router();

const reportesController = require('../controllers/reportes.controller');

router.get('/reporteDeudas/:userID', reportesController.getReporteDeudas);

module.exports = router;
