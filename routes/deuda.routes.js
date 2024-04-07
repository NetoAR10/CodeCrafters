
const express = require('express');
const router = express.Router();
const deudaController = require('../controllers/deuda.controller');

router.get('/', deudaController.getCrearDeuda); 
module.exports = router;
