const HistorialPago = require('../models/historialGeneralPagos.model');

exports.getHistorialPagosGeneral = async (request, response) => {
    try {
        const [rows] = await HistorialPago.fetchAll();
        response.render('historialGeneralPagos', { pagos: rows });
    } catch (error) {
        console.error('Error fetching payment history:', error);
        response.status(500).send('Error al obtener el historial de pagos');
    }
};

