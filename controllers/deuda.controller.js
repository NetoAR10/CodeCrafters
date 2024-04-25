const deuda = require('../models/deuda.model');

exports.getCrearDeuda = (request, response, next) => {
    response.render('crearDeuda', { 
		csfrToken: request.csrfToken(),
		nombre: request.session.nombre,
		permisos: request.session.permisos,
		correo: request.session.correo,
		rol: request.session.roles,
	});
};

exports.postCrearDeuda = async (req, res, next) => {
    console.log(req.body);
    try {
	const { Matricula, Total_deuda, Plan_pago, Concepto, Mes } = req.body;
	const nuevaDeuda = new deuda(Matricula, Total_deuda, Plan_pago, Concepto, Mes);
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
