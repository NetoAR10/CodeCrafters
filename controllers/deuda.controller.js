const deuda = require('../models/deuda.model');

exports.getCrearDeuda = (request, response, next) => {
    response.render('crearDeuda', { 
		csfrToken: request.csrfToken(),
		nombre: request.session.nombre,
		permisos: request.session.permisos,
		correo: request.session.correo,
		rol: request.session.roles,
	});
};

exports.postCrearDeuda = async (req, res, next) => {
    console.log(req.body);
    const { IDDeuda, Referencia, Total_deuda, Plan_pago, Concepto, Mes } = req.body;
    try {
        const nuevaDeuda = new deuda(Referencia, Total_deuda, Plan_pago, Concepto, Mes);
        
        if (IDDeuda) {
            // Actualizar la deuda existente
            await nuevaDeuda.update(IDDeuda);
            res.send('Deuda actualizada con éxito');
        } else {
            // Crear una nueva deuda
            await nuevaDeuda.save();
            res.send('Deuda creada con éxito');
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Error al procesar la deuda.');
    }
};
