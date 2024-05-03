const fs = require('fs');
const Papa = require('papaparse');
const moment = require('moment');
const Pago = require('../models/csv.model');
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
    console.log('file:', request.files.file);
    console.log('Request body:', request.body);
    if (!request.files.file) return response.status(400).send('Archivo no se subió');

    const filePath = request.files.file.path;

    fs.readFile(filePath, 'utf8', async function(err, data) {
        if (err) {
            console.error(err);
            return response.status(500).render('upload.ejs', {
                error: 'Error al leer el archivo'
            });
        }

        const results = Papa.parse(data, {
            header: true,
            skipEmptyLines: true
        });

        try {
            for (let row of results.data) {
                const pago = new Pago({
                    IDUsuario: parseInt(row['IDUsuario']),
                    IDDeuda: parseInt(row['IDDeuda']),
                    Cant_pagada: parseFloat(row['Cant_pagada']),
                    Fecha_de_pago: moment(row['Fecha_de_pago'], 'YYYY-MM-DD').toDate(),
                    Metodo: row['Metodo'],
                    Banco: row['Banco'],
                    Nota: row['Nota']
                });
                await pago.insertPago();
            }
            fs.unlinkSync(filePath); 

            response.render('upload.ejs', {
                uploaded: true,
                success: 'El archivo CSV ha sido cargado e insertado correctamente en la base de datos.',
                canUpload: request.canUpload,
                canConsultReports: request.canConsultReports,
                canConsultUsers: request.canConsultUsers,
            });
        } catch (error) {
            console.error("Error con la carga:", error);
            fs.unlinkSync(filePath);
            response.status(500).render('upload.ejs', {
                error: 'Error al insertar datos en la base de datos'
            });
        }
    });
};
