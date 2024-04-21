const PDFDocument = require('pdfkit');
const HistorialPago = require('../models/historialGeneralPagos.model');

exports.getHistorialPagosGeneral = async (request, response) => {
    try {
        const [rows] = await HistorialPago.fetchAll();
        response.render('historialGeneralPagos', {
            pagos: rows,
            correo: request.session.correo,
            permisos: request.session.permisos,
            rol: request.session.roles,
            nombre: request.session.nombre,
        });
    } catch (error) {
        console.error('Error fetching payment history:', error);
        response.status(500).send('Error al obtener el historial de pagos');
    }
};

exports.descargarHistorialPagosPDF = async (request, response) => {
    try {
        const [rows] = await HistorialPago.fetchAll();

        const doc = new PDFDocument();
        response.setHeader('Content-Type', 'application/pdf');
        response.setHeader('Content-Disposition', 'attachment; filename="historial_pagos.pdf"');

        doc.pipe(response);

        // Contenido del PDF
        doc.fontSize(16).text('Historial de Pagos General', { align: 'center' });
        doc.moveDown();

        rows.forEach((pago) => {
            doc.fontSize(12);
            doc.text(`Mes: ${pago.Mes}`);
            doc.text(`Porcentaje Pagado: ${(pago.PorcentajePagado * 100).toFixed(2)}%`);
            doc.text(`Referencia: ${pago.Referencia}`);
            doc.text(`Nombre: ${pago.Nombre}`);
            doc.text(`Fecha de Pago: ${pago.Fecha_de_pago.toISOString().slice(0, 10)}`);
            doc.text(`Cantidad Pagada: ${pago.Cant_pagada.toFixed(2)}`);
            doc.text(`Método: ${pago.Metodo}`);
            doc.text(`Banco: ${pago.Banco}`);
            doc.text(`Nota: ${pago.Nota}`);
            doc.moveDown(); // Espaciado entre secciones
        });

        doc.end(); // Finaliza el PDF
    } catch (error) {
        console.error('Error generando PDF:', error);
        response.status(500).send('Error al generar el PDF');
    }
};

