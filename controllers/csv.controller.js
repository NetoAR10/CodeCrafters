const fs = require('fs');
const Papa = require('papaparse');
const CSVModel = require('../models/csv.model');
const multer = require('multer');

// Configurar multer para subir archivos
const upload = multer({ dest: 'uploads/' }); // Cambia 'uploads/' según tu estructura

exports.getUpload = (req, res) => {
    res.render('upload', { csrfToken: req.csrfToken() });
};

exports.postUpload = (req, res) => {
    if (!req.file) {
        return res.status(400).send('No se subió ningún archivo');
    }

    const filePath = req.file.path;

    fs.readFile(filePath, 'utf8', async function (err, data) {
        if (err) {
            console.error(err);
            return res.status(500).send('Error al leer el archivo');
        }

        const results = Papa.parse(data, {
            header: true,
            skipEmptyLines: true,
        });

        try {
            for (let row of results.data) {
                // Validar datos antes de insertar
                if (row.Nombre && row.Correo_electronico && row.Contrasena) {
                    await CSVModel.insertUser(row);
                } else {
                    console.warn('Fila inválida:', row);
                }
            }

            fs.unlinkSync(filePath); // Eliminar el archivo temporal
            res.send('Usuarios cargados con éxito');
        } catch (error) {
            console.error('Error al insertar en la base de datos:', error);
            res.status(500).send('Error al insertar datos en la base de datos');
        }
    });
};
