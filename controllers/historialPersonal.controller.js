const PDFDocument = require('pdfkit');
const HistorialPago = require('../models/historialPersonal.model');
const db = require('../util/database');
const fs = require('fs');
const path = require('path');
//const PDFTable = require('pdfkit-table');
 
exports.getHistorialPagosPersonal = async (request, response) => {
   try {
       const correoUsuario = request.session.correo;
 
       console.log("Correo del usuario:", correoUsuario); // Verifica el correo
 
       const [rows] = await HistorialPago.fetchByCorreo(correoUsuario);
 
       console.log("Datos del historial:", rows); // Verifica si se obtuvieron datos
 
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

        const [materias] = await db.execute(`
            SELECT
                m.Nombre_mat,
                m.Creditos,
                c.Ciclo,
                c.Fecha_Inicio,
                c.Fecha_Fin,
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
                u.Correo_electronico = ?
        `, [correoUsuario]);

        const [pagos] = await db.execute(`
            SELECT
                d.Fecha_limite,
                d.Total_deuda
            FROM
                deuda d
            JOIN
                usuario u ON d.IDUsuario = u.IDUsuario
            WHERE
                u.Correo_electronico = ?
        `, [correoUsuario]);

        const doc = new PDFDocument({ size: 'A4', margin: 50 });
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename="ficha_pago_${correoUsuario}.pdf"`);

        doc.pipe(res);

        const logoPath = path.join(__dirname, '..', 'public', 'VIADISENOLOGO2.PNG');
        if (fs.existsSync(logoPath)) {
            doc.image(logoPath, { width: 60, height: 60, align: 'left' });
        }

        doc.moveDown(2); 

        doc.fontSize(18).text('Materias Enero - Junio 2024', { align: 'center', underline: true });
        doc.moveDown(2); 

        doc.moveTo(50, 120).lineTo(550, 120).stroke();
        doc.moveDown(2);

        doc.fontSize(12).text('CARGA DE MATERIAS', { align: 'center', underline: true });
        doc.moveDown(2);

        const tablaMaterias = [
            ['SEMESTRE', 'SELECCIÓN', 'MATERIAS', 'CRÉDITOS', 'COSTO'],
            ...materias.map((materia) => [
                materia.Ciclo.toString(),
                '1',
                materia.Nombre_mat,
                materia.Creditos.toString(),
                `$ ${(materia.Precio_credito * materia.Creditos).toFixed(2)}`, 
            ]),
        ];

        const tablaInicioX = 60;
        const columnaAncho = [80, 80, 140, 100, 100];
        let tablaPosY = doc.y;

        tablaMaterias.forEach((fila) => {
            fila.forEach((texto, index) => {
                const align = index === 4 ? 'right' : 'center';
                doc.text(texto, tablaInicioX + columnaAncho.slice(0, index).reduce((acc, width) => acc + width, 0), tablaPosY, {
                    width: columnaAncho[index],
                    align,
                });
            });
            tablaPosY += 25;
        });

        doc.moveDown(3); 

        doc.fontSize(12).text('PLAN DE PAGOS', tablaInicioX, doc.y, { align: 'center', underline: true });
        doc.moveDown(2);

        const tablaPagos = [
            ['Fecha límite', 'Monto a pagar'],
            ...pagos.map((pago) => [
                pago.Fecha_limite ? pago.Fecha_limite.toISOString().slice(0, 10) : '',
                `$ ${pago.Total_deuda.toFixed(2)}`,
            ]),
        ];

        tablaPosY = doc.y;
        const columnaAnchoPagos = [150, 150];

        tablaPagos.forEach((fila) => {
            fila.forEach((texto, index) => {
                const align = index === 1 ? 'right' : 'center';
                doc.text(texto, tablaInicioX + columnaAnchoPagos.slice(0, index).reduce((acc, width) => acc + width, 0), tablaPosY, {
                    width: columnaAnchoPagos[index],
                    align,
                });
            });
            tablaPosY += 25;
        });

        doc.end(); 
    } catch (error) {
        console.error('Error al generar la ficha de pago personal:', error);
        res.status(500).send('Error al generar la ficha de pago personal');
    }
};
