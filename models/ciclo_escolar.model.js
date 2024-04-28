const db = require('../util/database');

module.exports = class cicloescolar {

    constructor(mi_ciclo, mi_fecha_inicio, mi_fecha_fin, mi_ciclo_activo, mi_precio_credito){
        this.Ciclo = mi_ciclo;
        this.Fecha_Inicio = mi_fecha_inicio;
        this.Fecha_Fin = mi_fecha_fin;
        this.Ciclo_activo = mi_ciclo_activo;
        this.Precio_credito = mi_precio_credito;
    }

    save() {
        if (this.Ciclo_activo == 'on') {
            this.Ciclo_activo = 1;
        } else {
            this.Ciclo_activo = 0
        }

        return db.execute(
            'INSERT INTO cicloescolar (Ciclo, Fecha_Inicio, Fecha_Fin, Ciclo_activo, Precio_credito) VALUES (?, ?, ?, ?, ?)',
            [this.Ciclo, this.Fecha_Inicio, this.Fecha_Fin, this.Ciclo_activo, this.Precio_credito]
        );
    }

    static fetchAll() {
        return db.execute('SELECT * FROM cicloescolar');
    }

    static fetchOne(Ciclo) {
        return db.execute(
            'SELECT * FROM cicloescolar WHERE Ciclo=?',
            [Ciclo]
        );
    }

    static fetch(Ciclo) {
        if (Ciclo) {
            return this.fetchOne(Ciclo);
        } else {
            return this.fetchAll();
        }
    }

    static search(valor_busqueda) {
        return db.execute (
            `SELECT IDCiclo, Ciclo, Fecha_Inicio, Fecha_Fin, Precio_credito, IDCicloEXT, Ciclo_activo
            FROM cicloescolar
            WHERE Ciclo LIKE ?`, ['%' + valor_busqueda + '%']);
    }

    static updateActivo(id, cicloActivo) {
        return db.execute('UPDATE cicloescolar SET Ciclo_activo = ? WHERE IDCiclo = ?', [cicloActivo, id]);
    }

    static fetchAllActive() {
        return db.execute('SELECT * FROM cicloescolar WHERE Ciclo_activo = 1');
    }
}
