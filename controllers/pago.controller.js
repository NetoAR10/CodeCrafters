const PDFDocument = require('pdfkit');
const db = require('../util/database');

exports.getPaymentHistory = (req, res) => {
    const userID = parseInt(req.params.userID, 10); 
    db.execute('SELECT * FROM pago WHERE IDUsuario = ?', [userID])
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
    const userID = parseInt(req.params.userID, 10); 
    console.log("UserID para descargar historial:", userID);

    db.execute('SELECT * FROM pago WHERE IDUsuario = ?', [userID])
        .then(([rows]) => {
            console.log("Filas obtenidas:", rows);

            if (rows.length > 0) {
                const doc = new PDFDocument();
                const filename = `Historial_Pagos_${userID}.pdf`;

                res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
                res.setHeader('Content-Type', 'application/pdf');

                doc.pipe(res);

                doc.fontSize(20).text('Historial de Pagos', { align: 'center' });
                doc.moveDown();

                rows.forEach(pago => {
                    doc.fontSize(12)
                       .text(`ID Pago: ${pago.IDPago}`)
                       .text(`ID Usuario: ${pago.IDUsuario}`)
                       .text(`Cantidad Pagada: $${parseFloat(pago.Cant_pagada).toFixed(2)}`) 
                       .text(`Fecha de Pago: ${new Date(pago.Fecha_de_pago).toISOString().split('T')[0]}`) 
                       .text(`Método: ${pago.Metodo}`)
                       .moveDown();
                });

                doc.end();
            } else {
                res.send('No hay registros de pago para este usuario.');
            }
        })
        .catch(err => {
            console.error('Error generando el historial de pagos:', err);
            res.status(500).send('Error generando el historial de pagos');
        });
};
