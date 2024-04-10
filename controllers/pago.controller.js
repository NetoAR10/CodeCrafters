const PDFDocument = require('pdfkit');

// Función para mostrar el historial de pagos (datos hardcodeados)
exports.getPaymentHistory = (req, res) => {
    const userID = parseInt(req.params.userID, 10);

    // Hardcoded data for testing
    const payments = [
        { IDPago: 1, IDUsuario: 123, Cant_pagada: 50.00, Fecha_de_pago: '2024-04-10', Metodo: 'Tarjeta' },
        { IDPago: 2, IDUsuario: 123, Cant_pagada: 70.00, Fecha_de_pago: '2024-04-05', Metodo: 'Efectivo' },
        { IDPago: 3, IDUsuario: 456, Cant_pagada: 60.00, Fecha_de_pago: '2024-04-15', Metodo: 'Transferencia' },
        { IDPago: 4, IDUsuario: 456, Cant_pagada: 80.00, Fecha_de_pago: '2024-04-20', Metodo: 'Tarjeta' },
        { IDPago: 5, IDUsuario: 789, Cant_pagada: 90.00, Fecha_de_pago: '2024-04-25', Metodo: 'Efectivo' },
        { IDPago: 6, IDUsuario: 789, Cant_pagada: 100.00, Fecha_de_pago: '2024-04-30', Metodo: 'Transferencia' },
        { IDPago: 7, IDUsuario: 1011, Cant_pagada: 110.00, Fecha_de_pago: '2024-05-05', Metodo: 'Tarjeta' },
        { IDPago: 8, IDUsuario: 1011, Cant_pagada: 120.00, Fecha_de_pago: '2024-05-10', Metodo: 'Efectivo' },
        { IDPago: 9, IDUsuario: 1213, Cant_pagada: 130.00, Fecha_de_pago: '2024-05-15', Metodo: 'Transferencia' },
        { IDPago: 10, IDUsuario: 1213, Cant_pagada: 140.00, Fecha_de_pago: '2024-05-20', Metodo: 'Tarjeta' }
    ];

    res.render('historialPago', {
        pageTitle: 'Historial de Pagos',
        payments: payments,
        userID: userID
    });
};

// Función para descargar el historial de pagos como PDF (datos hardcodeados)
exports.downloadPaymentHistory = (req, res) => {
    const userID = parseInt(req.params.userID, 10);

    // Hardcoded data for testing
    const rows = [
        { IDPago: 1, IDUsuario: 123, Cant_pagada: 50.00, Fecha_de_pago: '2024-04-10', Metodo: 'Tarjeta' },
        { IDPago: 2, IDUsuario: 123, Cant_pagada: 70.00, Fecha_de_pago: '2024-04-05', Metodo: 'Efectivo' },
        { IDPago: 3, IDUsuario: 456, Cant_pagada: 60.00, Fecha_de_pago: '2024-04-15', Metodo: 'Transferencia' },
        { IDPago: 4, IDUsuario: 456, Cant_pagada: 80.00, Fecha_de_pago: '2024-04-20', Metodo: 'Tarjeta' },
        { IDPago: 5, IDUsuario: 789, Cant_pagada: 90.00, Fecha_de_pago: '2024-04-25', Metodo: 'Efectivo' },
        { IDPago: 6, IDUsuario: 789, Cant_pagada: 100.00, Fecha_de_pago: '2024-04-30', Metodo: 'Transferencia' },
        { IDPago: 7, IDUsuario: 1011, Cant_pagada: 110.00, Fecha_de_pago: '2024-05-05', Metodo: 'Tarjeta' },
        { IDPago: 8, IDUsuario: 1011, Cant_pagada: 120.00, Fecha_de_pago: '2024-05-10', Metodo: 'Efectivo' },
        { IDPago: 9, IDUsuario: 1213, Cant_pagada: 130.00, Fecha_de_pago: '2024-05-15', Metodo: 'Transferencia' },
        { IDPago: 10, IDUsuario: 1213, Cant_pagada: 140.00, Fecha_de_pago: '2024-05-20', Metodo: 'Tarjeta' }
    ];

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

        // Agregar información adicional al PDF (hardcodeado para demostración)
        doc.fontSize(16).text('Información adicional:', { align: 'center' }).moveDown();
        doc.fontSize(12).text('Este es un documento de prueba generado automáticamente.', { align: 'center' });

        // Agregar más información (hardcodeado para demostración)
        doc.fontSize(14).text('Más información:', { align: 'center' }).moveDown();
        doc.fontSize(10).text('Este es un PDF de prueba generado desde una aplicación web.', { align: 'center' });

        doc.end();
    } else {
        res.send('No hay registros de pago para este usuario.');
    }
};
