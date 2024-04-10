// models/reportes.model.js
const db = require('../util/database'); // Asegúrate de que este camino sea correcto.

const ReportesModel = {
    async getFinancialDataByUser(userID) {
        const totalDeudaQuery = 'SELECT SUM(Total_deuda) AS TotalDeuda FROM deuda WHERE IDUsuario = ?';
        const totalPagadoQuery = 'SELECT SUM(Cant_pagada) AS TotalPagado FROM pago WHERE IDUsuario = ?';

        const [[{TotalDeuda}], [{TotalPagado}]] = await Promise.all([
            db.query(totalDeudaQuery, [userID]),
            db.query(totalPagadoQuery, [userID])
        ]);

        return { TotalDeuda, TotalPagado };
    }
};

module.exports = ReportesModel;
