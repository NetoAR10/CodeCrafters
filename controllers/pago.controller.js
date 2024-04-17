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
  db.execute('SELECT * FROM Pago WHERE IDUsuario = ?', [userID])
    .then(([rows]) => {
      const csvData = rows.map(pago => {
        return `${pago.IDPago},${pago.IDUsuario},${pago.Cant_pagada},${pago.Fecha_de_pago},${pago.Metodo}\n`;
      }).join('');

      const filename = `Historial_Pagos_${userID}_${Date.now()}.csv`;

      res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"');
      res.setHeader('Content-type', 'text/csv');
      
      res.send(csvData);
    })
    .catch(err => {
      console.error('Error generando el historial de pagos en CSV:', err);
      res.status(500).send('Error generando el historial de pagos en CSV');
    });
};

