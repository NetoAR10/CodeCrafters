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
            // Add logo with smaller size and additional vertical spacing
            doc.image(logoPath, 50, 25, { width: 100 }); 
        }

        // Move down to create space between logo and content
        doc.moveDown(2);

        doc.fontSize(18).text('Materias Enero - Junio 2024', { align: 'center' }).moveDown(0.5);
        doc.fontSize(12).text('CARGA DE MATERIAS', { align: 'center' }).moveDown(1);

        const tablaInicioY = doc.y + 30; // Adjust starting Y position

        const tablaInicioX = 50;
        const tablaAnchos = [80, 120, 180, 80, 80]; 

        doc.fontSize(10).text('SEMESTRE', tablaInicioX, tablaInicioY, { width: tablaAnchos[0], align: 'center' });
        doc.text('SELECCIÓN', tablaInicioX + tablaAnchos[0], tablaInicioY, { width: tablaAnchos[1], align: 'center' });
        doc.text('MATERIAS', tablaInicioX + tablaAnchos[0] + tablaAnchos[1], tablaInicioY, { width: tablaAnchos[2], align: 'center' });
        doc.text('CRÉDITOS', tablaInicioX + tablaAnchos[0] + tablaAnchos[1] + tablaAnchos[2], tablaInicioY, { width: tablaAnchos[3], align: 'center' });
        doc.text('COSTO', tablaInicioX + tablaAnchos[0] + tablaAnchos[1] + tablaAnchos[2] + tablaAnchos[3], tablaInicioY, { width: tablaAnchos[4], align: 'center' });
        doc.strokeColor('#000').lineWidth(1).moveTo(tablaInicioX, tablaInicioY + 15).lineTo(550, tablaInicioY + 15).stroke();

        materias.forEach(materia => {
            let y = doc.y;
            doc.fontSize(10);
            doc.text(materia.Ciclo.toString(), tablaInicioX, y, { width: tablaAnchos[0], align: 'center' });
            doc.text('1', tablaInicioX + tablaAnchos[0], y, { width: tablaAnchos[1], align: 'center' });
            doc.text(materia.Nombre_mat, tablaInicioX + tablaAnchos[0] + tablaAnchos[1], y, { width: tablaAnchos[2], align: 'left' });
            doc.text(materia.Creditos.toString(), tablaInicioX + tablaAnchos[0] + tablaAnchos[1] + tablaAnchos[2], y, { width: tablaAnchos[3], align: 'center' });
            doc.text(`$ ${(materia.Precio_credito * materia.Creditos).toFixed(2)}`, tablaInicioX + tablaAnchos[0] + tablaAnchos[1] + tablaAnchos[2] + tablaAnchos[3], y, { width: tablaAnchos[4], align: 'right' });
            doc.moveDown();
        });

        doc.moveDown(1); // Add more space before payment plan section

        doc.fontSize(12).text('PLAN DE PAGOS', { align: 'center', underline: true }).moveDown(0.5);

        const tablaPagos = [
            ['Fecha límite', 'Monto a pagar'],
            ...pagos.map((pago) => [
                pago.Fecha_limite ? pago.Fecha_limite.toISOString().slice(0, 10) : '',
                `$ ${pago.Total_deuda.toFixed(2)}`,
            ]),
        ];

        const columnaAnchoPagos = [150, 150];
        tablaPosY = doc.y;

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