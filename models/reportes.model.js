const db = require('../util/database');

exports.getDatosCiclo = async () => {
    try {
      const [rows] = await db.query('SELECT Ciclo, Precio_credito FROM cicloescolar');
      return rows;
    } catch (error) {
      throw error;
    }
  };
