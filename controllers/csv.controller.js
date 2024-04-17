const multer = require('multer');
const csvParser = require('csv-parser');
const fs = require('fs');
const db = require('../util/database'); // Tu archivo de configuración de mysql2

// Configuración de multer para almacenamiento de archivos CSV
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

const importCsv = (req, res) => {
  const file = req.file;

  fs.createReadStream(file.path)
    .pipe(csvParser({
      // Opcionalmente, puedes especificar los encabezados aquí si es necesario
      // headers: ['Pago', '%', 'Referencia', 'Nombre', 'Fecha', 'Monto', 'Metodo', 'Banco', 'Nota'],
    }))
    .on('data', (data) => {
      // Transformar los datos del CSV a los campos de la base de datos correspondientes
      // Ejemplo de transformación, ajusta los nombres de campo según tu esquema de base de datos
      const query = `
        INSERT INTO pago (IDUsuario, IDDeuda, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota)
        VALUES (?, (SELECT IDDeuda FROM deuda WHERE Referencia = ?), ?, ?, ?, ?, ?)
      `;
      const params = [
        // Aquí necesitas determinar cómo obtener el IDUsuario basado en los datos del CSV
        // Suponiendo que la columna 'Referencia' del CSV hace referencia al campo 'Referencia' en la tabla de deudas
        // Asegúrate de que el 'Monto' del CSV se corresponde con el tipo de dato esperado en la base de datos
        // La 'Fecha' del CSV debe convertirse al formato de fecha de SQL (YYYY-MM-DD)
        // data.Referencia, // IDUsuario, si la 'Referencia' se relaciona directamente con el usuario
        // data.Referencia, // IDDeuda, si la 'Referencia' es para la tabla deuda
        null, // Ejemplo de IDUsuario como null si es desconocido o no aplicable
        data.Referencia, 
        data.Monto,
        new Date(data.Fecha).toISOString().slice(0, 10), // Convertir la fecha a formato YYYY-MM-DD
        data.Metodo,
        data.Banco,
        data.Nota,
      ];

      db.execute(query, params)
        .then(result => {
          console.log('Fila insertada:', result);
        })
        .catch(err => {
          console.error('Error al insertar fila:', err);
        });
    })
    .on('end', () => {
      // Eliminar el archivo CSV después de procesar los datos
      fs.unlinkSync(file.path);
      res.status(200).send('Datos importados con éxito');
    });
};

module.exports = { upload, importCsv };
