const express = require ('express');
const router = express.Router();
const isAuth = require('../util/is-auth');

const usuariosController = require('../controllers/usuario.controller');

router.get('/login', usuariosController.get_login);
router.post('/login', usuariosController.post_login);
router.get('/logout', usuariosController.get_logout);
router.get('/signup', usuariosController.get_signup);
router.post('/signup', usuariosController.post_signup);

module.exports = router;