const db = require('../util/database');

class pago {
    constructor(Matricula, Total_deuda, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota, Prorroga) {
        this.Matricula = Matricula; 
	this.Total_deuda = Total_deuda;
        this.Cant_pagada = Cant_pagada;
        this.Fecha_de_pago = Fecha_de_pago;
        this.Metodo = Metodo;
        this.Banco = Banco;
        this.Nota = Nota;
        this.Prorroga = Prorroga || null; ;
    }

    async save() {
        const IDUsuario = await this.getUserIdFromMatricula(this.Matricula); 
        const IDDeuda = await this.getDebtIdFromTotal(this.Total_deuda); 
	return db.execute(
            'INSERT INTO Pago (IDUsuario, IDDeuda, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota, Prorroga) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [IDUsuario, IDDeuda, this.Cant_pagada, this.Fecha_de_pago, this.Metodo, this.Banco, this.Nota, this.Prorroga]
        );
    }

    async getUserIdFromMatricula(Matricula) {
        const [user] = await db.execute('SELECT IDUsuario FROM usuario WHERE Matricula = ?', [Matricula]);
        return user[0].IDUsuario;
    }

    async getDebtIdFromTotal(Total_deuda) {
        const [debt] = await db.execute('SELECT IDDeuda FROM Deuda WHERE Total_deuda = ?', [Total_deuda]);
        return debt[0].IDDeuda;
    }

    static fetchAll() {
        return db.execute(
            `SELECT usuario.Nombre, usuario.Matricula, 
             deuda.Total_deuda, pago.Cant_pagada, pago.Fecha_de_pago, pago.Metodo, 
             pago.Banco, pago.Nota, pago.Prorroga
             FROM usuario
             JOIN pago ON usuario.IDUsuario = pago.IDUsuario
             JOIN deuda ON pago.IDDeuda = deuda.IDDeuda
	     ORDER BY pago.Fecha_de_pago DESC
             LIMIT 10;`
        );
    }
}

module.exports = pago;
