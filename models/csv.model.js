/*

const db = require('../util/database');

module.exports = class Pago {
    constructor(newPago) {
        this.IDUsuario = newPago.IDUsuario;
        this.IDDeuda = newPago.IDDeuda;
        this.Cant_pagada = newPago.Cant_pagada;
        this.Fecha_de_pago = newPago.Fecha_de_pago; 
        this.Metodo = newPago.Metodo;
        this.Banco = newPago.Banco;
        this.Nota = newPago.Nota;
    }

    async insertPago() { 
        try {
            const [result] = await db.execute(
                'INSERT INTO pago (IDUsuario, IDDeuda, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [this.IDUsuario, this.IDDeuda, this.Cant_pagada, this.Fecha_de_pago, this.Metodo, this.Banco, this.Nota]
            );
            return result;
        } catch (error) {
            console.error(error);
            throw error; 
        }
    }

};
*/


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
            return result; 
        } catch (error) {
            console.error("Error al insertar el pago:", error);
            throw error; 
        }
    }   
};
