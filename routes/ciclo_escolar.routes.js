const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const dashboardController = require('../controllers/ciclo_escolar.controller');
const canResgisterCiclo = require('../util/can-register-ciclo');

router.get('/ciclo_escolar', isAuth, canResgisterCiclo, dashboardController.get_nuevo_ciclo);
router.post('/ciclo_escolar', isAuth, dashboardController.post_nuevo_ciclo);

module.exports = router;