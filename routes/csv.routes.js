const express = require('express');
const router = express.Router();
const csvController = require('../controllers/csv.controller');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

router.get('/upload', csvController.getUpload);
router.post('/upload', upload.single('file'), csvController.postUpload);

module.exports = router;
