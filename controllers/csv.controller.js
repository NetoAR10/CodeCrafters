const fs = require('fs');
const Papa = require('papaparse');
const CSVModel = require('../models/csv.model');

exports.getUpload = (req, res) => {
    res.render('upload');
};

exports.postUpload = (req, res) => {
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
            await CSVModel.insertUser(row);
        }
        fs.unlinkSync(filePath);
        res.send('Usuarios cargados con éxito');
    });
};
