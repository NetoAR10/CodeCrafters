const db = require('../util/database');

module.exports = class CsvModel {
  static bulkInsert(data) {
    const insertPromises = data.map(item => {
      // Aquí debes adaptar los campos a los de tu base de datos
      const query = `INSERT INTO pago (IDUsuario, IDDeuda, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota, Prorroga) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
      return db.execute(query, [item.IDUsuario, item.IDDeuda, item.Cant_pagada, item.Fecha_de_pago, item.Metodo, item.Banco, item.Nota, item.Prorroga]);
    });

    return Promise.all(insertPromises);
  }
};
