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

    }

exports.getBuscarHistorial = (request, response, next) => {
    HistorialPago.search(request.params.valor_busqueda || '')
    .then(([rows, fieldData]) => {
        response.status(200).json(rows);
    })
    .catch((error) => {
        console.error('Error en la búsqueda:', error);
        response.status(500).send('Error al realizar la búsqueda');
    });
}

exports.deletePago = (request, response, next) => {
    const IDPago = request.params.id;
    HistorialPago.delete(IDPago)
        .then(() => {
            response.json({ message: 'Pago eliminado correctamente.' });
        })
        .catch(err => {
            console.error('Error al eliminar el pago:', err);
            response.status(500).json({ message: 'Error al eliminar el pago.' });
        });
};

