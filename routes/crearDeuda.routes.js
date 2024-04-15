const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const deudaController = require('../controllers/Deuda.controller');

router.get('/crearDeuda', isAuth, deudaController.getCrearDeuda);
router.post('/crearDeuda', isAuth, deudaController.postCrearDeuda);
module.exports = router;
