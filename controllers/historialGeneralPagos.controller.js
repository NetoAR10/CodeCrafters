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


exports.descargarHistorialCSV = async (req, res) => {
    try {
        // Obtener historial de la base de datos
        const historial = await Historial.find();

        // Convertir datos a formato CSV
        const csv = convertirAFormatoCSV(historial);

        // Establecer encabezados para la descarga del archivo
        res.setHeader('Content-disposition', 'attachment; filename=historial.csv');
        res.set('Content-Type', 'text/csv');
        res.status(200).send(csv);
    } catch (error) {
        console.error('Error al descargar historial como CSV:', error);
        res.status(500).send('Error interno del servidor');
    }
};

function convertirAFormatoCSV(data) {
    const csvHeaders = ['Campo1', 'Campo2', 'Campo3']; // Reemplaza los nombres de campo con los adecuados
    const csvData = data.map(item => {
        return [item.campo1, item.campo2, item.campo3]; // Reemplaza con los campos de tu modelo
    });
    const csvRows = [csvHeaders.join(','), ...csvData.map(row => row.join(','))];

    return csvRows.join('\n');
}