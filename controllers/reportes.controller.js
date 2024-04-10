// controllers/reportes.controller.js
const ReportesModel = require('../models/reportes.model');

exports.displayReport = async (req, res) => {
    const { userID } = req.params;
    try {
        const financialData = await ReportesModel.getFinancialDataByUser(userID);
        res.render('reportes', { ...financialData });
    } catch (error) {
        console.error('Error fetching financial data:', error);
        res.status(500).send('Internal Server Error');
    }
};
