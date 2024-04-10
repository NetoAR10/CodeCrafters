const db = require('../util/database');

class Pago {
    constructor(IDUsuario, IDDueda, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota, Prorroga) {
        this.IDUsuario = IDUsuario;
        this.IDDeuda = IDDueda;
        this.Cant_pagada = Cant_pagada;
        this.Fecha_de_pago = Fecha_de_pago;
        this.Metodo = Metodo;
        this.Banco = Banco;
        this.Nota = Nota;
        this.Prorroga = Prorroga;
    }

    // Guardar un nuevo pago en la base de datos
    save() {
        return db.execute(
            'INSERT INTO Pago (IDUsuario, IDDueda, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota, Prorroga) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [this.IDUsuario, this.IDDueda, this.Cant_pagada, this.Fecha_de_Pago, this.Metodo, this.Banco, this.Nota, this.Prorroga]
        );
    }

    // Recuperar todos los pagos de la base de datos
    static fetchAll() {
        return db.execute('SELECT * FROM Pago');
    }
}

module.exports = Pago;

