const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const isAdmin = require('../util/is-admin');
const isStudent = require('../util/is-student');

const usuariosController = require('../controllers/usuario.controller');

router.get('/', isAuth, isAdmin, usuariosController.get_homeAdmin);
router.get('/', isAuth, isStudent, usuariosController.get_homeUser);


module.exports = router;