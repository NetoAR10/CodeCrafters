const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class Usuario {

    constructor(mi_nombre, mi_matricula, mi_correo){
        this.nombre = mi_nombre;
        this.matricula = mi_matricula;
        this.correo = mi_correo;
    }

    save() {
        console.log('Nombre:', this.nombre);
        console.log('Matricula:', this.matricula)
        console.log('Correo:', this.correo);
        return db.execute(
            'INSERT INTO Usuario (Nombre, Matricula, Correo_electronico) VALUES (?, ? , ?)',
            [this.nombre, this.matricula, this.correo]
        )
        .catch((error) => {
            console.log(error);
            throw Error('Error. Corrige.')
        })
    }

    static fetchAll() {
        return db.execute('SELECT * FROM Usuario');
    }

    static fetchAllMails() {
        return db.execute('SELECT Correo_electronico FROM Usuario');
    }

    static fetchOne(correo) {
        return db.execute(
            'SELECT * FROM Usuario WHERE Correo_electronico=?',
            [correo]
        );
    }

    static fetch(correo) {
        if (correo) {
            return this.fetchOne(correo);
        } else {
            return this.fetchAll();
        }
    }

    static getPermisos(correo) {
        return db.execute(
            `SELECT Actividades, Tipo_Rol 
            FROM usuario u, tiene t, rol r, contiene c, privilegios p
            WHERE u.Correo_electronico = ? AND u.IDUsuario = t.IDUsuario
            AND t.IDRol = r.IDRol AND r.IDRol = c.IDRol 
            AND p.IDPrivilegio = c.IDPrivilegio `,
            [correo]);
    }

    static cambiar(new_password, correo) {
        return bcrypt.hash(new_password, 12).then((password_cifrado) => {
            return db.execute(
                `UPDATE usuario 
                SET Contrasena = ? 
                WHERE Correo_electronico = ?`,[password_cifrado, correo]);
        })
    }    
    
    static contrasenaIsNull(){
        return db.execute(
            `SELECT Correo_electronico FROM usuario WHERE Contrasena IS NULL`
        )
    }

    static updateID(matricula, correo, nombre){
        return db.execute(
            `UPDATE usuario 
            SET Matricula = ?
            WHERE Correo_electronico = ? 
            AND Nombre = ?`,[matricula, correo, nombre]);
    }

    static updateName(nombre, correo, matricula){
        return db.execute(
            `UPDATE usuario
            SET Nombre = ?
            WHERE Correo_electronico = ?
            AND Matricula = ?`, [nombre, correo, matricula]);
    }

    static updateEmail(correo, nombre, matricula){
        return db.execute(
            `UPDATE usuario
            SET Correo_electronico = ?
            WHERE Nombre = ?
            AND Matricula = ?`, [correo, nombre, matricula]);
    }
}