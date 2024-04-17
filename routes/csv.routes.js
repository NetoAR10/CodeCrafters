const express = require('express');
const router = express.Router();
const csvController = require('../controllers/csv.controller');

router.post('/upload-csv', csvController.upload.single('csv'), csvController.importCsv);

module.exports = router;
