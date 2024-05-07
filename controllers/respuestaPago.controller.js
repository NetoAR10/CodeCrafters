const { request } = require('express');
const { decifrarAES, extraerValores } = require('../decifrarXML');
const xml2js = require('xml2js');
const materia = require('../models/materias.model');
const pago = require('../models/rPago.model');
const deuda = require('../models/deudasPersonal.model');

exports.getRespuestaPago = async (request, response, next) => {
    
}

exports.postRespuestaPago = async (request, response, next) => {
    try {
        // Simular el procesamiento de la respuesta de pago
        const paymentStatus = request.body.paymentStatus || 'unknown';

        // Manejar la respuesta
        if (paymentStatus) {
            //console.log(paymentStatus);
        }

        // Enviar una respuesta al cliente o redireccionar
        //response.send('Respuesta de pago recibida y procesada');

        const respuestaAPI = paymentStatus;
        const llave = '5DCC67393750523CD165F17E1EFADD21';
        const resultadoDescifrado = decifrarAES(respuestaAPI, llave);
        const { reference, response, date, amount} = await extraerValores(resultadoDescifrado);

        const cantidad = parseFloat(amount);

        function convertDate(input) {
            // Divide la cadena en partes
            const [day, month, year] = input.split('/');
        
            // Normaliza el año a un formato `aaaa`
            const fullYear = year.length === 2 ? '20' + year : year;
        
            // Formatea a `aaaa-mm-dd`
            const formattedDate = `${fullYear}-${month}-${day}`;
            
            return formattedDate;
        }

        const fecha = convertDate(date);

        const test = "f31ccbf6-7aac-43eb-b833-4a89175434ac"
        const llaveDeuda = await deuda.fetchByReference(test) //deberia de ser reference en produccion
        const IDDeuda = llaveDeuda[0][0].IDDeuda

        const usuario = await materia.fetchInfoUsuario(request.session.correo);
        const referencia = usuario[0][0].referencia;

        console.log(referencia);
        console.log(IDDeuda);
        console.log(cantidad);
        console.log(date);

        if (response === "approved") {
            let nuevo_pago = new pago (
                referencia,
                IDDeuda,
                cantidad,
                fecha,
                "Online",
                "N/A",
                test //deberia de ser reference en produccion
            );
            nuevo_pago.save();
        } else if (response === 'denied') {
            response.status(400).json({ error: 'El pago fue denegado.' });
        } else if (response === 'error') {
            response.status(500).json({ error: 'Error al procesar el pago.' });
        } else {
            response.status(400).json({ error: 'Estado de pago desconocido.' });
        }
        

    } catch (error) {
        console.log("Error:", error)
        response.status(500).send('Error al procesar el pago.');
    }
};

//http://localhost:2050/user/alumno/pago/respuesta