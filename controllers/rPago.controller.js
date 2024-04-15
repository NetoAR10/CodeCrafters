const pago = require('../models/rPago.model');

exports.getRegistrarPago = (req, res, next) => {
    res.render('registrarPago', { csrfToken: req.csrfToken() });
};

exports.postRegistrarPago = async (req, res, next) => {
    console.log(req.body);
    try {
        const { IDUsuario, IDDeuda, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota, Prorroga } = req.body;
        const nuevoPago = new pago(IDUsuario, IDDeuda, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota, Prorroga);
        await nuevoPago.save();
        res.send('Pago registrado con éxito.');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error al registrar el pago.');
	csrfToken: request.csrfToken();    
    }
};

exports.getPagos = async (req, res, next) => {
    try {
        const [rows] = await Pago.fetchAll();
        res.render('listaPagos', { pagos: rows });
    } catch (err) {
        console.log(err);
        res.status(500).send('Error al obtener la lista de pagos.');
    }
};
