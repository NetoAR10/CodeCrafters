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
                (pago.Cant_pagada / deuda.Total_deuda) AS PorcentajePagado, 
                pago.Metodo, 
                pago.Banco, 
                pago.Nota,
		deuda.Concepto,
		deuda.Fecha_limite
            FROM usuario
            JOIN pago ON usuario.IDUsuario = pago.IDUsuario
            JOIN deuda ON pago.IDDeuda = deuda.IDDeuda
            GROUP BY deuda.Mes, pago.IDPago, deuda.Total_deuda
            ORDER BY pago.Fecha_de_pago, deuda.Mes;
        `);
    }

    static search(valor_busqueda) {
        return db.execute(
            `SELECT 
                deuda.Mes, 
                usuario.Referencia,
                usuario.Nombre, 
                pago.Fecha_de_pago, 
                pago.Cant_pagada, 
                deuda.Total_deuda, 
                (pago.Cant_pagada / deuda.Total_deuda) AS PorcentajePagado, 
                pago.Metodo, 
                pago.Banco, 
                pago.Nota,
                deuda.Concepto,
                deuda.Fecha_limite
            FROM usuario
            JOIN pago ON usuario.IDUsuario = pago.IDUsuario
            JOIN deuda ON pago.IDDeuda = deuda.IDDeuda
            WHERE usuario.Nombre LIKE CONCAT('%', ?, '%')
               OR deuda.Mes LIKE CONCAT('%', ?, '%')
            GROUP BY deuda.Mes, pago.IDPago, deuda.Total_deuda
            ORDER BY pago.Fecha_de_pago, deuda.Mes`, 
            ['%' + valor_busqueda + '%', '%' + valor_busqueda + '%']
        );
    }
};
