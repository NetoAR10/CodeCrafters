const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');

const usuariosController = require('../controllers/usuario.controller');

router.get('/', isAuth, usuariosController.get_home);


module.exports = router;