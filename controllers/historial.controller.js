// historial.controller.js
const pool = require('../util/database');

async function obtenerDatosDePagos(userID, userRole) {
    try {
        let query;
        let params = [];

        if (userRole === 'administrador') {
            query = "SELECT `IDPago`, `IDUsuario`, `Cant_pagada`, `Fecha_de_pago`, `Metodo`, `Banco`, `Nota` FROM `pago`";
        } else if (userRole === 'alumno') {
            query = "SELECT `IDPago`, `IDUsuario`, `Cant_pagada`, `Fecha_de_pago`, `Metodo`, `Banco`, `Nota` FROM `pago` WHERE `IDUsuario` = ?";
            params.push(userID); // UserID from session or a verified source
        } else {
            throw new Error("Acceso no autorizado");
        }

        const [rows] = await pool.query(query, params);
        return rows;
    } catch (error) {
        console.error("Error al consultar la base de datos: ", error);
        throw error;
    }
}

exports.mostrarHistorialPagoTodos = async (req, res) => {
    try {
        const userRole = req.session.usuario.role;
        if (userRole !== 'administrador') {
            throw new Error("Acceso no autorizado");
        }

        const paymentsData = await obtenerDatosDePagos(null, userRole);
        const [users] = await pool.query("SELECT `IDUsuario`, `Nombre` FROM `usuario`");

        res.render('historialPago', {
            pageTitle: 'Historial de Todos los Pagos',
            payments: paymentsData,
            users: users,
            csrfToken: req.csrfToken()
        });
    } catch (error) {
        console.error("Error al mostrar el historial de pagos para todos: ", error);
        res.status(500).render('error', {
            pageTitle: 'Error',
            error: error
        });
    }
};

exports.mostrarHistorialPagoPropio = async (req, res) => {
    try {
        const userID = req.session.usuario.IDUsuario;
        const userRole = req.session.usuario.role;
        const paymentsData = await obtenerDatosDePagos(userID, userRole);

        res.render('historialPago', {
            pageTitle: 'Tu Historial de Pagos',
            payments: paymentsData,
            csrfToken: req.csrfToken()
        });
    } catch (error) {
        console.error("Error al mostrar el historial de pagos propio: ", error);
        res.status(500).render('error', {
            pageTitle: 'Error',
            error: error
        });
    }
};
