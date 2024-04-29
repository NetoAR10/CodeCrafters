const db = require('../util/database');
 
module.exports = class HistorialPago {
   static fetchByCorreo(correoUsuario) {
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
           WHERE usuario.Correo_electronico = ?  -- Cambio la columna a Correo_electronico
           ORDER BY pago.Fecha_de_pago, deuda.Mes;
       `, [correoUsuario]);
   }
 
   static fetchFichaPagoByCorreo(correoUsuario) {
       return db.execute(`
           SELECT
               usuario.Nombre,
               usuario.Referencia,
               usuario.Correo_electronico,
               pago.Fecha_de_pago,
               pago.Cant_pagada,
               deuda.Mes,
               deuda.Total_deuda,
               (pago.Cant_pagada / deuda.Total_deuda) AS PorcentajePagado,
               pago.Metodo,
               pago.Banco,
               pago.Nota,
               usuario.IDUsuario
           FROM usuario
           JOIN pago ON usuario.IDUsuario = pago.IDUsuario
           JOIN deuda ON pago.IDDeuda = deuda.IDDeuda
           WHERE usuario.Correo_electronico = ?
           ORDER BY pago.Fecha_de_pago;
       `, [correoUsuario]);
   }
};    