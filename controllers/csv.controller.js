const multer = require('multer');
const csvParser = require('csv-parser');
const fs = require('fs');
const path = require('path');
const { Causan } = require('../models/csv.model'); 

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

const importCsv = async (req, res) => {
    const file = req.file;
    const results = [];
  
    fs.createReadStream(file.path)
      .pipe(csvParser({
        mapHeaders: ({ header }) => {
          switch (header) {
            case 'Fecha':
              return 'Fecha_de_pago';
            case 'Monto':
              return 'Cant_pagada';
            case 'Metodo':
              return 'Metodo';
            case 'Banco':
              return 'Banco';
            case 'Nota':
              return 'Nota';
            case '%':
              return 'Porcentaje';
            case 'Referencia':
              return 'Referencia';
            case 'Nombre':
              return 'Nombre'; 
            default:
              return header;
          }
        }
      }))
      .on('data', (row) => results.push(row))
      .on('end', async () => {
        try {
          for (const row of results) {
            
            const user = await Usuario.findOne({ where: { Nombre: row.Nombre } });
            const newPayment = {
              IDUsuario: user ? user.IDUsuario : null,
              IDDeuda: null, 
              Cant_pagada: row.Cant_pagada,
              Fecha_de_pago: new Date(row.Fecha_de_pago), 
              Metodo: row.Metodo,
              Banco: row.Banco,
              Nota: row.Nota,
            };
            
            await Pago.create(newPayment);
          }
          res.status(200).send('Datos importados con éxito');
        } catch (error) {
          console.error(error);
          res.status(500).send('Error al importar los datos');
        } finally {
          fs.unlinkSync(file.path);
        }
      });
  };
  
  module.exports = { upload, importCsv };