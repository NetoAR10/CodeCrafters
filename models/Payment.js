// models/Payment.js

const db = require('../util/database.js');

function insertPayment(data, callback) {
  const sql = `INSERT INTO pagos (IDUsuario, IDDeuda, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota) VALUES ?`;
  db.query(sql, [data.map(item => [item.IDUsuario, item.IDDeuda, item.Cant_pagada, item.Fecha_de_pago, item.Metodo, item.Banco, item.Nota])], function(err, result) {
    if (err) return callback(err);
    callback(null, result);
  });
}

module.exports = {
  insertPayment
};



/*
//csv.model.js
const db = require('../util/database');

module.exports = class Pago {
    constructor(pago) {
        this.IDUsuario = pago.IDUsuario;
        this.IDDeuda = pago.IDDeuda;
        this.Cant_pagada = pago.Cant_pagada;
        this.Fecha_de_pago = pago.Fecha_de_pago;
        this.Metodo = pago.Metodo;
        this.Banco = pago.Banco;
        this.Nota = pago.Nota;
    }

    async insertPago() {
        try {
            const [result, ] = await db.execute(
                'INSERT INTO pago (IDUsuario, IDDeuda, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [this.IDUsuario, this.IDDeuda, this.Cant_pagada, this.Fecha_de_pago, this.Metodo, this.Banco, this.Nota]
            );
            return result; // Devolver el resultado de la inserción, incluido el ID del registro insertado, si es necesario
        } catch (error) {
            console.error("Error al insertar el pago:", error);
            throw error; // Rethrowing el error permite un manejo más flexible en niveles superiores
        }
    }   
};
*/
