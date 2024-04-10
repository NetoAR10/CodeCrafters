const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const canModifyUser = require('../util/can-modify-user')
const canModifyPago = require('../util/can-modify-pago')

const usuariosController = require('../controllers/usuario.controller');

router.get('/', isAuth, usuariosController.get_home);
router.get('/admin', isAuth, canModifyUser, canModifyPago, usuariosController.get_homeAdmin);

module.exports = router;