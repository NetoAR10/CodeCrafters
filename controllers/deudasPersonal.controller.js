const HistorialDeudas = require('../models/deudasPersonal.model');

exports.getHistorialDeDeudas = async (request, response, next) => {  
  
    try {

	const correoUsuario = request.session.correo;
	
	console.log("Correo del usuario:", correoUsuario);

        const [rows] = await HistorialDeudas.fetchByCorreo(correoUsuario);

	console.log("Deudas: ",rows);
        
        response.render('deudasPersonal', {
	    deudas: rows,
            nombre: request.session.nombre || '',
            correo: request.session.correo || '',
            matricula: request.session.matricula || '',
            permisos: request.session.permisos || [],
            rol: request.session.roles || '',
        });
    } catch (error) {
        console.log('Error al recuperar el historial de deudas del usuario:', error);
        response.status(500).send("Ocurrió un error al recuperar el historial de deudas");
    }
};
