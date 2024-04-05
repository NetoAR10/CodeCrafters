const PDFDocument = require('pdfkit');
const db = require('../util/database');

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
      const doc = new PDFDocument();
      const filename = `Historial_Pagos_${userID}_${Date.now()}.pdf`;

      res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"');
      res.setHeader('Content-type', 'application/pdf');
      
      doc.pipe(res);
      doc.fontSize(12).text('Historial de Pagos', { underline: true });
      
      rows.forEach(pago => {
        doc
          .fontSize(10)
          .text(`Pago ID: ${pago.IDPago} | Usuario ID: ${pago.IDUsuario} | Cantidad Pagada: ${pago.Cant_pagada} | Fecha de Pago: ${pago.Fecha_de_pago} | Método: ${pago.Metodo}`);
      });
      
      doc.end();
    })
    .catch(err => {
      console.error('Error generando el historial de pagos:', err);
      res.status(500).send('Error generando el historial de pagos');
    });
};


