const express = require('express');
const router = express.Router();
const reportsController = require('../controllers/reportes.controller');

router.get('/api/reports', reportsController.getReportData);
router.get('/', reportsController.renderReportPage);

module.exports = router;
