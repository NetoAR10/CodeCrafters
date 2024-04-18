const express = require('express');
const router = express.Router();
const reportsController = require('../controllers/reportes.controller');

router.get('/reports', reportsController.getReportData);

module.exports = router;
