const ReportsModel = require('../models/reportes.model');

exports.getReporteDeudas = async (req, res, next) => {
    try {
        const userID = req.params.userID; 
        const totalDeuda = await ReportsModel.getTotalDebtByUser(userID);
        const pagos = await ReportsModel.getPaymentsByUser(userID);

        const pageData = {
            debtDistribution: {
                labels: ["Deuda Total", "Pagos Realizados"],
                data: [totalDeuda[0][0].TotalDeuda, pagos[0].length] 
            }
        };

        res.render('reportes', {
            pageTitle: 'Reporte de Deudas',
            totalDeuda: totalDeuda[0][0].TotalDeuda,
            pagos: pagos[0],
            pageData: pageData 
        });
    } catch (error) {
        console.log(error);
        res.send("Ocurrió un error al generar el reporte");
    }
};
