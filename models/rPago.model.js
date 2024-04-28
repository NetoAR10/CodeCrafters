const db = require('../util/database');

class pago {
    constructor(Referencia, IDDeuda,Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota) {
        this.Referencia = Referencia;
        this.IDDeuda = IDDeuda;
        this.Cant_pagada = Cant_pagada;
        this.Fecha_de_pago = Fecha_de_pago;
        this.Metodo = Metodo;
        this.Banco = Banco;
        this.Nota = Nota;
    }

    async  save() {
	const IDUsuario = await this.getUserIdFromReferencia(this.Referencia);
	return db.execute(
            'INSERT INTO pago (IDUsuario, IDDeuda, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [IDUsuario,this.IDDeuda, this.Cant_pagada, this.Fecha_de_pago, this.Metodo, this.Banco, this.Nota]
        );
    }

    async getUserIdFromReferencia(Referencia) {
        const [user] = await db.execute('SELECT IDUsuario FROM usuario WHERE Referencia = ?', [Referencia]);
        return user[0].IDUsuario;
    }

}

module.exports = pago;
