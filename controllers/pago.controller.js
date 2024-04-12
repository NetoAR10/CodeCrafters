const pool = require('../util/database');
const { Parser } = require('json2csv');

async function obtenerDatosDePagos() {
    try {
        const [rows] = await pool.query("SELECT `IDPago`, `IDUsuario`, `Cant_pagada`, `Fecha_de_pago`, `Metodo`, `Banco`, `Nota` FROM `pago`");
        return rows;
    } catch (error) {
        console.error("Error al consultar la base de datos: ", error);
        throw error;
    }
}


exports.descargarCsv = async (req, res) => {
  try {
      let query;
      let params = [];

      if (req.userRole === 'administrador') {
          const userId = req.query.userId || '%';
          query = `
              SELECT p.IDPago, p.IDUsuario, u.Nombre, p.Referencia, p.Fecha_de_pago, p.Cant_pagada, p.Metodo, p.Banco, p.Nota 
              FROM pago AS p 
              JOIN usuario AS u ON p.IDUsuario = u.IDUsuario 
              WHERE p.IDUsuario LIKE ?`;
          params.push(userId);
      } else if (req.userRole === 'alumno') {
          const userId = req.session.usuario.IDUsuario;
          query = `
              SELECT p.IDPago, p.IDUsuario, u.Nombre, p.Referencia, p.Fecha_de_pago, p.Cant_pagada, p.Metodo, p.Banco, p.Nota 
              FROM pago AS p 
              JOIN usuario AS u ON p.IDUsuario = u.IDUsuario 
              WHERE p.IDUsuario = ?`;
          params.push(userId);
      } else {
          return res.status(403).send('No autorizado');
      }

      const [rows] = await pool.query(query, params);
      const fields = ['IDPago', 'IDUsuario', 'Nombre', 'Referencia', 'Fecha_de_pago', 'Cant_pagada', 'Metodo', 'Banco', 'Nota'];
      const json2csvParser = new Parser({ fields });
      const csv = json2csvParser.parse(rows);

      res.header('Content-Type', 'text/csv');
      res.attachment('pagos.csv');
      res.send(csv);
  } catch (error) {
      console.error("Error al generar el CSV: ", error);
      res.status(500).send("Error al generar el archivo CSV.");
  }
};


exports.mostrarHistorialPago = async (req, res) => {
  try {
    const paymentsData = await obtenerDatosDePagos();
    let usersData = [];

    if (req.userRole === 'administrador') {
        const [users] = await pool.query("SELECT `IDUsuario`, `Nombre` FROM `usuario`");
        usersData = users;
    }

    res.render('historialPago', {
      pageTitle: 'Historial de Pagos',
      payments: paymentsData,
      userRole: req.userRole, 
      users: usersData, 
      csrfToken: req.csrfToken()
    });
  } catch (error) {
    console.error("Error al mostrar el historial de pagos: ", error);
    res.status(500).render('error', {
      pageTitle: 'Error',
      error: error
    });
  }
};
