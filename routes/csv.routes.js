const express = require('express');
const router = express.Router();
const csvController = require('../controllers/csv.controller');
const canUploadCSV = require('../middleware/can-upload-csv');

router.post('/upload-csv', canUploadCSV, csvController.uploadCSV);

module.exports = router;
