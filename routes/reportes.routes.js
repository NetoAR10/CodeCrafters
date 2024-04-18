const express = require('express');
const router = express.Router();
const reportesController = require('./reportes.controller');

router.get('/graficas', reportesController.renderChart);

module.exports = router;
