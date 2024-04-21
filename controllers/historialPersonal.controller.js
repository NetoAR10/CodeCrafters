// historialPersonal.controller.js
const HistorialPersonal = require('../models/historialPersonal.model');

exports.getHistorialPersonal = async (request, response) => {
    try {
        const userId = request.session.IDUsuario; // Verifica que este valor esté en la sesión
        const [rows] = await HistorialPersonal.fetchByUser(userId); // Obtiene el historial personal
        response.render('historialPersonal', { 
            historial: rows,
            correo: request.session.correo,
            permisos: request.session.permisos,
            rol: request.session.roles,
            nombre: request.session.nombre,
        });
    } catch (error) {
        console.error('Error al obtener el historial personal:', error);
        response.status(500).send('Error al obtener el historial personal');
    }
};
