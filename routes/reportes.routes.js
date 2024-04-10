// routes/reportes.routes.js
const express = require('express');
const reportesController = require('../controllers/reportes.controller');
const router = express.Router();

router.get('/reporteDeudas', reportesController.displayReport);

module.exports = router;
