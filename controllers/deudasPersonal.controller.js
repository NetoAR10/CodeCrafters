const HistorialDeudas = require('../models/deudasPersonal.model');
const { updateXML, getUniqueReference } = require('../generarXML');

exports.getHistorialDeDeudas = async (request, response, next) => {  
  
    try {

	const correoUsuario = request.session.correo;
	
	//console.log("Correo del usuario:", correoUsuario);

        const [rows] = await HistorialDeudas.fetchByCorreo(correoUsuario);

	//console.log("Deudas: ",rows);
        
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

exports.postHistorialDeDeudas = async (request, response, next) => {
    try {
        // Accede a los datos enviados en el formulario
        const { Nombre, Total_deuda, Concepto, Mes, Fecha_limite, IDDeuda } = request.body;

        // Imprime los datos en la consola
        console.log("Datos recibidos del formulario:");
        console.log("Total deuda:", Total_deuda);


        const { url } = await updateXML(Total_deuda);
        const uniqueReference = getUniqueReference(); // Obtén el valor de `uniqueReference`

        console.log('Unique Reference:', uniqueReference); // Muestra el valor de `uniqueReference`
        console.log(url);
        HistorialDeudas.addReference(IDDeuda, uniqueReference);


        // Responde al cliente
        response.json({ url })



    } catch (error) {
        console.log('Error al intentar hacer el pago:', error);
        response.status(500).send("Ocurrió un error al procesar el pago");
    }
}
