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

        const [materias] = await db.execute(`
    SELECT DISTINCT
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
        u.Correo_electronico = ? AND
        m.IDMateriaEXT IS NOT NULL
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

        const [cicloActivo] = await db.execute(`
            SELECT
                Ciclo,
                Fecha_Inicio,
                Fecha_Fin,
                Precio_credito
            FROM
                cicloescolar
            WHERE
                Ciclo_activo = 1
        `, [correoUsuario]); 

        const { Ciclo, Fecha_Inicio, Precio_credito } = cicloActivo[0];
        const inicioCiclo = new Date(Fecha_Inicio);

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

        doc.moveDown(1); 

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



/*
exports.descargarFichaPagoPersonal = async (req, res) => {
    try {
        const correoUsuario = req.session.correo;

        const materias = [
            { Nombre_mat: "Taller de diseño", Creditos: 7, Costo: 4200.00 },
            { Nombre_mat: "Confección de prendas infantiles", Creditos: 5, Costo: 3000.00 },
            { Nombre_mat: "Taller para representación", Creditos: 6, Costo: 3600.00 },
            { Nombre_mat: "Confección de representación", Creditos: 9, Costo: 5400.00 },
            { Nombre_mat: "Diseño de diseño", Creditos: 8, Costo: 4800.00 },
            { Nombre_mat: "Fundamentos para prendas masculinas", Creditos: 8, Costo: 4800.00 },
            { Nombre_mat: "Diseño de diseño", Creditos: 5, Costo: 3000.00 },
            { Nombre_mat: "Teoría para joyería", Creditos: 9, Costo: 5400.00 },
            { Nombre_mat: "Teoría de representación", Creditos: 9, Costo: 5400.00 },
            { Nombre_mat: "Teoría para mercadotecnia", Creditos: 8, Costo: 4800.00 },
            { Nombre_mat: "Confección para prendas básicas", Creditos: 6, Costo: 3600.00 },
            { Nombre_mat: "Fundamentos para textiles", Creditos: 9, Costo: 5400.00 },            
        ];

        const costoPorCredito = 600;

        const totalCosto = materias.reduce((total, materia) => total + materia.Costo, 0);
        const totalCreditos = 81;

        const doc = new PDFDocument({ size: 'A4', margin: 50 });

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename="ficha_pago_${correoUsuario}.pdf"`);

        doc.pipe(res);

        const logoPath = path.join(__dirname, '..', 'public', 'VIADISENOLOGO2.PNG');
        if (fs.existsSync(logoPath)) {
            doc.image(logoPath, 50, 25, { width: 100 }); 
        }

        doc.moveDown(2);

        doc.fontSize(18).text('Materias Enero - Junio 2024', { align: 'center' }).moveDown(0.5);
        doc.fontSize(12).text('CARGA DE MATERIAS', { align: 'center' }).moveDown(1);

        const tablaInicioY = doc.y + 30; 
        const tablaInicioX = 50;
        const tablaAnchos = [120, 180, 80, 80]; 

        doc.fontSize(10).text('MATERIAS', tablaInicioX, tablaInicioY, { width: tablaAnchos[0], align: 'center' });
        doc.text('CRÉDITOS', tablaInicioX + tablaAnchos[0], tablaInicioY, { width: tablaAnchos[1], align: 'center' });
        doc.text('COSTO', tablaInicioX + tablaAnchos[0] + tablaAnchos[1], tablaInicioY, { width: tablaAnchos[2], align: 'center' });
        doc.strokeColor('#000').lineWidth(1).moveTo(tablaInicioX, tablaInicioY + 15).lineTo(550, tablaInicioY + 15).stroke();

        const materiasUnicas = {};

        materias.forEach(materia => {
            materiasUnicas[materia.Nombre_mat] = materia;
        });

        Object.values(materiasUnicas).forEach(materia => {
            let y = doc.y;
            doc.fontSize(10);
            doc.text(materia.Nombre_mat, tablaInicioX, y, { width: tablaAnchos[0], align: 'left' });
            doc.text(materia.Creditos.toString(), tablaInicioX + tablaAnchos[0], y, { width: tablaAnchos[1], align: 'center' });
            doc.text(`$ ${materia.Costo.toFixed(2)}`, tablaInicioX + tablaAnchos[0] + tablaAnchos[1], y, { width: tablaAnchos[2], align: 'right' });
            doc.moveDown();
        });

        doc.moveDown(1);
        doc.fontSize(12).text(`Costo por crédito: $${costoPorCredito.toFixed(2)}`, { align: 'left' });
        doc.fontSize(12).text(`Total de créditos: ${totalCreditos}`, { align: 'left' });

        doc.moveDown(1);

        const pagoMensual = totalCosto / 6;

        doc.fontSize(12).text('PLAN DE PAGOS (6 meses)', { align: 'left', underline: true }).moveDown(0.5);
        let fechaPago = new Date(); // Iniciar en la fecha actual
        for (let i = 1; i <= 6; i++) {
            doc.text(`Mes ${i}: $ ${pagoMensual.toFixed(2)} - Fecha límite: ${fechaPago.toISOString().slice(0, 10)}`, { align: 'left' }).moveDown(0.5);
            fechaPago.setMonth(fechaPago.getMonth() + 1); // Incrementar mes
        }

        doc.fontSize(12).text('PAGO DE CONTADO', { align: 'left', underline: true }).moveDown(0.5);
        doc.text(`Total: $ ${totalCosto.toFixed(2)}`, { align: 'left' }).moveDown(0.5);

        doc.end(); 
    } catch (error) {
        console.error('Error al generar la ficha de pago personal:', error);
        res.status(500).send('Error al generar la ficha de pago personal');
    }
};

*/