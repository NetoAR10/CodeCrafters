const HistorialPago = require('../models/historialGeneralPagos.model');
const PDFDocument = require('pdfkit');
const path = require('path');
const fs = require('fs');

exports.getHistorialPagosGeneral = async (request, response,next) => {
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

exports.getBuscarHistorial = (request, response, next) => {
    HistorialPago.search(request.params.valor_busqueda || '')
        .then(([rows, fieldData]) => {
            response.status(200).json(rows);
        })
        .catch((error) => {
            console.error('Error en la búsqueda:', error);
            response.status(500).send('Error al realizar la búsqueda');
        });
};

exports.descargarHistorialCSV = async (req, res) => {
    try {
        const [rows] = await HistorialPago.fetchAll();

        const csv = convertirAFormatoCSV(rows);

        res.setHeader('Content-disposition', 'attachment; filename=historial.csv');
        res.set('Content-Type', 'text/csv');
        res.status(200).send(csv);
    } catch (error) {
        console.error('Error al descargar historial como CSV:', error);
        res.status(500).send('Error interno del servidor');
    }
};

function convertirAFormatoCSV(data) {
    if (data.length === 0) {
        return '';
    }

    const csvHeaders = Object.keys(data[0]); 
    const csvRows = [csvHeaders.join(',')]; 

    data.forEach(item => {
        const row = csvHeaders.map(header => {
            const value = item[header];
            return (value !== null && value !== undefined) ? value.toString() : '';
        }).join(',');
        csvRows.push(row);
    });

    return csvRows.join('\n');
}
