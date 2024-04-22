const fs = require('fs');
const Papa = require('papaparse');
const csvParser = require('csv-parser');
const moment = require('moment');
const Usuario = require('../models/csv.model');

exports.getUpload = (request, response, next) => {
    const user = request.user || {}; 
    const correo = user.correo || "Correo desconocido"; 

    response.render('upload.ejs', { 
        correo,
        permisos: user.permisos || [],
        rol: user.rol || "Sin rol",
        nombre: user.nombre || "Usuario desconocido",
        uploaded: false,
        canUpload: request.canUpload || false,
        canConsultReports: request.canConsultReports || false,
        canConsultUsers: request.canConsultUsers || false,
    });
};





const delay = ms => new Promise(res => setTimeout(res, ms));

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
            skipEmptyLines: true,
        });

        try {
            const newUsuarios = results.data.map(row => ({
                nombre: row['Nombre'],
                matricula: parseInt(row['Matricula']),
                correo: row['Correo_electronico'],
                contrasena: row['Contrasena'],
                becaActual: parseInt(row['Beca_actual']),
                referencia: parseInt(row['Referencia']),
                alumnoActivo: row['Alumno_activo'] === "1",
            }));

            // Insertar todos los registros en la base de datos
            for (const usuario of newUsuarios) {
                await Usuario.insert(usuario);
            }

            fs.unlinkSync(filePath); // Eliminar el archivo después de procesarlo
            res.status(200).send("Carga y procesamiento del archivo CSV completada.");
        } catch (error) {
            console.error("Error al insertar usuarios:", error);
            res.status(500).send("Error al insertar datos en la base de datos.");
        }
    });
};
