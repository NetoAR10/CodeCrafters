const db = require('../util/database');

class deuda {
    constructor(Referencia, Total_deuda, Plan_pago, Concepto, Mes, Fecha_limite) {
        this.Referencia = Referencia;
        this.Total_deuda = Total_deuda; 
        this.Concepto = Concepto;
        this.Mes = Mes;
	this.Fecha_limite = Fecha_limite || null;
    }

     async save() {
        const IDUsuario = await this.getUserIdFromReferencia(this.Referencia);       
	return db.execute(
            'INSERT INTO deuda (IDUsuario, Total_deuda, Concepto, Mes, Fecha_limite) VALUES (?, ?, ?, ?, ?)',
            [IDUsuario, this.Total_deuda, this.Concepto, this.Mes, this.Fecha_limite]
        );
    }
    
    async getUserIdFromReferencia(Referencia) {
        const [user] = await db.execute('SELECT IDUsuario FROM usuario WHERE Referencia = ?', [Referencia]);
        return user[0].IDUsuario;
    }

}

module.exports = deuda;
