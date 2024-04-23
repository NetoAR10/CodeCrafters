const ReportsModel = require('../models/reports.model');

exports.getReport = async (request, response) => {
  try {
    const totalDeudas = await ReportsModel.getTotalDeudas();
    const totalPagos = await ReportsModel.getTotalPagos();
    const totalDeuda = await ReportsModel.getDeudaTotal();
    const totalPago = await ReportsModel.getPagoTotal();
    const materiasPorCiclo = await ReportsModel.getMateriasPorCiclo();
    const deudaPorConcepto = await ReportsModel.getDeudaPorConcepto();
    const pagosPorMetodo = await ReportsModel.getPagosPorMetodo();

    response.render('./views/reporte.ejs', {
      totalDeudas: totalDeudas[0]?.totalDeudas || 0,
      totalPagos: totalPagos[0]?.totalPagos || 0,
      totalDeuda: totalDeuda[0]?.totalDeuda || 0,
      totalPago: totalPago[0]?.totalPago || 0,
      materiasPorCiclo,
      deudaPorConcepto,
      pagosPorMetodo,
      isLoggedIn: request.session.isLoggedIn || false,
      privileges: request.session.privileges || [],
    });
  } catch (error) {
    console.error('Error obteniendo datos de reporte:', error);
    response.status(500).send('Error interno del servidor.');
  }
};
