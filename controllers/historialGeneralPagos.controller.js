const HistorialPago = require('../models/historialGeneralPagos.model');
const PDFDocument = require('pdfkit');
const path = require('path');
const fs = require('fs');

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

exports.get_buscar = (request, response, next) => {
    ListaUsuario.search(request.params.valor_busqueda || '')
    .then(([usuariosDB, fieldData]) => {
        return response.status(200).json({usuariosDB: usuariosDB})
    })
    .catch((error) => {console.log(error)});
}

};

exports.downloadFichaPago = async (request, response) => {
    try {
        // Obtener el ID del pago de la solicitud
        const pagoId = request.params.id;

        // Consultar la base de datos para obtener los detalles del pago
        const [rows] = await HistorialPago.getPaymentDetailsById(pagoId);
        const pago = rows[0]; // Suponiendo que solo hay un pago con ese ID

        // Crear un nuevo documento PDF
        const doc = new PDFDocument();
        const filePath = path.join(__dirname, '..', 'public', 'pdf', `ficha_pago_${pagoId}.pdf`);
        const writeStream = fs.createWriteStream(filePath);

        // Escribir contenido en el PDF
        doc.pipe(writeStream);
        doc.fontSize(16).text('Ficha de Pago', { align: 'center' });
        doc.moveDown();
        doc.fontSize(12).text(`Referencia: ${pago.Referencia}`);
        doc.text(`Nombre: ${pago.Nombre}`);
        doc.text(`Fecha de Pago: ${pago.Fecha_de_pago.toISOString().slice(0, 10)}`);
        doc.text(`Cantidad Pagada: ${pago.Cant_pagada.toFixed(2)}`);
        doc.text(`Método: ${pago.Metodo}`);
        doc.text(`Banco: ${pago.Banco}`);
        doc.text(`Nota: ${pago.Nota}`);
        doc.end();

        // Esperar a que el PDF se haya escrito completamente
        writeStream.on('finish', () => {
            // Enviar el PDF como respuesta al cliente
            response.sendFile(filePath);
        });
    } catch (error) {
        console.error('Error al generar la ficha de pago:', error);
        response.status(500).send('Error al generar la ficha de pago');
    }
};
