const db = require('../util/database');

class pago {
    constructor(Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota) {
        this.Cant_pagada = Cant_pagada;
        this.Fecha_de_pago = Fecha_de_pago;
        this.Metodo = Metodo;
        this.Banco = Banco;
        this.Nota = Nota;
        this.Prorroga = Prorroga || null; ;
    }

    save() { 
	return db.execute(
            'INSERT INTO Pago (Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota) VALUES (?, ?, ?, ?, ?)',
            [this.Cant_pagada, this.Fecha_de_pago, this.Metodo, this.Banco, this.Nota]
        );
    }

}

module.exports = pago;
