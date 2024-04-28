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
    try {
	const { Referencia, IDDeuda, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota } = req.body;
	const nuevoPago = new pago(Referencia, IDDeuda, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota);
	nuevoPago.save()
        res.send('pago creado con éxito');
     }catch (err){
	console.log(err);
	res.status(500).send('Error al registrar el pago.');
	csrfToken: request.csrfToken();
     }
        
};
