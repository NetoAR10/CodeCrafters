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
    const query = "SELECT `Pago`, `%`, `Referencia`, `Nombre`, `Fecha`, `Monto`, `Metodo`, `Banco`, `Nota` FROM `pago`";
    const [rows] = await pool.query(query);
    const fields = ['Pago', '%', 'Referencia', 'Nombre', 'Fecha', 'Monto', 'Metodo', 'Banco', 'Nota'];
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
      console.log(paymentsData); 
      res.render('historialPago', {
        pageTitle: 'Historial de Pagos',
        payments: paymentsData,
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
