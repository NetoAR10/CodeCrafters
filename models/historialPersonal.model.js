const db = require('../util/database');

module.exports = class HistorialPersonal {
    static fetchAll() {
        return db.execute(`
            SELECT 
                deuda.Mes, 
                usuario.Referencia,
                usuario.Nombre, 
                pago.Fecha_de_pago, 
                pago.Cant_pagada, 
                deuda.Total_deuda, 
                (pago.Cant_pagada / deuda.Total_deuda) AS PorcentajePagado, 
                pago.Metodo, 
                pago.Banco, 
                pago.Nota
            FROM usuario
            JOIN pago ON usuario.IDUsuario = pago.IDUsuario
            JOIN deuda ON pago.IDDeuda = deuda.IDDeuda
            GROUP BY deuda.Mes, pago.IDPago, deuda.Total_deuda
            ORDER BY pago.Fecha_de_pago;
        `);
    }

    static fetchByUser(userId) {
        return db.execute(`
            SELECT 
                deuda.Mes, 
                usuario.Referencia,
                usuario.Nombre, 
                pago.Fecha_de_pago, 
                pago.Cant_pagada, 
                deuda.Total_deuda, 
                (pago.Cant_pagada / deuda.Total_deuda) AS PorcentajePagado, 
                pago.Metodo, 
                pago.Banco, 
                pago.Nota
            FROM usuario
            JOIN pago ON usuario.IDUsuario = pago.IDUsuario
            JOIN deuda ON pago.IDDeuda = deuda.IDDeuda
            WHERE usuario.IDUsuario = ?
            GROUP BY deuda.Mes, pago.IDPago, deuda.Total_deuda
            ORDER BY pago.Fecha_de_pago;
        `, [userId]);
    }
};
