const express = require('express');
const router = express.Router();
const csvController = require('../controllers/csv.controller');
const path = require('path');
const canUploadCSV = require(path.resolve(__dirname, '../util/can-upload-csv'));

router.post('/upload-csv', canUploadCSV, csvController.uploadCSV);

module.exports = router;
