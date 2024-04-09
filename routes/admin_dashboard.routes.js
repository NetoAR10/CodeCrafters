const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const dashboardController = require('../controllers/ciclo_escolar.controller');
const canResgisterCiclo = require('../util/can-register-ciclo');

//router.get('/admin_dashboard', isAuth, (request, response, next) => {
   // response.render('admin_dashboard');
//})

router.get('/admin_dashboard', isAuth, canResgisterCiclo, dashboardController.get_nuevo_ciclo);
router.post('/admin_dashboard', isAuth, dashboardController.post_nuevo_ciclo);

module.exports = router;