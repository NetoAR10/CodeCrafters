const db = require('../util/database');

class deuda {
    constructor(IDUsuario, Total_deuda, Plan_pago, Concepto, Mes) {
        this.IDUsuario = IDUsuario || null;
        this.Total_deuda = Total_deuda || null;
        this.Plan_pago = Plan_pago || null;
        this.Concepto = Concepto || null;
        this.Mes = Mes || null;
    }

    save() {
        return db.execute(
            'INSERT INTO deuda (IDUsuario, Total_deuda, Plan_pago, Concepto, Mes) VALUES (?, ?, ?, ?, ?)',
            [this.IDUsuario, this.Total_deuda, this.Plan_pago, this.Concepto, this.Mes]
        );
    }
    
    static fetchAll(){
	return db.execute('SELECT * FROM deuda');

    }
}

module.exports = deuda;
