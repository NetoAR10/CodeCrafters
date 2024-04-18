const db = require('../util/database');

class deuda {
    constructor(Matricula, Total_deuda, Plan_pago, Concepto, Mes) {
        this.Matricula = Matricula || null;
        this.Total_deuda = Total_deuda || null;
        this.Plan_pago = Plan_pago || null;
        this.Concepto = Concepto || null;
        this.Mes = Mes || null;
    }

     async save() {
        const IDUsuario = await this.getUserIdFromMatricula(this.Matricula);       
	return db.execute(
            'INSERT INTO deuda (IDUsuario, Total_deuda, Plan_pago, Concepto, Mes) VALUES (?, ?, ?, ?, ?)',
            [IDUsuario, this.Total_deuda, this.Plan_pago, this.Concepto, this.Mes]
        );
    }
    
    async getUserIdFromMatricula(Matricula) {
        const [user] = await db.execute('SELECT IDUsuario FROM usuario WHERE Matricula = ?', [Matricula]);
        return user[0].IDUsuario;
    }
    static fetchAll(){
	return db.execute(
	    `SELECT usuario.IDUsuario, usuario.Nombre, usuario.Matricula, 
             deuda.IDDeuda, deuda.Total_deuda, deuda.Plan_pago, deuda.Concepto, deuda.Mes, deuda.IDCiclo
             FROM usuario
             JOIN deuda ON usuario.IDUsuario = deuda.IDUsuario
	     ORDER BY deuda.IDDeuda DESC
             LIMIT 10;`
	);

    }
}

module.exports = deuda;
