const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const materiasController = require('../controllers/materias.controller');
const canViewMaterias = require('../util/can-view-materias');

//Materias
router.get('/materias', isAuth, canViewMaterias, materiasController.get_materias);
router.post('/materias', isAuth, materiasController.post_materias);

//Contactar Admin
router.post('/contactar_admin', isAuth, materiasController.post_contactar_admin);

module.exports = router;