const ReportsModel = require('../models/reportes.model');

exports.getReportData = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    const reports = await ReportsModel.getReports(new Date(startDate), new Date(endDate));
    res.json(reports);
  } catch (error) {
    res.status(500).send(error);
  }
};


exports.renderReportPage = (req, res) => {
  res.render('reportes', {
      pageTitle: 'Reportes'
  });
};
