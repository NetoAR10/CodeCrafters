// routes/paymentRoutes.js

const express = require('express');
const multer = require('multer');
const router = express.Router();
const PaymentController = require('../controllers/PaymentController');

const upload = multer({ dest: 'uploads/' });

router.post('/upload-csv', upload.single('file'), (req, res) => {
  PaymentController.uploadPayments(req.file.path, (err, result) => {
    if (err) {
      res.status(500).send('Error uploading CSV: ' + err.message);
    } else {
      res.send('CSV Uploaded successfully!');
    }
  });
});

module.exports = router;
