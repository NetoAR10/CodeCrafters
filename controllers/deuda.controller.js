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
    const { IDDeuda, Referencia, Total_deuda, Concepto, Mes, Fecha_limite } = req.body;
    try {
        const nuevaDeuda = new deuda(Referencia, Total_deuda, Concepto, Mes, Fecha_limite);
        
        if (IDDeuda) {
            // Actualizar la deuda existente
            await nuevaDeuda.update(IDDeuda);
            res.redirect('pagos_de_alumnos');
        } else {
            // Crear una nueva deuda
            await nuevaDeuda.save();
            res.redirect('pagos_de_alumnos');
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Error al procesar la deuda.');
    }
};
