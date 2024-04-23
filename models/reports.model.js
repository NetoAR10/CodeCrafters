const db = require('../util/database');

module.exports = {
  getTotalDeudas: () => {
    return db.execute(
      'SELECT COUNT(*) AS totalDeudas FROM deuda'
    );
  },

  getTotalPagos: () => {
    return db.execute(
      'SELECT COUNT(*) AS totalPagos FROM pago'
    );
  },

  getDeudaTotal: () => {
    return db.execute(
      'SELECT SUM(Total_deuda) AS totalDeuda FROM deuda'
    );
  },

  getPagoTotal: () => {
    return db.execute(
      'SELECT SUM(Cant_pagada) AS totalPago FROM pago'
    );
  },

  getDeudaPorConcepto: () => {
    return db.execute(
      'SELECT Concepto, SUM(Total_deuda) AS totalDeuda FROM deuda GROUP BY Concepto'
    );
  },

  getPagosPorMetodo: () => {
    return db.execute(
      'SELECT Metodo, SUM(Cant_pagada) AS totalPagos FROM pago GROUP BY Metodo'
    );
  },
  getMateriasPorCiclo: () => {
    return db.execute(
      'SELECT c.Ciclo, m.Nombre_mat FROM pertenece p JOIN cicloescolar c ON c.IDCiclo = p.IDCiclo JOIN materias m ON m.IDMateria = p.IDMateria'
    );
  },
  
};


/*
module.exports = {
  getTotalDeudas: (userId) => {
    return db.execute(
      'SELECT COUNT(*) AS totalDeudas FROM deuda WHERE IDUsuario = ?',
      [userId]
    );
  },

  getTotalPagos: (userId) => {
    return db.execute(
      'SELECT COUNT(*) AS totalPagos FROM pago WHERE IDUsuario = ?',
      [userId]
    );
  },

  getDeudaTotal: (userId) => {
    return db.execute(
      'SELECT SUM(Total_deuda) AS totalDeuda FROM deuda WHERE IDUsuario = ?',
      [userId]
    );
  },

  getPagoTotal: (userId) => {
    return db.execute(
      'SELECT SUM(Cant_pagada) AS totalPago FROM pago WHERE IDUsuario = ?',
      [userId]
    );
  },

  getMateriasPorCiclo: (userId) => {
    return db.execute(
      'SELECT c.Ciclo, m.Nombre_mat FROM pertenece p ' +
      'JOIN cicloescolar c ON c.IDCiclo = p.IDCiclo ' +
      'JOIN materias m ON m.IDMateria = p.IDMateria ' +
      'WHERE p.IDUsuario = ?',
      [userId]
    );
  },

  getDeudaPorConcepto: (userId) => {
    return db.execute(
      'SELECT Concepto, SUM(Total_deuda) AS totalDeuda ' +
      'FROM deuda WHERE IDUsuario = ? GROUP BY Concepto',
      [userId]
    );
  },

  getPagosPorMetodo: (userId) => {
    return db.execute(
      'SELECT Metodo, SUM(Cant_pagada) AS totalPagos ' +
      'FROM pago WHERE IDUsuario = ? GROUP BY Metodo',
      [userId]
    );
  },
};

*/