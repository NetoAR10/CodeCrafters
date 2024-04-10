const db = require("../util/database");

const ReportsModel = require('../models/reportes.model');

exports.getReporteDeudas = async (req, res, next) => {
    try {
        const userID = req.params.userID; // Asumiendo que recibimos el ID del usuario como parámetro
        const totalDeuda = await ReporteModel.getTotalDebtByUser(userID);
        const pagos = await ReporteModel.getPaymentsByUser(userID);

        res.render('reportes', {
            pageTitle: 'Reporte de Deudas',
            totalDeuda: totalDeuda[0][0].TotalDeuda,
            pagos: pagos[0]
        });
    } catch (error) {
        console.log(error);
        res.send("Ocurrió un error al generar el reporte");
    }
};