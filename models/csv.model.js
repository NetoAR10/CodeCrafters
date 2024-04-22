const db = require('../util/database');

class Usuario {
    constructor({ nombre, matricula, correo, contrasena, becaActual, referencia, alumnoActivo }) {
        this.nombre = nombre;
        this.matricula = matricula;
        this.correo = correo;
        this.contrasena = contrasena;
        this.becaActual = becaActual;
        this.referencia = referencia;
        this.alumnoActivo = alumnoActivo;
    }

    static async insert(usuario) {
        const query = `
            INSERT INTO usuario (Nombre, Matricula, Correo_electronico, Contrasena, Beca_actual, Referencia, Alumno_activo)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            usuario.nombre,
            usuario.matricula,
            usuario.correo,
            usuario.contrasena,
            usuario.becaActual,
            usuario.referencia,
            usuario.alumnoActivo,
        ];

        try {
            await db.execute(query, values);
        } catch (error) {
            console.error("Error al insertar usuario:", error);
            throw error;
        }
    }
}

module.exports = Usuario;
