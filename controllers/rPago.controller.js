const pago = require('../models/rPago.model');

exports.getRegistrarPago = (request, response, next) => {
    response.render('registrarPago', { 
        csrfToken: request.csrfToken(),
        correo: request.session.correo,
        permisos: request.session.permisos,
        rol: request.session.roles,
        nombre: request.session.nombre,
    });
};

exports.postRegistrarPago = async (request, response, next) => {
    const { IDPago, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota } = request.body;
    try {
        if (IDPago) {
            // Update existing payment
            await pago.update(IDPago, { Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota });
            response.send('Pago creado con éxito'); // Redirect after updating
        } else {
            // Create new payment
            const nuevoPago = new pago({ Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota });
            await nuevoPago.save();
            response.send('Pago creado con éxito'); // Redirect after creating
        }
    } catch (err) {
        console.log(err);
        response.status(500).send('Error en la operación del pago.');
    }
};

