const db = require('../util/database');

module.exports = class HistorialDeudas {
    static fetchByCorreo(correoUsuario) {
     return db.execute(
         `SELECT usuario.Nombre, usuario.Matricula, pago.Cant_pagada, 
         deuda.IDDeuda, deuda.Total_deuda, deuda.Concepto, deuda.Mes,  deuda.Fecha_limite, deuda.IDDeuda,
         (pago.Cant_pagada / deuda.Total_deuda) AS PorcentajePagado
         From usuario
         JOIN deuda ON usuario.IDUsuario = deuda.IDUsuario
         LEFT JOIN pago ON pago.IDDeuda = deuda.IDDeuda
         WHERE usuario.Correo_electronico = ?
         AND (pago.Cant_pagada != deuda.Total_deuda OR pago.Cant_pagada IS NULL)
         ORDER BY deuda.Fecha_limite;`,
        [correoUsuario]);
    }
    static addReference(IDDeuda, nuevaReferencia) {
        return db.execute(
            `UPDATE deuda
            SET Referencia_pago = ?
            WHERE IDDeuda = ?;`, [nuevaReferencia, IDDeuda]
        );
    }

    static fetchByReference(referencia) {
        return db.execute(`SELECT IDDeuda FROM deuda WHERE Referencia_pago = ?`, [referencia]);
    }
};
