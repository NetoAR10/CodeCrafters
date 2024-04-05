const db = require('../util/database');

module.exports = class Ciclo_escolar {

    constructor(mi_ciclo, mi_fecha_inicio, mi_fecha_fin, mi_ciclo_activo, mi_precio_credito){
        this.ciclo = mi_ciclo
        this.fecha_inicio = mi_fecha_inicio
        this.fecha_fin = mi_fecha_fin
        this.ciclo_activo = mi_ciclo_activo
        this.mi_precio_credito = mi_precio_credito
    }

    save() {
        console.log(this.ciclo);
        console.log(this.fecha_inicio)
        console.log(this.fecha_fin);
        console.log(this.ciclo_activo);
        console.log(this.mi_precio_credito);
        return db.execute(
            'INSERT INTO cicloescolar (Ciclo, Fecha_Inicio, Fecha_Fin, Ciclo_activo, Precio_credito) VALUES (?, ?, ?, ?, ?)',
            [this.ciclo, this.fecha_inicio, this.fecha_fin, this.ciclo_activo, this.mi_precio_credito]
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

}