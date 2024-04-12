const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const listaUsuariosController = require('../controllers/lista_usuarios.controller')

router.get('/usuarios', isAuth, listaUsuariosController.get_listUsers);

module.exports = router;