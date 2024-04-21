const db = require('../util/database');

module.exports = class HistorialPago {
    static fetchAll() {
        return db.execute(`
            SELECT 
                deuda.Mes, 
                usuario.Referencia,
                usuario.Nombre, 
                pago.Fecha_de_pago, 
                pago.Cant_pagada, 
                deuda.Total_deuda, 
                ROUND((pago.Cant_pagada / deuda.Total_deuda) * 100, 2) AS PorcentajePagado, 
                pago.Metodo, 
                pago.Banco, 
                pago.Nota
            FROM usuario
            JOIN pago ON usuario.IDUsuario = pago.IDUsuario
            JOIN deuda ON pago.IDDeuda = deuda.IDDeuda
            GROUP BY deuda.Mes, pago.IDPago, deuda.Total_deuda
            ORDER BY pago.Fecha_de_pago, deuda.Mes;
        `);
    }

    static fetchFichaDatos() {
        return db.execute(`
            SELECT 
                deuda.Mes, 
                usuario.Referencia,
                usuario.Nombre, 
                usuario.Correo,
                pago.Fecha_de_pago, 
                pago.Cant_pagada, 
                deuda.Total_deuda, 
                ROUND((pago.Cant_pagada / deuda.Total_deuda) * 100, 2) AS PorcentajePagado,
                pago.Metodo,
                pago.Banco,
                pago.Nota,
                105 AS Creditos, 
                572 AS CostoCredito,
                60_060 AS CostoTotal,
                '20 de enero 2024' AS FechaLimite,
                60_060 AS MontoPagar
            FROM usuario
            JOIN pago ON usuario.IDUsuario = pago.IDUsuario
            JOIN deuda ON pago.IDDeuda = deuda.IDDeuda
            ORDER BY pago.Fecha_de_pago;
        `);
    }
};
