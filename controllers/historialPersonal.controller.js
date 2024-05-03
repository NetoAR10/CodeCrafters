const PDFDocument = require('pdfkit');
const HistorialPago = require('../models/historialPersonal.model');
const db = require('../util/database');
const fs = require('fs');
const path = require('path');
//const PDFTable = require('pdfkit-table');
 
exports.getHistorialPagosPersonal = async (request, response) => {
   try {
       const correoUsuario = request.session.correo;
 
       console.log("Correo del usuario:", correoUsuario); 
 
       const [rows] = await HistorialPago.fetchByCorreo(correoUsuario);
 
       console.log("Datos del historial:", rows); 
 
       response.render('historialPersonal', {
           pagos: rows,
           correo: request.session.correo,
           permisos: request.session.permisos,
           rol: request.session.roles,
           nombre: request.session.nombre,
       });
   } catch (error) {
       console.error('Error al obtener el historial de pagos del usuario:', error); 
       response.status(500).send('Error al obtener el historial de pagos');
   }
};


exports.descargarFichaPagoPersonal = async (req, res) => {
    try {
        const correoUsuario = req.session.correo;

        // Consulta SQL optimizada
        const [materias] = await db.execute(`
            SELECT DISTINCT
                m.IDMateria,
                m.Nombre_mat,
                m.Creditos,
                c.Precio_credito
            FROM
                materias m
            JOIN
                pertenece p ON m.IDMateria = p.IDMateria
            JOIN
                cicloescolar c ON p.IDCiclo = c.IDCiclo
            JOIN
                usuario u ON p.IDUsuario = u.IDUsuario
            WHERE
                u.Correo_electronico = ? AND
                m.IDMateriaEXT IS NOT NULL AND
                c.Ciclo_activo = 1
        `, [correoUsuario]);

        // Cálculos de costos
        let costoTotal = materias.reduce((total, materia) => {
            return total + (materia.Creditos * materia.Precio_credito);
        }, 0);
        let pagoMensual = costoTotal / 6;
        let pagoContado = costoTotal;
        let totalCreditos = materias.reduce((total, materia) => total + materia.Creditos, 0);
        let costoPorCredito = materias.length > 0 ? materias[0].Precio_credito : 0;

        pagoMensual = parseFloat(pagoMensual.toFixed(2));
        pagoContado = parseFloat(pagoContado.toFixed(2));

        // Configuración del documento PDF
        const doc = new PDFDocument({ size: 'A4', margin: 50 });
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename="ficha_pago_${correoUsuario}.pdf"`);
        doc.pipe(res);

        // Añadir logo si existe
        const logoPath = path.join(__dirname, '..', 'public', 'VIADISENOLOGO2.PNG');
        if (fs.existsSync(logoPath)) {
            doc.image(logoPath, 50, 25, { width: 100 });
            doc.moveDown(2);
        }

        // Título del documento
        doc.fontSize(18).text('Materias Enero - Junio 2024', { align: 'center' });
        doc.moveDown(1);

        // Tabla de materias
        doc.fontSize(12).text('CARGA DE MATERIAS', { align: 'center' });
        doc.moveDown(0.5);
        materias.forEach(materia => {
            doc.fontSize(10).text(`Semestre 1:  Selección 1  ${materia.Nombre_mat}  ${materia.Creditos} créditos  $${(materia.Creditos * materia.Precio_credito).toFixed(2)}`, {
                align: 'left',
                indent: 40
            });
            doc.moveDown(0.5);
        });

        // Sección del plan de pagos
        doc.fontSize(12).text('PLAN DE PAGOS', { align: 'right', underline: true });
        doc.moveDown(0.5);
        for (let i = 1; i <= 6; i++) {
            let fechaPago = new Date();
            fechaPago.setMonth(fechaPago.getMonth() + i);
            doc.text(`${fechaPago.toISOString().slice(0, 10)}: $ ${pagoMensual}`, { align: 'right' });
            doc.moveDown(0.5);
        }
        doc.moveDown(1);

        // Sección del pago de contado
        doc.fontSize(12).text('PLAN DE PAGO DE CONTADO', { align: 'right', underline: true });
        doc.moveDown(0.5);
        doc.text(`Pago único : $ ${pagoContado}`, { align: 'right' });
        doc.moveDown(0.5);

        // Sumatoria de créditos y costos
        doc.text(`Créditos totales: 43`, { align: 'left' });
        doc.text(`Costo por 1 crédito: $ ${costoPorCredito.toFixed(2)}`, { align: 'left' });
        doc.text(`Costo del semestre: $ ${pagoContado.toFixed(2)}`, { align: 'left' });

        doc.end(); 
    } catch (error) {
        console.error('Error al generar la ficha de pago personal:', error);
        res.status(500).send('Error al generar la ficha de pago personal');
    }
};