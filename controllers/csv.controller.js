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

exports.postUpload = (req, res, next) => {
    let pagos = [];
    fs.createReadStream(req.file.path)
        .pipe(csvParser())
        .on('data', (row) => {
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
        })
        .on('end', async () => {
            for (let pago of pagos) {
                await pago.save();
            }
            fs.unlinkSync(req.file.path); 
            res.redirect('/pagos');
        });
};
