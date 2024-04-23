const HistorialPago = require('../models/historialGeneralPagos.model');
const PDFDocument = require('pdfkit');
const path = require('path');
const fs = require('fs');
const os = require('os');

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

exports.get_buscar = (request, response, next) => {
    ListaUsuario.search(request.params.valor_busqueda || '')
    .then(([usuariosDB, fieldData]) => {
        return response.status(200).json({usuariosDB: usuariosDB})
    })
    .catch((error) => {console.log(error)});
};

exports.generatePaymentReceipt = async (request, response) => {
    try {
        const [rows] = await HistorialPago.fetchAll();

        const doc = new PDFDocument();
        
        response.setHeader('Content-Type', 'application/pdf');
        response.setHeader('Content-Disposition', 'attachment; filename=payment_receipt.pdf');

        // Título principal
        doc.fontSize(20).text('Materias Enero - Junio 2024', { align: 'center' });
        doc.moveDown(1);

        // Encabezado de sección
        doc.fontSize(14).text('CARGA DE MATERIAS', { underline: true, align: 'center' });
        doc.moveDown(1);

        // Encabezados de tabla
        doc.fontSize(12).text('SEMESTRE', { continued: true, width: 100, align: 'center' })
            .text('SELECCIÓN', { continued: true, width: 100, align: 'center' })
            .text('MATERIAS', { continued: true, width: 200, align: 'center' })
            .text('CRÉDITOS', { continued: true, width: 100, align: 'center' })
            .text('COSTO', { align: 'center' });

        doc.moveDown(1);

        // Datos de la tabla
        rows.forEach(pago => {
            doc.text(pago.Mes, { continued: true, width: 100 })
               .text(pago.Referencia, { continued: true, width: 100 })
               .text(pago.Nombre, { continued: true, width: 200 })
               .text((pago.PorcentajePagado * 100).toFixed(2), { continued: true, width: 100 })
               .text(pago.Nombre, { align: 'center' });
            doc.moveDown(1);
        });

        // Sección de Plan de Pagos
        doc.moveDown(2);
        doc.fontSize(14).text('PLAN DE PAGOS', { underline: true, align: 'center' });
        doc.moveDown(1);

        // Detalles del plan de pagos
        doc.text('Créditos', { continued: true, width: 100, align: 'center' })
           .text('# Materias', { continued: true, width: 100, align: 'center' })
           .text('Costo por 1 crédito', { continued: true, width: 200, align: 'center' })
           .text('Costo del semestre', { align: 'center' });

        doc.moveDown(1);

        doc.text('15', { continued: true, width: 100, align: 'center' })
           .text('7', { continued: true, width: 100, align: 'center' })
           .text('572.00', { continued: true, width: 200, align: 'center' })
           .text('60,060.00', { align: 'center' });

        doc.end();
        doc.pipe(response);
    } catch (error) {
        console.error('Error generating payment receipt:', error);
        response.status(500).send('Error generating payment receipt');
    }
};
