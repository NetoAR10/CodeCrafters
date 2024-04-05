const Pago = require('../models/Pago');

exports.getRegistrarPago = (req, res, next) => {
    res.render('registrarPago');
};

exports.postRegistrarPago = (req, res, next) => {
    const nuevoPago = new Pago(req.body.matriculaAlumno, req.body.monto, req.body.referencia, req.body.concepto, req.body.banco, req.body.fechaPago, req.body.porcentaje, req.body.mes, req.body.nota);
    nuevoPago.save()
        .then(() => {
            res.redirect('/Pago');
        })
        .catch(err => console.log(err));
};

exports.getPagos = (req, res, next) => {
    Pago.fetchAll()
        .then(([rows]) => {
            res.render('listaPagos', { pagos: rows });
        })
        .catch(err => console.log(err));
};

