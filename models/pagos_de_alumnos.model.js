const db = require('../util/database');

module.exports = class ListaUsuario {
    
    static getVariosRol() {
        return db.execute(
            `SELECT u.Nombre, u.Matricula, u.Correo_electronico, u.Beca_actual, Tipo_Rol, Alumno_activo 
            FROM usuario u, tiene t, rol r
            WHERE u.IDUsuario = t.IDUsuario
            AND t.IDRol = r.IDRol
            ORDER BY Alumno_activo DESC;`

        )

    }

    static getRol() {
        return db.execute(
            `SELECT u.Nombre, Tipo_Rol 
            FROM usuario u, tiene t, rol r
            WHERE u.IDUsuario = t.IDUsuario
            AND t.IDRol = r.IDRol;
            `
        )
    }

    static search(valor_busqueda) {
        return db.execute(
            `SELECT u.Nombre, u.Matricula, u.Correo_electronico, u.Beca_actual, Tipo_Rol, Alumno_activo 
            FROM usuario u, tiene t, rol r
            WHERE u.IDUsuario = t.IDUsuario
            AND t.IDRol = r.IDRol
            AND u.Nombre LIKE ?`,['%' + valor_busqueda + '%']);
    }
            
    static historialDePagos(Matricula) {
    	return db.execute(
        `SELECT usuario.Nombre, usuario.Referencia,
        pago.Cant_pagada, pago.Fecha_de_pago, pago.Metodo, pago.Banco, pago.Nota,
	deuda.Concepto, deuda.Fecha_limite
        FROM usuario
        JOIN pago ON usuario.IDUsuario = pago.IDUsuario
	JOIN deuda ON pago.IDDeuda = deuda.IDDeuda
        WHERE usuario.Matricula = ?;`,
        [Matricula]
    );


    }
   
    static historialDeDeudas(Matricula){
        return db.execute(
        `SELECT usuario.Nombre, usuario.Referencia, usuario.Matricula, pago.Cant_pagada,
       deuda.IDDeuda, deuda.Total_deuda, deuda.Concepto, deuda.Mes, deuda.Fecha_limite,
       (pago.Cant_pagada / deuda.Total_deuda) AS PorcentajePagado
       FROM usuario
       JOIN deuda ON usuario.IDUsuario = deuda.IDUsuario
       LEFT JOIN pago ON pago.IDDeuda = deuda.IDDeuda
       WHERE usuario.Matricula = ?
       AND (pago.Cant_pagada != deuda.Total_deuda OR pago.Cant_pagada IS NULL)
       ORDER BY deuda.Fecha_limite;`,
       [Matricula]
    );

    }
	  
    static infoDeuda(Matricula){
    return db.execute(`
        SELECT 
	    usuario.Nombre, usuario.Referencia
	    From usuario
            WHERE usuario.Matricula = ?;`,
            [Matricula]
    );
	    
    }

   static infoPago(IDDeuda){
   return db.execute(`
       SELECT 
           usuario.Nombre, usuario.Referencia,
	   deuda.IDDeuda, deuda.Total_deuda, deuda.Concepto, deuda.Mes, deuda.Fecha_limite
	   From usuario
	   Join deuda ON usuario.IDUsuario = deuda.IDUsuario
	   WHERE deuda.IDDeuda = ?;`,
	   [IDDeuda]

   );
   }

   static getMatricula(Nombre){
    return db.execute(`
        SELECT usuario.Matricula
        FROM usuario
        WHERE usuario.Nombre = ?`,[Nombre]);
   }
   
};
