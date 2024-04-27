const pago = require('../models/rPago.model');

exports.getRegistrarPago = (request, response, next) => {
    response.render('registrarPago', { 
        correo: request.session.correo || '',
        permisos: request.session.permisos,
        rol: request.session.roles,
        nombre: request.session.nombre,
        csrfToken: request.csrfToken(),
    });
};

exports.postRegistrarPago = async (request, response, next) => {
    const { IDPago, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota } = request.body;
    console.log(request.body)
    try {
        if (IDPago) { 
            await pago.update(IDPago, { Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota });
            response.send('Pago actualizado con éxito'); 
        } else {
            const nuevoPago = new pago({ Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota });
            await nuevoPago.save();
            response.send('Pago creado con éxito');
        }
    } catch (err) {
        console.log(err);
        response.status(500).send('Error en la operación del pago.');
	csrfToken: request.csrfToken()
    }
};
