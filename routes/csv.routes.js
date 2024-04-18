const express = require('express');
const router = express.Router();
const pagoController = require('../controllers/csv.controller');
const multer = require('multer');
const isAuth = require('../util/is-auth');

const upload = multer({ dest: 'uploads/' });

router.get('/upload', isAuth, pagoController.getUpload);
router.post('/upload', isAuth, upload.single('file'), pagoController.postUpload);

module.exports = router;
