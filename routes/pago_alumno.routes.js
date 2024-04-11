const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const usuariosController = require('../controllers/usuario.controller');
const canViewMaterias = require('../util/can-view-materias');

router.get('/pago', isAuth, (request, response, next) => {
    response.render('pago_alumno');
})

router.get('/pago', isAuth, usuariosController.get_homeUser);

module.exports = router;