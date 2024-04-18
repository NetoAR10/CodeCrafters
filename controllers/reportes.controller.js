const ReportsModel = require('../models/reportes.model');

exports.getReportData = (req, res) => {
  const reports = [
    { date: 'January', amount: 65 },
    { date: 'February', amount: 59 },
    { date: 'March', amount: 80 },
    { date: 'April', amount: 81 },
    { date: 'May', amount: 56 },
    { date: 'June', amount: 55 }
  ];
  res.json(reports);
};

exports.renderReportPage = (req, res) => {
  res.render('reportes');
};

