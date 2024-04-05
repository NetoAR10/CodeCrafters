const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');

router.get('/deuda', isAuth, (request, response, next) => {
    response.render('deuda');
})

module.exports = router;
