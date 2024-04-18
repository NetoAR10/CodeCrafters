const express = require('express');
const isAuth = require('../util/is-auth');
const csvController = require('../controllers/csv.controller');
const router = express.Router();

router.get('/upload', isAuth, csvController.getUploadCsv);
router.post('/upload', isAuth, csvController.postUploadCsv);

module.exports = router;
