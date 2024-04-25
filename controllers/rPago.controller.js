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
    try {
        const { Matricula, Total_deuda, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota, Prorroga } = request.body;
        const nuevoPago = new pago(Matricula, Total_deuda, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota, Prorroga);
        await nuevoPago.save();
        response.redirect('pagos/lista');
    } catch (err) {
        console.log(err);
        response.status(500).send('Error al registrar el pago.');
    }
};

exports.getPagos = async (request, response, next) => {
    try {
        const [rows] = await pago.fetchAll();
        response.render('listaPagos', { pagos: rows });
    } catch (err) {
        console.log(err);
        response.status(500).send('Error al obtener la lista de pagos.');
    }
};
