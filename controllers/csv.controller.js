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

