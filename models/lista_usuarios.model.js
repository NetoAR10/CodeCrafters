const db = require('../util/database');

module.exports = class ListaUsuario {
    
    static getVariosRol() {
        return db.execute(
            `SELECT u.Nombre, u.Matricula, u.Correo_electronico, u.Beca_actual, Tipo_Rol, Alumno_activo 
            FROM usuario u, tiene t, rol r
            WHERE u.IDUsuario = t.IDUsuario
            AND t.IDRol = r.IDRol
            ORDER BY Alumno_activo DESC;`

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
            `SELECT u.Nombre, u.Matricula, u.Correo_electronico, u.Beca_actual, Tipo_Rol, Alumno_activo 
            FROM usuario u, tiene t, rol r
            WHERE u.IDUsuario = t.IDUsuario
            AND t.IDRol = r.IDRol
            AND u.Nombre LIKE ?`,['%' + valor_busqueda + '%']);
    }

    static desactivar(correo){
        return db.execute(`
        UPDATE usuario
        SET Alumno_activo = 0
        WHERE Correo_electronico = ?`,[correo]);
    }

    static reactivar(correo){
        return db.execute(`
        UPDATE usuario
        SET Alumno_activo = 1
        WHERE Correo_electronico = ?`,[correo]);
    }

    static modificarRol(rol_id, IDUsuario){
        return db.execute(
            `
            UPDATE tiene
            SET IDRol = ?
            WHERE IDUsuario = ?`, [rol_id, IDUsuario]);
    }

}



