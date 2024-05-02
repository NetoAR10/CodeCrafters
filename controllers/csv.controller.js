
/*
const csvParser = require('csv-parser');
const fs = require('fs');
const Papa = require('papaparse');
const moment = require('moment');
const db = require('../util/database');

exports.getUpload = (req, res, next) => {
    res.render('upload', { 
        csrfToken: req.csrfToken(),
        uploaded: false,
        canUpload: req.canUpload,
        canConsultReports: req.canConsultReports,
        canConsultUsers: req.canConsultUsers,
        correo: req.session.correo,
        permisos: req.session.permisos,
        rol: req.session.rol,
        nombre: req.session.nombre,
    });
    console.log(req.csrfToken());
};

const delay = ms => new Promise(res => setTimeout(res, ms));

exports.postUpload = async (req, res, next) => {
    console.log('file:', req.file);

    if (!req.file) return res.status(400).send('Archivo no subido');
    const filePath = req.file.path;

    
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
            const IDUsuario = parseInt(row['IDUsuario']);
            const IDDeuda = parseInt(row['IDDeuda']);
            const Cant_pagada = parseFloat(row['Cant_pagada']);
            const Fecha_de_pago = moment(row['Fecha_de_pago'], 'YYYY-MM-DD').format('YYYY-MM-DD');
            const Metodo = row['Metodo'];
            const Banco = row['Banco'];
            const Nota = row['Nota'];

            const query = `
              INSERT INTO pago (IDUsuario, IDDeuda, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota) 
              VALUES (?, ?, ?, ?, ?, ?, ?);
            `;
            db.query(query, [IDUsuario, IDDeuda, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota], (err, result) => {
                if (err) {
                    console.error('Error al insertar en la base de datos:', err);
                } else {
                    console.log('Insertado correctamente:', result.insertId);
                }
            });
        }
        
        fs.unlinkSync(filePath); 
        await delay(2000);
        res.render('upload', { 
            uploaded: true,
            canUpload: req.canUpload,
            canConsultReports: req.canConsultReports,
            canConsultUsers: req.canConsultUsers,
        });
    });
};
*/



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
    if (!request.file) return response.status(400).send('Archivo no se subio');

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
                console.error("Error insertando el csv:", error);
            }
        }

        fs.unlinkSync(filePath); 
        response.render('upload.ejs', {
            uploaded: true,
            canUpload: request.canUpload,
            canConsultReports: request.canConsultReports,
            canConsultUsers: request.canConsultUsers,
        });
    });
};



