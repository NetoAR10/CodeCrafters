const db = require('../util/database');

module.exports = class HistorialDeudas {
    static fetchByCorreo(correoUsuario) {
     return db.execute(
         `SELECT usuario.Nombre, usuario.Matricula, 
         deuda.IDDeuda, deuda.Total_deuda, deuda.Concepto, deuda.Mes,  deuda.Fecha_limite
         From usuario
         JOIN deuda ON usuario.IDUsuario = deuda.IDUsuario
         WHERE usuario.Correo_electronico = ?;`,
        [correoUsuario]);
    }
};
