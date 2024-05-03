const db = require('../util/database');

module.exports = class ListaCiclos {
    
    static search(valor_busqueda) {
        return db.execute (
            `SELECT Ciclo, Fecha_inicio, Fecha_fin, Precio_credito, IDCicloEXT, Ciclo_activo
            FORM cicloescolar
            WHERE cicloescolar.Ciclo LIKE ?`, ['%' + valor_busqueda + '%']);
    }
};
