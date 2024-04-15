const db = require('../util/database');

class pago {
    constructor(IDUsuario, IDDeuda, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota, Prorroga) {
        this.IDUsuario = IDUsuario || null;
        this.IDDeuda = IDDeuda || null;
        this.Cant_pagada = Cant_pagada || null;
        this.Fecha_de_pago = Fecha_de_pago || null;
        this.Metodo = Metodo || null;
        this.Banco = Banco || null;
        this.Nota = Nota || null;
        this.Prorroga = Prorroga || null;
    }

    save() {
        return db.execute(
            'INSERT INTO Pago (IDUsuario, IDDeuda, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota, Prorroga) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [this.IDUsuario, this.IDDeuda, this.Cant_pagada, this.Fecha_de_pago, this.Metodo, this.Banco, this.Nota, this.Prorroga]
        );
    }

    static fetchAll() {
        return db.execute('SELECT * FROM pago');
    }
}

module.exports = pago;
