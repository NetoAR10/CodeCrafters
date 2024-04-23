const express = require ('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const isActive = require('../util/is-active');

const usuariosController = require('../controllers/usuario.controller');

router.get('/login', usuariosController.get_login);
router.post('/login', usuariosController.post_login);
router.get('/logout', usuariosController.get_logout);
router.get('/register', isAuth, usuariosController.get_signup);
router.post('/register', isAuth, usuariosController.post_signup);

//Restablecer contraseña
router.get('/forgot_password', usuariosController.get_forgot);
router.post('/forgot_password', usuariosController.post_forgot);

module.exports = router;