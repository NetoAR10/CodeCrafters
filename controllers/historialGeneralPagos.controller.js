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
        // Obtener los datos de pago desde la base de datos
        const [rows] = await HistorialPago.fetchAll();

        // Crear un nuevo documento PDF
        const doc = new PDFDocument();
        
        // Configurar el tipo de contenido y el nombre del archivo en la respuesta
        response.setHeader('Content-Type', 'application/pdf');
        response.setHeader('Content-Disposition', 'attachment; filename=payment_receipt.pdf');

        // Escribir contenido en el PDF
        doc.fontSize(16).text('Payment Receipt', { align: 'center' }).moveDown();

        // Escribir los datos de pago en el PDF
        rows.forEach(pago => {
            doc.text(`Pago: ${pago.Mes}`);
            doc.text(`Porcentaje Pagado: ${(pago.PorcentajePagado * 100).toFixed(2)}%`);
            doc.text(`Referencia: ${pago.Referencia}`);
            doc.text(`Nombre: ${pago.Nombre}`);
            doc.text(`Fecha de Pago: ${pago.Fecha_de_pago.toISOString().slice(0, 10)}`);
            doc.text(`Cantidad Pagada: ${pago.Cant_pagada.toFixed(2)}`);
            doc.text(`Método: ${pago.Metodo}`);
            doc.text(`Banco: ${pago.Banco}`);
            doc.text(`Nota: ${pago.Nota}`);
            doc.moveDown();
        });

        // Finalizar el documento PDF
        doc.end();

        // Enviar el PDF como respuesta
        doc.pipe(response);
    } catch (error) {
        console.error('Error generating payment receipt:', error);
        response.status(500).send('Error generating payment receipt');
    }
};