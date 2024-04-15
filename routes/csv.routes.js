const express = require('express');
const router = express.Router();
const csvController = require('../controllers/csv.controller');
const canUploadCSV = require('../util/can-upload-csv');

router.get('/upload', canUploadCSV, csvController.getUploadPage);
router.post('/upload', canUploadCSV, csvController.uploadCSV, csvController.handleUpload);

module.exports = router;
