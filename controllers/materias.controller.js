const materias = require('../models/materias.model');

exports.get_materias = async (request, response, next) => {
    response.render('materias', {csrfToken: request.csrfToken()});
};

exports.post_materias = async (request, response, next) => {
    try {
        response.alert('exito')
    } catch (err) {
        console.log(err);
        response.status(500).send('error al mandar datos');
        csrfToken: request.csrfToken();
    }
};

exports.post_contactar_admin = async (request, response, next) => {
    response.render('contactar_admin');
};