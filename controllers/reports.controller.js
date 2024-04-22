const ReportsModel = require('../models/reports.model');

exports.getReport = async (request, response) => {
  try {
    const user = request.session.user;

    if (user) {
      const userId = user.IDUsuario;

      const totalDeudas = await ReportsModel.getTotalDeudas(userId);
      const totalPagos = await ReportsModel.getTotalPagos(userId);
      const totalDeuda = await ReportsModel.getDeudaTotal(userId);
      const totalPago = await ReportsModel.getPagoTotal(userId);
      const materiasPorCiclo = await ReportsModel.getMateriasPorCiclo(userId);
      const deudaPorConcepto = await ReportsModel.getDeudaPorConcepto(userId);
      const pagosPorMetodo = await ReportsModel.getPagosPorMetodo(userId);

      response.render('reporte.ejs', {
        totalDeudas: totalDeudas[0]?.totalDeudas || 0,
        totalPagos: totalPagos[0]?.totalPagos || 0,
        totalDeuda: totalDeuda[0]?.totalDeuda || 0,
        totalPago: totalPago[0]?.totalPago || 0,
        materiasPorCiclo: materiasPorCiclo,
        deudaPorConcepto: deudaPorConcepto,
        pagosPorMetodo: pagosPorMetodo,
        isLoggedIn: request.session.isLoggedIn || false,
        privileges: request.session.privileges || [],
      });
    } else {
      response.status(400).send('Información del usuario ausente.');
    }
  } catch (error) {
    console.error('Error obteniendo datos de reporte:', error);
    response.status(500).send('Error interno del servidor.');
  }
};
