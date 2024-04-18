const reportesModel = require('../models/reportes.model');

exports.renderChart = async (req, res) => {
  try {
    const datos = await reportesModel.getDatosCiclo();
    res.render('chart', {  
      chartData: JSON.stringify(datos)
    });
  } catch (error) {
    console.error('Error en el controlador:', error.message);
    res.status(500).send('Error al procesar los datos del reporte');
  }
};

