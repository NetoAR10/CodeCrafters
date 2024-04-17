const express = require('express');
const router = express.Router();
const multer = require('multer');
const csvController = require('../controllers/csv.controller');
const canUploadCSV = require('../util/can-upload-csv'); // Asegúrate de que el path sea correcto

const csvUpload = multer({ dest: 'uploads/' });

router.post('/upload-csv', csvUpload.single('file'), canUploadCSV, csvController.uploadCSV);

module.exports = router;
