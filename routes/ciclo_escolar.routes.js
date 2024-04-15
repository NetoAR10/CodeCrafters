const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const cicloEscolarController = require('../controllers/ciclo_escolar.controller');
const canResgisterCiclo = require('../util/can-register-ciclo');

router.get('/ciclo_escolar', isAuth, canResgisterCiclo, cicloEscolarController.get_nuevo_ciclo);
router.post('/ciclo_escolar', isAuth, cicloEscolarController.post_nuevo_ciclo);

module.exports = router;