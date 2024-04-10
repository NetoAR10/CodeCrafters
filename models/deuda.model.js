const db = require('../util/database');

class Deuda {
    constructor(IDUsuario, Total_deuda, Plan_pago, Concepto, Mes) {
        this.IDUsuario = IDUsuario;
        this.Total_deuda = Total_deuda;
        this.Plan_pago = Plan_pago;
        this.Concepto = Concepto;
        this.Mes = Mes;
    }

    save() {
        return db.execute(
            'INSERT INTO Deuda (IDUsuario, Total_deuda, Plan_pago, Concepto, Mes) VALUES (?, ?, ?, ?, ?)',
            [this.IDUsuario, this.Total_deuda, this.Plan_pago, this.Concepto, this.Mes]
        );
    }
}

module.exports = Deuda;
