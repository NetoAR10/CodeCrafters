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

    static fetchAllMateriasAlumno(materia) {
        return db.execute(
            `SELECT U.Nombre, U.Matricula, M.Nombre_mat
            FROM usuario U, pertenece P, materias M 
            WHERE U.IDUsuario = P.IDUsuario AND P.IDMateria = M.IDMateria
            AND U.Matricula = ? `,
        [materia]);
    }
}