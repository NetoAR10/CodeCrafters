/*
const fs = require('fs');
const csvParser = require('csv-parser');
const Pago = require('../models/csv.model');

exports.getUpload = (req, res, next) => {
    res.render('pagos/uploadPago', {
        pageTitle: 'Upload Payment Data',
        path: '/pagos/upload',
        csrfToken: req.csrfToken()
    });
};

exports.postUpload = async (req, res, next) => {
  let pagos = [];
  const stream = fs.createReadStream(req.file.path)
      .pipe(csvParser());

  for await (const row of stream) {
      pagos.push(new Pago({
          IDUsuario: parseInt(row.IDUsuario),
          IDDeuda: parseInt(row.IDDeuda),
          CantPagada: parseFloat(row.CantPagada),
          FechaDePago: row.FechaDePago,
          Metodo: row.Metodo,
          Banco: row.Banco,
          Nota: row.Nota,
          Prorroga: row.Prorroga
      }));
  }

  try {
      await Promise.all(pagos.map(pago => pago.save()));
      fs.unlinkSync(req.file.path);
      res.redirect('/pagos');
  } catch (error) {
      console.error("Failed to process CSV:", error);
      res.status(500).send("Failed to process CSV.");
  }
};

*/
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
