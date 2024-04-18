/*const db = require('../util/database');

module.exports = class Pago {
    constructor(pago) {
        this.idUsuario = pago.IDUsuario;
        this.idDeuda = pago.IDDeuda;
        this.cantPagada = pago.CantPagada;
        this.fechaDePago = pago.FechaDePago;
        this.metodo = pago.Metodo;
        this.banco = pago.Banco;
        this.nota = pago.Nota;
        this.prorroga = pago.Prorroga;
    }

    async save() {
        let sql = `INSERT INTO pago (IDUsuario, IDDeuda, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota, Prorroga) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
        return db.execute(sql, [this.idUsuario, this.idDeuda, this.cantPagada, this.fechaDePago, this.metodo, this.banco, this.nota, this.prorroga]);
    }
};
*/

const db = require('../util/database');

module.exports = class CSV {
    static async insertUser(user) {
        try {
            return await db.execute(
                'INSERT INTO usuario (Nombre, Correo_electronico, Contrasena) VALUES (?, ?, ?)',
                [user.Nombre, user.Correo_electronico, user.Contrasena]
            );
        } catch (error) {
            console.error(error);
        }
    }
};
