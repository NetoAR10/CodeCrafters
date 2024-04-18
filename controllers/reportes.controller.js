const ReportsModel = require('../models/reportes.model');

exports.getReportData = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    const reports = await ReportsModel.getReports(new Date(startDate), new Date(endDate));
    console.log(reports);  // Esto te mostrará los datos en la consola del servidor
    res.json(reports);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

exports.renderReportPage = (req, res) => {
  res.render('reportes', {
      pageTitle: 'Reportes'
  });
};
