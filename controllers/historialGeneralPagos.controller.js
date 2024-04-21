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


exports.descargarFichaPago = async (req, res) => {
    try {
        const datosFicha = await HistorialPago.fetchFichaDatos();
        
        const doc = new PDFDocument();
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="ficha_pago.pdf"');
        
        doc.pipe(res);

        // Formato del PDF
        doc.fontSize(16).text('Ficha de Pago', { align: 'center' });
        doc.moveDown();
        
        doc.fontSize(12);
        doc.text(`SEMESTRE: ${datosFicha.semestre}`);
        doc.text(`SELECCIÓN DE MATERIAS: ${datosFicha.materias}`);
        doc.text(`TOTAL CRÉDITOS: ${datosFicha.creditos}`);
        doc.text(`COSTO POR CRÉDITO: ${datosFicha.costoCredito}`);
        doc.text(`TOTAL COSTO: ${datosFicha.costoTotal}`);

        doc.moveDown();
        doc.fontSize(14).text('Plan de Pagos');
        doc.text(`Fecha límite: ${datosFicha.fechaLimite}`);
        doc.text(`Monto a pagar: ${datosFicha.montoPagar}`);

        doc.end();
    } catch (error) {
        console.error('Error al generar ficha de pago:', error);
        res.status(500).send('Error al generar la ficha de pago');
    }
};
