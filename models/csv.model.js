// models/pago.model.js
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
            return await db.execute(
                'INSERT INTO pago (IDUsuario, IDDeuda, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [this.IDUsuario, this.IDDeuda, this.Cant_pagada, this.Fecha_de_pago, this.Metodo, this.Banco, this.Nota]
            );
        } catch (error) {
            console.log(error);
        }
    }
};
