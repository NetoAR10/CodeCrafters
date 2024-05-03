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
  getPagosPorMesYMetodo: () => {
    return db.execute(
      `SELECT DATE_FORMAT(Fecha_de_pago, '%Y-%m') as Mes, Metodo, COUNT(*) as Total
       FROM pago
       WHERE Fecha_de_pago IS NOT NULL
       GROUP BY DATE_FORMAT(Fecha_de_pago, '%Y-%m'), Metodo
       ORDER BY DATE_FORMAT(Fecha_de_pago, '%Y-%m')`
    );
  },
  getPagosPorMes: () => {
    return db.execute(
      `SELECT DATE_FORMAT(Fecha_de_pago, '%Y-%m') AS Mes, SUM(Cant_pagada) AS Total
       FROM pago
       WHERE Fecha_de_pago IS NOT NULL
       GROUP BY DATE_FORMAT(Fecha_de_pago, '%Y-%m')
       ORDER BY DATE_FORMAT(Fecha_de_pago, '%Y-%m')`
    );
  },
  
  
};