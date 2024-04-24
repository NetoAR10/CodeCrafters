const fs = require('fs');
const Papa = require('papaparse');
const Pago = require('../models/csv.model'); // Cambia el modelo a 'Pago'

exports.getUpload = (req, res, next) => {
    const user = req.user || {}; // Información del usuario actual

    res.render('upload.ejs', {
        correo: user.correo || "Correo desconocido",
        permisos: user.permisos || [],
        rol: user.rol || "Sin rol",
        nombre: user.nombre || "Usuario desconocido",
        uploaded: false,
        canUpload: req.canUpload || false,
        canConsultReports: req.canConsultReports || false,
        canConsultUsers: req.canConsultUsers || false,
        csrfToken: req.csrfToken(),
    });
};

exports.postUpload = (req, res) => {
    if (!req.file) {
        return res.status(400).send("No se ha subido ningún archivo.");
    }

    const filePath = req.file.path;

    fs.readFile(filePath, 'utf8', async (err, data) => {
        if (err) {
            console.error("Error al leer el archivo CSV:", err);
            return res.status(500).send("Error al procesar el archivo.");
        }

        const results = Papa.parse(data, {
            header: true,
            skipEmptyLines: true, // Ignora líneas vacías
        });

        try {
            const newPagos = results.data.map(row => ({
                IDUsuario: parseInt(row['IDUsuario']),
                IDDeuda: parseInt(row['IDDeuda']),
                Cant_pagada: parseFloat(row['Cant_pagada']),
                Fecha_de_pago: row['Fecha_de_pago'], // Fecha como cadena
                Metodo: row['Metodo'],
                Banco: row['Banco'],
                Nota: row['Nota'],
            }));

            for (const pago of newPagos) {
                await Pago.insert(pago); // Insertar el nuevo registro en la tabla 'pago'
            }

            fs.unlinkSync(filePath); // Elimina el archivo después de procesarlo
            res.status(200).send("Carga y procesamiento del archivo CSV completada.");
        } catch (error) {
            console.error("Error al insertar datos en la base de datos:", error);
            res.status(500).send("Error al insertar datos en la base de datos.");
        }
    });
};
