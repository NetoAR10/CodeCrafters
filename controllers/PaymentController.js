// controllers/PaymentController.js

const fs = require('fs');
const csv = require('csv-parser');
const Payment = require('../models/Payment');

function uploadPayments(filePath, callback) {
  const results = [];
  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      Payment.insertPayment(results, (err, result) => {
        if (err) return callback(err);
        callback(null, result);
      });
    });
}

module.exports = {
  uploadPayments
};


/*
//csv.controller.js
const fs = require('fs');
const Papa = require('papaparse');
const moment = require('moment');
const Pago = require('../models/Payment');
const csvParser = require('csv-parser');


exports.getUpload = (request, response, next) => {
    console.log(request.session.priviledges);
    response.render('upload.ejs', {
        uploaded: false,
        conUploadTransferencia: request.canUploadTransferencia,
        canModifyUser: request.canModifyUser,
        canViewHistorialTodos: request.canViewHistorialTodos,
        correo: request.session.correo, 
        permisos: request.session.permisos, 
        rol: request.session.rol, 
        nombre: request.session.nombre 
    });
};


const delay = ms => new Promise(res => setTimeout(res, ms));

exports.postUpload = (request, response, next) => {
    if (!request.file) return response.status(400).send('Archivo no subido');

    const filePath = request.file.path;
    
    fs.readFile(filePath, 'utf8', async function(err, data) {
        if (err) {
            console.error(err);
            return;
        }

        const results = Papa.parse(data, {
            header: true,
            skipEmptyLines: true
        });

        for (let row of results.data) {
            const pago = new Pago({
                IDUsuario: parseInt(row['IDUsuario']),
                IDDeuda: parseInt(row['IDDeuda']),
                Cant_pagada: parseFloat(row['Cant_pagada']),
                Fecha_de_pago: moment(row['Fecha_de_pago'], 'YYYY-MM-DD').format('YYYY-MM-DD'),
                Metodo: row['Metodo'],
                Banco: row['Banco'],
                Nota: row['Nota']
            });

            try {
                await Pago.insert(pago);
            } catch (error) {
                console.error("Error insertando el pago:", error);
            }
        }

        fs.unlinkSync(filePath); // Elimina el archivo después de procesar
        response.render('leads/leadUpload.ejs', {
            uploaded: true,
            canUpload: request.canUpload,
            canConsultReports: request.canConsultReports,
            canConsultUsers: request.canConsultUsers,
        });
    });
};
*/