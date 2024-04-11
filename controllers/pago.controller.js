// pago.controller.js
const Pago = require('../models/pago.model');
const Usuario = require('../models/usuario.model'); // Asegúrate de que el modelo de Usuario se importa correctamente
const { parse } = require('json2csv');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { promisify } = require('util');

const writeFileAsync = promisify(fs.writeFile);
const unlinkAsync = promisify(fs.unlink);

exports.downloadPaymentHistory = async (req, res) => {
    const userID = parseInt(req.params.userID, 10);

    try {
        // Incluir el modelo de usuario al buscar los pagos
        const payments = await Pago.findAll({
            where: { IDUsuario: userID },
            include: [{ 
                model: Usuario,
                as: 'usuario',
                attributes: ['Nombre'] // Asume que 'Nombre' es un campo en el modelo de Usuario
            }],
            order: [['Fecha_de_pago', 'ASC']]
        });

        if (payments.length > 0) {
            const csvData = payments.map(p => ({
                'Pago': p.fecha_de_pago.toLocaleString('es-ES', { month: 'long' }),
                '%': '100', // Por defecto a 100% si no hay otro cálculo
                'Referencia': p.usuario.Nombre.split(' ').slice(-1) + p.IDPago.toString().padStart(4, '0'), // Construir la referencia a partir del apellido y IDPago
                'Nombre': p.usuario.Nombre,
                'Fecha': p.fecha_de_pago.toLocaleDateString(),
                'Monto': `$${p.Cant_pagada.toFixed(2)}`,
                'Metodo': p.Metodo,
                'Banco': p.Banco,
                'Nota': p.Nota || 'N/A'
            }));

            const fields = ['Pago', '%', 'Referencia', 'Nombre', 'Fecha', 'Monto', 'Metodo', 'Banco', 'Nota'];
            const csv = parse(csvData, { fields });

            const tempDir = os.tmpdir();
            const filePath = path.join(tempDir, `Historial_Pagos_${userID}.csv`);

            await writeFileAsync(filePath, csv);

            res.download(filePath, (err) => {
                if (err) console.error('Error al enviar el archivo:', err);
                unlinkAsync(filePath).catch((err) => console.error('Error al eliminar el archivo temporal:', err));
            });
        } else {
            res.status(404).send('No hay registros de pago para este usuario.');
        }
    } catch (error) {
        console.error('Error al generar el archivo CSV:', error);
        res.status(500).send('Error al procesar la solicitud.');
    }
};
