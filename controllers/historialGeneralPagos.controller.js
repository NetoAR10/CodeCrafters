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

exports.downloadFichaPago = async (req, res) => {
    try {
        const pagoId = req.params.id;
        console.log(`Descargando ficha de pago para ID: ${pagoId}`);

        const [rows] = await HistorialPago.getPaymentDetailsById(pagoId);

        if (rows.length === 0) {
            console.error("Pago no encontrado");
            return res.status(404).send("Pago no encontrado");
        }

        const pago = rows[0];
        const doc = new PDFDocument();
        const filePath = path.join(__dirname, '..', 'public', 'pdf', `ficha_pago_${pagoId}.pdf`);
        const writeStream = fs.createWriteStream(filePath);

        doc.pipe(writeStream);

        // Rellenar el contenido del PDF
        doc.fontSize(16).text('Ficha de Pago', { align: 'center' });
        doc.fontSize(12).text(`Referencia: ${pago.Referencia}`);
        doc.text(`Nombre: ${pago.Nombre}`);
        doc.text(`Fecha de Pago: ${pago.Fecha_de_pago.toISOString().slice(0, 10)}`);
        doc.text(`Cantidad Pagada: ${pago.Cant_pagada.toFixed(2)}`);
        doc.text(`Método: ${pago.Metodo}`);
        doc.text(`Banco: ${pago.Banco}`);
        doc.text(`Nota: ${pago.Nota}`);

        doc.end();

        writeStream.on('finish', () => {
            console.log("PDF generado, enviando...");
            res.sendFile(filePath);
        });

    } catch (error) {
        console.error("Error al generar la ficha de pago:", error);
        res.status(500).send("Error al generar la ficha de pago");
    }
};
