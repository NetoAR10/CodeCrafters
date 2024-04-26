const express = require ('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const listaController = require('../controllers/lista_usuarios.controller');

const usuariosController = require('../controllers/usuario.controller');

router.get('/login', usuariosController.get_login);
router.post('/login', usuariosController.post_login);
router.get('/logout', usuariosController.get_logout);
router.get('/register', isAuth, usuariosController.get_signup);
router.post('/register', isAuth, usuariosController.post_signup);

//Restablecer contraseña
router.get('/forgot_password', usuariosController.get_forgot);
router.post('/forgot_password', usuariosController.post_forgot);
router.get('/change_password/:correo/:resetToken', usuariosController.get_cambiar);
router.get('/change_password', usuariosController.get_cambiar);
router.post('/change_password', usuariosController.post_cambiar);

//Dar de alta usuario
router.get('/dar_alta', listaController.get_darAlta);
router.get('/dar_alta/:correo/:resetToken', listaController.get_darAlta);
router.post('/dar_alta', listaController.post_darAlta);
router.post('/usuarios', listaController.post_actualizar);


module.exports = router;