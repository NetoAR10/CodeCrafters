const PDFDocument = require('pdfkit');
const HistorialPago = require('../models/historialPersonal.model');

exports.getHistorialPagosPersonal = async (request, response) => {
    try {
        const correoUsuario = request.session.correo;

        console.log("Correo del usuario:", correoUsuario); // Verifica el correo

        const [rows] = await HistorialPago.fetchByCorreo(correoUsuario);

        console.log("Datos del historial:", rows); // Verifica si se obtuvieron datos

        response.render('historialPersonal', { 
            pagos: rows, 
            correo: request.session.correo,
            permisos: request.session.permisos,
            rol: request.session.roles,
            nombre: request.session.nombre,
        });
    } catch (error) {
        console.error('Error al obtener el historial de pagos del usuario:', error); // Muestra el error
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


exports.descargarFichaPagoPersonal = async (req, res) => {
    try {
        const correoUsuario = req.session.correo;
        const [rows] = await HistorialPago.fetchFichaPagoByCorreo(correoUsuario); // Obtener datos personales

        const doc = new PDFDocument();
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename="ficha_pago_${correoUsuario}.pdf"`);

        doc.pipe(res);

        // Contenido del PDF
        doc.fontSize(16).text('Ficha de Pago Personal', { align: 'center' });
        doc.moveDown();

        // Información personal del usuario
        rows.forEach((pago) => {
            doc.fontSize(12);
            doc.text(`Nombre: ${pago.Nombre}`);
            doc.text(`Referencia: ${pago.Referencia}`);
            doc.text(`Correo: ${pago.Correo_electronico}`);
            doc.text(`Mes: ${pago.Mes}`);
            doc.text(`Fecha de Pago: ${pago.Fecha_de_pago.toISOString().slice(0, 10)}`);
            doc.text(`Cantidad Pagada: ${pago.Cant_pagada.toFixed(2)}`);
            doc.text(`Porcentaje Pagado: ${(pago.PorcentajePagado * 100).toFixed(2)}%`);
            doc.text(`Método: ${pago.Metodo}`);
            doc.text(`Banco: ${pago.Banco}`);
            doc.text(`Nota: ${pago.Nota}`);
            doc.moveDown();
        });

        doc.end(); // Finaliza el PDF
    } catch (error) {
        console.error('Error al generar la ficha de pago personal:', error);
        res.status(500).send('Error al generar la ficha de pago personal');
    }
};
