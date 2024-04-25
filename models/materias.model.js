const db = require('../util/database');

module.exports = class materia {

    constructor(mi_Nombre_mat, mi_Creditos, mi_IDMateriaEXT){
        this.Nombre_mat = mi_Nombre_mat;
        this.Creditos = mi_Creditos;
        this.IDMateriaEXT = mi_IDMateriaEXT;
    }

    save() {
        return db.execute(
            'INSERT INTO materias (Nombre_mat, Creditos, IDMateriaEXT) VALUES (?, ?, ?)',
            [this.Nombre_mat, this.Creditos, this.IDMateriaEXT]
        );
    }

    static fetchAll() {
        return db.execute('SELECT * FROM materias');
    }

    static fetchOne(materia) {
        return db.execute(
            'SELECT * FROM materias WHERE Ciclo=?',
            [materia]
        );
    }

    static fetch(materia) {
        if (materia) {
            return this.fetchOne(materia);
        } else {
            return this.fetchAll();
        }
    }

    static fetchMatricula(correo) {
        return db.execute(
            'SELECT matricula FROM usuario WHERE Correo_electronico=?',
            [correo]
        );
    }

    static fecthCicloEscolar(correo) {
        return db.execute(
            `SELECT C.ciclo, C.IDCicloEXT, C.ciclo_Activo, C.Precio_credito, P.Beca
            FROM cicloescolar C, pertenece 	p, usuario U
            WHERE C.IDCiclo = P.IDCiclo AND U.IDUsuario = P.IDUsuario
            AND U.Correo_electronico = ? `,
            [correo]
        );
    }


    static fetchAllMateriasAlumno(materia) {
        return db.execute(
            `SELECT U.Nombre, U.Matricula, M.Nombre_mat
            FROM usuario U, pertenece P, materias M 
            WHERE U.IDUsuario = P.IDUsuario AND P.IDMateria = M.IDMateria
            AND U.Matricula = ? `,
        [materia]);
    }
}