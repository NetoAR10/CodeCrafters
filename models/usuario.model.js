const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class Usuario {

    constructor(mi_correo, mi_nombre, mi_matricula, mi_beca, mi_ref, mi_password){
        this.correo = mi_correo;
        this.password = mi_password;
        this.nombre = mi_nombre;
        this.matricula = mi_matricula;
        this.beca = mi_beca;
        this.ref = mi_ref;
    }

    save() {
        console.log(this.nombre);
        console.log(this.matricula)
        console.log(this.correo);
        console.log(this.password);
        console.log(this.beca);
        console.log(this.ref);
        return bcrypt.hash(this.password, 12).then((password_cifrado) => {
            return db.execute(
                'INSERT INTO Usuario (Nombre, Matricula, Correo_electronico, Contrasena, Beca_actual, Referencia) VALUES (?, ?, ?, ?, ? , ?)',
                [this.nombre, this.matricula, this.correo, password_cifrado, this.beca, this.ref]
            );
        })
        .catch((error) => {
            console.log(error);
            throw Error('Nombre de usuario ya en uso.')
        })
    }

    static fetchAll() {
        return db.execute('SELECT * FROM Usuario');
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

}