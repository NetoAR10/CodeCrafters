const PDFDocument = require('pdfkit');
const db = require('../util/database');
const Usuario = require('../models/usuario.model');

exports.get_attributes = (request, response, next) => {
  Usuario.fetch(request.params.correo)
    .then(([users, fieldData]) => {
            response.render('historialPago', {
                usuariosDB: users,
                correo: request.session.correo || '',
                permisos: request.session.permisos || [],
                rol: request.session.roles || '',
                nombre: request.session.nombre || '',
            });

        }
    )
    .catch(error => {
        console.log(error)
    })
}

exports.getPaymentHistory = (req, res) => {
  const userID = req.params.userID; 
  db.execute('SELECT * FROM Pago WHERE IDUsuario = ?', [userID])
    .then(([rows]) => {
      res.render('historialPago', { 
        pageTitle: 'Historial de Pagos',
        payments: rows,
        userID: userID
      });
    })
    .catch(err => {
      console.error('Error al obtener el historial de pagos:', err);
      res.status(500).send('Error al obtener el historial de pagos');
    });
};

exports.downloadPaymentHistory = (req, res) => {
  const userID = req.params.userID; 
  console.log('userID recibido:', userID);
  db.execute(`
    SELECT 
      DATE_FORMAT(p.Fecha_de_pago, '%Y-%m') AS Mes, 
      (p.Cant_pagada / d.Total_deuda) AS Porcentaje, 
      u.Referencia, 
      u.Nombre, 
      DATE_FORMAT(p.Fecha_de_pago, '%d-%m-%Y') AS Fecha, 
      p.Cant_pagada AS Monto, 
      p.Metodo, 
      p.Banco, 
      p.Nota 
    FROM Pago p
    JOIN Usuario u ON p.IDUsuario = u.IDUsuario
    LEFT JOIN Deuda d ON p.IDDeuda = d.IDDeuda
    WHERE p.IDUsuario = ?
  `, [userID])
    .then(([results]) => {
      if (results.length === 0) {
        res.status(404).send('No hay registro de este usuario.');
        return;
      }

      let csvContent = "Mes,Porcentaje,Referencia,Nombre,Fecha,Monto,Metodo,Banco,Nota\n";

      results.forEach(row => {
        const rowContent = `${row.Mes},${(row.Porcentaje * 100).toFixed(2)},${row.Referencia},"${row.Nombre}",${row.Fecha},${row.Monto.toFixed(2)},${row.Metodo},${row.Banco || 'N/A'},"${row.Nota.replace(/"/g, '""') || ''}"\n`;
        csvContent += rowContent;
      });

      const filename = `Historial_Pagos_${userID}_${Date.now()}.csv`;

      res.setHeader('Content-disposition', 'attachment; filename=' + filename);
      res.setHeader('Content-type', 'text/csv');
      res.send(csvContent);
    })
    .catch(err => {
      console.error('Error al obtener el historial de pagos:', err);
      res.status(500).send('Error al generar el archivo CSV.');
    });
};
