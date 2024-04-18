const db = require('../util/database');

module.exports = class HistorialPago {
    static fetchAll() {
        return db.execute(`
            SELECT 
                usuario.Nombre, 
                usuario.Matricula, 
                pago.Cant_pagada, 
                pago.Fecha_de_pago, 
                pago.Metodo, 
                pago.Banco, 
                pago.Nota, 
                pago.Prorroga
            FROM usuario
            JOIN pago ON usuario.IDUsuario = pago.IDUsuario;
        `);
    }
};

