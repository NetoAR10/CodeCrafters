const db = require('../util/database');

module.exports = class CSV {
    static async insertUser(user) {
        try {
            return await db.execute(
                'INSERT INTO usuario (Nombre, Correo_electronico, Contrasena) VALUES (?, ?, ?)',
                [user.Nombre, user.Correo_electronico, user.Contrasena]
            );
        } catch (error) {
            console.error(error);
        }
    }
};
