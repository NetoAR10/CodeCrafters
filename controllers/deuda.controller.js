const Deuda = require('../models/deuda.model');

exports.getCrearDeuda = (req, res, next) => {
    res.render('crearDeuda');
};

exports.postCrearDeuda = (req, res, next) => {
    const nuevaDeuda = new Deuda(req.body.IDUsuario, req.body.Total_deuda, req.body.Plan_pago, req.body.Concepto, req.body.Mes);
    nuevaDeuda.save()
        .then(() => {
            res.redirect('/Deuda'); 
        })
        .catch(err => console.log(err));
};
