// controllers/pagos.controller.js
const fs = require('fs');
const Papa = require('papaparse');
const moment = require('moment');
const Pago = require('../models/csv.model');

exports.getUpload = (req, res) => {
    res.render('upload.ejs');
};

exports.postUpload = (req, res) => {
    if (!req.file) return res.status(400).send('Archivo no subido');

    const filePath = req.file.path;

    fs.readFile(filePath, 'utf8', async function(err, data) {
        if (err) {
            console.error(err);
            return res.status(500).send('Error al leer el archivo');
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
                Fecha_de_pago: moment(row['Fecha_de_pago'], 'YYYY-MM-DD').toDate(),
                Metodo: row['Metodo'],
                Banco: row['Banco'],
                Nota: row['Nota']
            });

            await pago.insertPago();
        }

        fs.unlink(filePath, (err) => {
            if (err) console.error('Error al eliminar el archivo', err);
        });

        res.render('pagos/upload.ejs', { message: 'Datos cargados correctamente' });
    });
};
