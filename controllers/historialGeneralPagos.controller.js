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

exports.downloadPDFHistorialPagos = async (request, response) => {
    try {
        const [rows] = await HistorialPago.fetchAll();

        // Crear un nuevo documento PDF
        const doc = new PDFDocument();
        const filePath = path.join(__dirname, '..', 'public', 'historial_pagos.pdf'); // Ruta donde se guardará el PDF

        // Encabezado del PDF
        doc.fontSize(18).text('Historial de Pagos', { align: 'center' }).moveDown();

        // Contenido del PDF con los datos de la base de datos
        rows.forEach(row => {
            doc.fontSize(12).text(`Mes: ${row.Mes}`);
            // Agregar otros campos según necesites
            doc.moveDown();
        });

        // Guardar el PDF en el servidor
        doc.pipe(fs.createWriteStream(filePath));
        doc.end();

        // Enviar el archivo PDF al cliente como respuesta
        response.download(filePath, 'historial_pagos.pdf', (err) => {
            if (err) {
                console.error('Error al descargar el archivo PDF:', err);
                response.status(500).send('Error al descargar el archivo PDF');
            }
            // Eliminar el archivo del servidor después de descargarlo
            fs.unlinkSync(filePath);
        });

    } catch (error) {
        console.error('Error fetching payment history:', error);
        response.status(500).send('Error al obtener el historial de pagos');
    }
};
