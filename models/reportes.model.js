const db = require('../util/database');
const mysql = require('mysql2');

module.exports = {
    // Obtener el total de deuda por usuario
    getTotalDebtByUser: function(userID) {
        return db.execute(`
            SELECT SUM(Total_deuda) AS TotalDeuda
            FROM deuda
            WHERE IDUsuario = ?
        `, [userID]);
    },

    // Obtener los pagos realizados por un usuario
    getPaymentsByUser: function(userID) {
        return db.execute(`
            SELECT * FROM pago
            WHERE IDUsuario = ?
        `, [userID]);
    },

    // Obtener el detalle de materias inscritas por ciclo escolar para un usuario
    getSubjectsByUserAndCycle: function(userID, cycleID) {
        return db.execute(`
            SELECT materias.Nombre_mat, materias.Creditos
            FROM pertenece
            JOIN materias ON pertenece.IDMateria = materias.IDMateria
            WHERE pertenece.IDUsuario = ? AND pertenece.IDCiclo = ?
        `, [userID, cycleID]);
    },

    // Agrega más funciones según sea necesario
};