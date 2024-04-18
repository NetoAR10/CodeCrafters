const deuda = require('../models/Deuda.model');

exports.getCrearDeuda = (req, res, next) => {
    res.render('crearDeuda', { csfrToken: req.csrfToken() });
};

exports.postCrearDeuda = async (req, res, next) => {
    console.log(req.body);
    try {
	const { IDUsuario, Total_deuda, Plan_pago, Concepto, Mes } = req.body;
	const nuevaDeuda = new deuda(IDUsuario, Total_deuda, Plan_pago, Concepto, Mes);
	nuevaDeuda.save()
        res.redirect('deudas/lista');
     }catch (err){
	console.log(err);
	res.status(500).send('Error al registrar el pago.');
	csrfToken: request.csrfToken();
     }
        
};

exports.getDeudas = async (req, res, next) => {
    try {
	const [rows] = await deuda.fetchAll();
	res.render('listaDeudas', {deudas:rows});
     }catch (err) {
	console.log(err);
	res.status(500).send('Error al obtener la lista de pagos.');
     }
};
