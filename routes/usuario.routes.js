const express = require ('express');
const router = express.Router();
const isAuth = require('../util/is-auth');

const usuariosController = require('../controllers/usuario.controller');

router.get('/login', usuariosController.get_login);
router.post('/login', usuariosController.post_login);
router.get('/logout', usuariosController.get_logout);
router.get('/register', isAuth, usuariosController.get_signup);
router.post('/register', isAuth, usuariosController.post_signup);
router.get('/forgot_password', usuariosController.get_forgot);

module.exports = router;