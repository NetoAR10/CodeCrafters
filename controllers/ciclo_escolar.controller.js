const Ciclo_escolar = require('../models/ciclo_escolar.model');

exports.get_nuevo_ciclo = (request, response, next) => {
    response.render('admin_dashboard')
}

exports.post_nuevo_ciclo = (request, response, next) => {
    const nuevo_ciclo = new Ciclo_escolar(request.body.Ciclo, request.body.Fecha_inicio, request.body.Fecha_fin, estaEnRango, request.costoCredito );
    nuevo_ciclo.save()
    .then(([rows, fieldData]) => {
        response.redirect('/'); //redireccionar a futuro admin solo
    })
    .catch((error) => {
        console.log(error);
    })
}