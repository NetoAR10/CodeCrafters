const db = require('../util/database');

module.exports = class ListaUsuario {
    
    static getVariosRol() {
        return db.execute(
            `SELECT u.Nombre, u.Matricula, u.Correo_electronico, u.Beca_actual, Tipo_Rol 
            FROM usuario u, tiene t, rol r
            WHERE u.IDUsuario = t.IDUsuario
            AND t.IDRol = r.IDRol;`

        )

    }

    static getRol() {
        return db.execute(
            `SELECT u.Nombre, Tipo_Rol 
            FROM usuario u, tiene t, rol r
            WHERE u.IDUsuario = t.IDUsuario
            AND t.IDRol = r.IDRol;
            `
        )
    }

    static search(valor_busqueda) {
        return db.execute(
            `SELECT u.Nombre, u.Matricula, u.Correo_electronico, u.Beca_actual, Tipo_Rol 
            FROM usuario u, tiene t, rol r
            WHERE u.IDUsuario = t.IDUsuario
            AND t.IDRol = r.IDRol
            AND u.Nombre LIKE ?`,['%' + valor_busqueda + '%']);
    }

}



