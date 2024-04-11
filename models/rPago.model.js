const db = require('../util/database');

class Pago {
    constructor(IDUsuario, IDDueda, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota, Prorroga) {
        this.IDUsuario = IDUsuario || null;
        this.IDDueda = IDDueda || null;
        this.Cant_pagada = Cant_pagada || null;
        this.Fecha_de_pago = Fecha_de_pago || null;
        this.Metodo = Metodo || null;
        this.Banco = Banco || null;
        this.Nota = Nota || null;
        this.Prorroga = Prorroga || null;
    }

    save() {
        return db.execute(
            'INSERT INTO Pago (IDUsuario, IDDueda, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota, Prorroga) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [this.IDUsuario, this.IDDueda, this.Cant_pagada, this.Fecha_de_pago, this.Metodo, this.Banco, this.Nota, this.Prorroga]
        );
    }

    static fetchAll() {
        return db.execute('SELECT * FROM Pago');
    }
}

module.exports = Pago;
