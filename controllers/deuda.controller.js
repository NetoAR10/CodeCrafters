const deuda = require('../models/deuda.model');

exports.getCrearDeuda = (request, response, next) => {
    response.render('crearDeuda', { 
		csfrToken: request.csrfToken(),
		nombre: request.session.nombre,
		permisos: request.session.permisos,
		correo: request.session.correo,
		rol: request.session.roles,
        id: request.params.id,
	});
};

exports.postCrearDeuda = async (req, res, next) => {
    console.log(req.body);
    const ID = req.body.id;
    const { IDDeuda, Referencia, Total_deuda, Concepto, Mes, Fecha_limite } = req.body;
    try {
        const nuevaDeuda = new deuda(Referencia, Total_deuda, Concepto, Mes, Fecha_limite);
        
        if (IDDeuda) {
            // Actualizar la deuda existente
            await nuevaDeuda.update(IDDeuda);
            res.redirect(`pagos_de_alumnos/deudas/${ID}`);
        } else {
            // Crear una nueva deuda
            await nuevaDeuda.save();
            res.redirect(`pagos_de_alumnos/deudas/${ID}`);
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Error al procesar la deuda.');
    }
};
