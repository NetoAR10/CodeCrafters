
const express = require('express');
const router = express.Router();
const deudaController = require('../controllers/deudaController');

// Existing or new routes for Deuda handling can go here
router.get('/', deudaController.getCrearDeuda);  // Example of a possible listing or managing route for Deudas

module.exports = router;
