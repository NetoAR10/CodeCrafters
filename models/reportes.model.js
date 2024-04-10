const db = require('../util/database');
const mysql = require('mysql2');

module.exports = {
    getTotalDebtByUser: function(userID) {
        return db.execute(`
            SELECT SUM(Total_deuda) AS TotalDeuda
            FROM deuda
            WHERE IDUsuario = ?
        `, [userID]);
    },

    getPaymentsByUser: function(userID) {
        return db.execute(`
            SELECT * FROM pago
            WHERE IDUsuario = ?
        `, [userID]);
    },

    getSubjectsByUserAndCycle: function(userID, cycleID) {
        return db.execute(`
            SELECT materias.Nombre_mat, materias.Creditos
            FROM pertenece
            JOIN materias ON pertenece.IDMateria = materias.IDMateria
            WHERE pertenece.IDUsuario = ? AND pertenece.IDCiclo = ?
        `, [userID, cycleID]);
    },

};