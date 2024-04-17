const express = require('express');
const csvController = require('../controllers/csv.controller');
const router = express.Router();

router.get('/upload', csvController.getUploadCsv);
router.post('/upload', csvController.postUploadCsv);

module.exports = router;
