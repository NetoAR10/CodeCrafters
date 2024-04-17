const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const isActive = require('../util/is-active');

const usuariosController = require('../controllers/usuario.controller');


router.get('/', isActive, isAuth, usuariosController.get_home);


module.exports = router;