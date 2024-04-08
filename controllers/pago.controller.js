const PDFDocument = require('pdfkit');
const db = require('../util/database');

exports.getPaymentHistory = (req, res) => {
    const userID = req.params.userID;
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
    const userID = req.params.userID;
    db.execute('SELECT * FROM pago WHERE IDUsuario = ?', [userID]) 
        .then(([rows]) => {
            if(rows.length > 0) {
                const doc = new PDFDocument();
                const filename = `Historial_Pagos_${userID}.pdf`;

                res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
                res.setHeader('Content-Type', 'application/pdf');

                doc.pipe(res);

                doc.fontSize(20).text('Historial de Pagos', { align: 'center' });
                doc.moveDown();

                rows.forEach(pago => {
                    doc.fontSize(12)
                       .text(`ID Pago: ${pago.IDPago}`, { align: 'left' })
                       .text(`ID Usuario: ${pago.IDUsuario}`, { align: 'left' })
                       .text(`Cantidad Pagada: $${pago.Cant_pagada.toFixed(2)}`, { align: 'left' })
                       .text(`Fecha de Pago: ${pago.Fecha_de_pago.toISOString()}`, { align: 'left' }) 
                       .text(`Método: ${pago.Metodo}`, { align: 'left' })
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
