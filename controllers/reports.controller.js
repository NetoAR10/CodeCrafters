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

    response.render('reporte', {
      totalDeudas: totalDeudas[0]?.totalDeudas || 0,
      totalPagos: totalPagos[0]?.totalPagos || 0,
      totalDeuda: totalDeuda[0]?.totalDeuda || 0,
      totalPago: totalPago[0]?.totalPago || 0,
      materiasPorCiclo,
      deudaPorConcepto,
      pagosPorMetodo,
      isLoggedIn: request.session.isLoggedIn || false,
      privileges: request.session.privileges || [],
      nombre: request.session.nombre || '',
      matricula: request.session.matricula || '',
      correo: request.session.correo || '',
      beca: request.session.beca || '',
      rolUser: request.session.lista?.Tipo_Rol || '', 
      permisos: request.session.permisos || [],
      rol: request.session.roles || '',
      csrfToken: request.csrfToken(),
    });
  } catch (error) {
    console.error('Error obteniendo datos de reporte:', error);
    response.status(500).send('Error interno del servidor.');
  }
};
