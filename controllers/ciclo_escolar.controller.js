const cicloescolar = require('../models/ciclo_escolar.model');

exports.get_nuevo_ciclo = async (request, response, next) => {
    response.render('ciclo_escolar', {csrfToken: request.csrfToken()});
};

exports.post_nuevo_ciclo = async (request, response, next) => {
    console.log(request.body);
    try {
        const { Ciclo, Fecha_Inicio, Fecha_Fin, Ciclo_activo, Precio_credito} = request.body;
        const nuevo_ciclo = new cicloescolar(Ciclo, Fecha_Inicio, Fecha_Fin, Ciclo_activo, Precio_credito);
        await nuevo_ciclo.save();
        response.redirect('/')
    } catch (err) {
        console.log(err);
        response.status(500).send('error al mandar datos');
        csrfToken: request.csrfToken();
    }
};