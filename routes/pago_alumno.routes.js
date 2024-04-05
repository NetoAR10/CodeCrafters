const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const usuariosController = require('../controllers/usuario.controller');

router.get('/pago', isAuth, (request, response, next) => {
    response.render('pago_alumno');
})

router.get('/pago', isAuth, usuariosController.get_home);

module.exports = router;