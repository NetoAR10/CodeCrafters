const HistorialPago = require('../models/historialPersonal.model');

exports.getHistorialPagosPersonal = async (request, response) => {
    try {
        const correoUsuario = request.session.correo;

        console.log("Correo del usuario:", correoUsuario); // Verifica el correo

        const [rows] = await HistorialPago.fetchByCorreo(correoUsuario);

        console.log("Datos del historial:", rows); // Verifica si se obtuvieron datos

        response.render('historialPersonal', { 
            pagos: rows, 
            correo: request.session.correo,
            permisos: request.session.permisos,
            rol: request.session.roles,
            nombre: request.session.nombre,
        });
    } catch (error) {
        console.error('Error al obtener el historial de pagos del usuario:', error); // Muestra el error
        response.status(500).send('Error al obtener el historial de pagos');
    }
};

