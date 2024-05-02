const PDFDocument = require('pdfkit');
const post_materias = require('./materias.controller');

exports.descargarFichaPagoPersonal = async (req, res) => {
    try {
        const correoUsuario = req.session.correo;
  
        // Datos de materias y pagos
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
  
        // Crear documento PDF
        const doc = new PDFDocument({ size: 'A4', margin: 50 });
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename="ficha_pago_${correoUsuario}.pdf"`);
  
        doc.pipe(res);
  
        // Agregar logo
        const logoPath = path.join(__dirname, '..', 'public', 'VIADISENOLOGO2.PNG');
        if (fs.existsSync(logoPath)) {
            doc.image(logoPath, { width: 60, height: 60, align: 'left' });
        }
  
        doc.moveDown(2); // Espaciado inicial para claridad
  
        doc.fontSize(18).text('Materias Enero - Junio 2024', { align: 'center', underline: true });
        doc.moveDown(2); // Espaciado adicional
  
        // Línea horizontal para separar secciones
        doc.moveTo(50, 120).lineTo(550, 120).stroke(); // Línea de separación
        doc.moveDown(2); // Espaciado después de la línea
  
        // Sección CARGA DE MATERIAS
        doc.fontSize(12).text('CARGA DE MATERIAS', { align: 'center', underline: true });
        doc.moveDown(2);
  
        // Tabla de carga de materias
        const tablaMaterias = [
            ['SEMESTRE', 'SELECCIÓN', 'MATERIAS', 'CRÉDITOS', 'COSTO'],
            ...materias.map((materia) => [
                materia.Ciclo.toString(),
                '1',
                materia.Nombre_mat,
                materia.Creditos.toString(),
                `$ ${materia.Precio_credito.toFixed(2)}`,
            ]),
        ];
  
        // Generar la tabla de carga de materias
        const tablaInicioX = 60; // posición X para el inicio de la tabla
        const columnaAncho = [80, 80, 140, 100, 100]; // anchos de las columnas
        let tablaPosY = doc.y; // posición Y inicial
  
        tablaMaterias.forEach((fila) => {
            fila.forEach((texto, index) => {
                const align = index === 4 ? 'right' : 'center'; // alinear la última columna a la derecha
                doc.text(texto, tablaInicioX + columnaAncho.slice(0, index).reduce((acc, width) => acc + width, 0), tablaPosY, {
                    width: columnaAncho[index],
                    align,
                });
            });
            tablaPosY += 25; // incrementa el espacio entre filas
        });
  
        doc.moveDown(3); // Espacio antes de la sección PLAN DE PAGOS
  
        // Sección PLAN DE PAGOS
        const tituloPlanPagos = 'PLAN DE PAGOS';
        const anchoTituloPlanPagos = doc.widthOfString(tituloPlanPagos); // Calcular el ancho del texto del título
        const posXTituloPlanPagos = (doc.page.width - anchoTituloPlanPagos) / 2; // Calcular la posición X para centrar el título
  
        doc.fontSize(12).text(tituloPlanPagos, posXTituloPlanPagos, doc.y, { align: 'center', underline: true }); // Centrar el título
        doc.moveDown(2);
  
        // Tabla de plan de pagos
        const tablaPagos = [
            ['Fecha límite', 'Monto a pagar'],
            ...pagos.map((pago) => [
                pago.Fecha_limite ? pago.Fecha_limite.toISOString().slice(0, 10) : '',
                `$ ${pago.Total_deuda.toFixed(2)}`,
            ]),
        ];
  
        // Generar la tabla de plan de pagos
        tablaPosY = doc.y; // nueva posición Y para la tabla de pagos
        const columnaAnchoPagos = [150, 150]; // anchos de las columnas de pagos
  
        tablaPagos.forEach((fila) => {
            fila.forEach((texto, index) => {
                const align = index === 1 ? 'right' : 'center'; // alinear la última columna a la derecha
                doc.text(texto, tablaInicioX + columnaAnchoPagos.slice(0, index).reduce((acc, width) => acc + width, 0), tablaPosY, {
                    width: columnaAnchoPagos[index],
                    align,
                });
            });
            tablaPosY += 25; // incrementa el espacio entre filas
        });
  
        doc.end(); // Termina el documento
    } catch (error) {
        console.error('Error al generar la ficha de pago personal:', error);
        res.status(500).send('Error al generar la ficha de pago personal');
    }
 };
  

