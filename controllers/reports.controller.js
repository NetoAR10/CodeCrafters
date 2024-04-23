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

    console.log('Datos para el reporte:', {
      totalDeudas: totalDeudas[0][0], // Acceso al primer elemento
      totalPagos: totalPagos[0][0], // Acceso al primer elemento
      totalDeuda: totalDeuda[0][0], // Acceso al primer elemento
      totalPago: totalPago[0][0], // Acceso al primer elemento
      materiasPorCiclo: materiasPorCiclo[0], // Arreglo completo
      deudaPorConcepto: deudaPorConcepto[0], // Arreglo completo
      pagosPorMetodo: pagosPorMetodo[0], // Arreglo completo
    });

    response.render('reporte', {
      // Ahora utiliza los datos corregidos
      totalDeudas: totalDeudas[0][0]?.totalDeudas || 0,
      totalPagos: totalPagos[0][0]?.totalPagos || 0,
      totalDeuda: totalDeuda[0][0]?.totalDeuda || 0,
      totalPago: totalPago[0][0]?.totalPago || 0,
      materiasPorCiclo: materiasPorCiclo[0] || [],
      deudaPorConcepto: deudaPorConcepto[0] || [],
      pagosPorMetodo: pagosPorMetodo[0] || [],
      // El resto de datos para la vista
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

