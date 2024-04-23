const db = require('../util/database');

class Pago {
    constructor({ IDUsuario, IDDeuda, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota }) {
        this.IDUsuario = IDUsuario;
        this.IDDeuda = IDDeuda;
        this.Cant_pagada = Cant_pagada;
        this.Fecha_de_pago = Fecha_de_pago;
        this.Metodo = Metodo;
        this.Banco = Banco;
        this.Nota = Nota;
    }

    static async insert(pago) {
        const query = `
            INSERT INTO pago (IDUsuario, IDDeuda, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            pago.IDUsuario,
            pago.IDDeuda,
            pago.Cant_pagada,
            pago.Fecha_de_pago,
            pago.Metodo,
            pago.Banco,
            pago.Nota,
        ];

        try {
            await db.execute(query, values); // Ejecutar la consulta SQL
        } catch (error) {
            console.error("Error al insertar pago:", error);
            throw error; // Propagar el error para que el controlador lo maneje
        }
    }
}

module.exports = Pago;
