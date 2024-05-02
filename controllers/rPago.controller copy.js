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

exports.postRegistrarPago = async (req, res, next) => {
    console.log(req.body);
    const { IDPago,Referencia, IDDeuda, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota } = req.body;
    try {
        const nuevoPago = new pago(Referencia, IDDeuda, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota);
        
        if (IDPago) {
            // Si IDPago, actualizar
            await nuevoPago.update(IDPago);
        } else {
            // Si no, creamos un nuevo pago
            await nuevoPago.save();
        }

	const urlAnterior = req.header('Referer') || 'pagos_de_alumnos';
        res.redirect(urlAnterior);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error al procesar el pago.');
    }
};
