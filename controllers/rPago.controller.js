const pago = require('../models/rPago.model');
const ListaUsuario = require('../models/pagos_de_alumnos.model');

exports.getRegistrarPago = (request, response, next) => {
    response.render('registrarPago', { 
        correo: request.session.correo || '',
        permisos: request.session.permisos,
        rol: request.session.roles,
        nombre: request.session.nombre,
        matricula: request.session.matriculaPago,
        csrfToken: request.csrfToken(),
    });
};

exports.postRegistrarPago = async (request, response, next) => {
    console.log(request.body);
    const { IDPago,Referencia, IDDeuda, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota } = request.body;
    try {
        const nuevoPago = new pago(Referencia, IDDeuda, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota);
        const [matricula_table] = await ListaUsuario.getMatricula(request.body.nombre);
        const matricula = matricula_table[0].Matricula;
        console.log(matricula);

        request.session.matriculaPago = matricula;
        
        if (IDPago) {
            // Si IDPago, actualizar
            await nuevoPago.update(IDPago);
            response.redirect(`pagos_de_alumnos/deudas/${matricula}`);
        } else {
            // Si no, creamos un nuevo pago
            await nuevoPago.save();
            response.redirect(`pagos_de_alumnos/deudas/${matricula}`);
        }
    } catch (err) {
        console.log(err);
        response.status(500).send('Error al procesar el pago.');
    }
};
