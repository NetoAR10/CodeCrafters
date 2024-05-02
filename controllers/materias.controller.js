const materia = require('../models/materias.model');
const deuda = require('../models/deuda.model');
const adminClient = require('../util/api_clients/adminApiClient');
const db = require('../util/database');

exports.get_materias = async (request, response, next) => {
    usuario = await materia.fetchInfoUsuario(request.session.correo)
    mat = usuario[0][0].matricula;
    IDUsu = usuario[0][0].IDUsuario;
    beca = usuario[0][0].Beca_actual;

    ciclo = await materia.fecthCicloEscolar()
    nomCiclo = ciclo[0][0].ciclo;
    IDCicExt = ciclo[0][0].IDCicloEXT;
    precioCred = ciclo[0][0].Precio_credito;
    IDCic = ciclo[0][0].IDCiclo;

    try {
        const userGroups = await adminClient.getUserGroups(IDCicExt, mat); 
        if (!userGroups || !userGroups.data) {
            throw new Error('No existen user groups para ese usuario.');
        }

        const cursos = userGroups.data.map(userGroup => {
            const {
                course = {},
                professor = {}
            } = userGroup;

            const {
                id = 13,
                name = '',
                credits = ''
            } = course;

            const {
                name: nombreProfe = ''
            } = professor;

            const semestre = course.plans_courses?.[0]?.semester || 'Desconocido'; // Uso de optional chaining para seguridad

            return {
                idMateria: id,
                nombreMat: name,
                creditos: credits,
                nombreProfe,
                semestre
            };
        });

        // console.log(cursos);
        response.render('materias', {
            csrfToken: request.csrfToken(),
            userGroups: userGroups.data,
            correo: request.session.correo,
            permisos: request.session.permisos,
            rol: request.session.roles,
            nombre: request.session.nombre,
            cursos: cursos,
            cicloActual: nomCiclo,
            costoCred: precioCred,
            beca: beca
        });
    } catch (err) {
        console.error('Error al obtener materias:', err);
    }
};

exports.post_materias = async (request, response, next) => {
    try {
        const usuario = await materia.fetchInfoUsuario(request.session.correo);
        console.log(usuario);
        const IDUsu = usuario[0][0].IDUsuario;
        const beca = usuario[0][0].Beca_actual;
        const referencia = usuario[0][0].referencia;

        const ciclo = await materia.fecthCicloEscolar()
        const IDCic = ciclo[0][0].IDCiclo;
        const precioCredito = ciclo[0][0].Precio_credito;

        async function obtenerFechaFormateada() {
            const fech = await materia.fetchFechaInicioActual();
            const fechaInicio = fech[0][0].Fecha_inicio.toISOString();
          
            // Dividimos la cadena en la 'T' y tomamos solo la parte de la fecha
            const fechaFormateada = fechaInicio.split('T')[0];
          
            return fechaFormateada;
        }

        fechaChida = await obtenerFechaFormateada()
        console.log(fechaChida);

        function extraerMesDeCadena(fecha) {
            // Definimos los nombres de los meses en español
            const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                           "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
            
            // Extraemos el número del mes de la cadena de fecha
            const mesNumero = parseInt(fecha.split('-')[1], 10) - 1; // Obtenemos el índice del mes (0-11)
            
            // Obtenemos el nombre del mes correspondiente
            const nombreMes = meses[mesNumero];
            
            return nombreMes;
        }
          
        mesInicial = extraerMesDeCadena(fechaChida);

        function extraerAñoFecha(fecha) {
            const fechaObj = new Date(fecha);
            return fechaObj.getFullYear();
        }

        añoInicial = extraerAñoFecha(fechaChida);
        console.log(añoInicial);

        function cambiarDiaDeCadena(fechaOriginal, nuevoDia) {
            const partes = fechaOriginal.split('-');
            return `${partes[0]}-${partes[1]}-${nuevoDia.toString().padStart(2, '0')}`; // Asegura dos dígitos para el día
        }
          
        const fechaPrimerPago = cambiarDiaDeCadena(fechaChida, 20);
        console.log(fechaPrimerPago); // Esto también imprimirá "2024-01-20"
          

        const cursos = [];
        const cursoKeys = Object.keys(request.body);
        const paymentOption = request.body.payment_option;
        let totalCreditos = 0;

        cursoKeys.forEach(key => {
            const match = key.match(/^cursos\[(\d+)\]\[(.+)\]$/);
            if (match) {
                const index = parseInt(match[1]);
                const prop = match[2];
                if (!cursos[index]) cursos[index] = {};
                cursos[index][prop] = request.body[key];
                if (prop === 'creditos') {
                    totalCreditos += parseFloat(request.body[key]);
                }
            }
        });

        if (!cursos.length) {
            throw new Error('No se recibieron datos de cursos o el formato no es correcto.');
        }

        // Calcular costoTotal
        let costoTotal = totalCreditos * precioCredito;
        if (beca !== 0) {
            costoTotal *= (1 - beca / 100);
        }

        // Lógica de pagos dependiendo de la opción elegida
        let pagos = [];
        if (paymentOption === 'contado') {
            pagos.push(costoTotal); // Pago único
            let nueva_deuda = new deuda(
                referencia,
                costoTotal,
                "Colegiatura",
                mesInicial,
                fechaPrimerPago
            );
            nueva_deuda.save();
        } else if (paymentOption === 'plazos') {
            const pago1 = costoTotal * 0.23;
            const pagoRestantes = costoTotal * 0.154;
            let nueva_deuda = new deuda(
                referencia,
                pago1,
                "Colegiatura",
                mesInicial,
                fechaPrimerPago
            );
            nueva_deuda.save()
            pagos.push(pago1); // Primer pago
            for (let i = 1; i < 6; i++) { // Se agregan los otros 5 pagos
                const mesesMap = {
                    "Enero": 1,
                    "Febrero": 2,
                    "Marzo": 3,
                    "Abril": 4,
                    "Mayo": 5,
                    "Junio": 6,
                    "Julio": 7,
                    "Agosto": 8,
                    "Septiembre": 9,
                    "Octubre": 10,
                    "Noviembre": 11,
                    "Diciembre": 12
                };
                if (mesInicial === "Enero") {
                    const restoMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"]
                    function mesANumero(nombreMes) {
                        return mesesMap[nombreMes];
                    }
                    function crearFechaLimite(año, nombreMes, dia) {
                        const mesNumero = mesANumero(nombreMes);
                        // Formatear el mes y día para tener dos dígitos
                        const mes = String(mesNumero).padStart(2, '0');
                        const diaFormateado = String(dia).padStart(2, '0');
                        return `${año}-${mes}-${diaFormateado}`;
                    }
                    let fechaLimite = crearFechaLimite(añoInicial, restoMeses[i], 5);
                    console.log(fechaLimite);

                    let nueva_deuda = new deuda(
                        referencia,
                        pagoRestantes,
                        "Colegiatura",
                        restoMeses[i],
                        fechaLimite
                    )
                    nueva_deuda.save();
                }
                if (mesInicial === "Julio") {
                    const restoMeses = ["Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
                    function mesANumero(nombreMes) {
                        return mesesMap[nombreMes];
                    }
                    function crearFechaLimite(año, nombreMes, dia) {
                        const mesNumero = mesANumero(nombreMes);
                        // Formatear el mes y día para tener dos dígitos
                        const mes = String(mesNumero).padStart(2, '0');
                        const diaFormateado = String(dia).padStart(2, '0');
                        return `${año}-${mes}-${diaFormateado}`;
                    }
                    let fechaLimite = crearFechaLimite(añoInicial, restoMeses[i], 5);

                    let nueva_deuda = new deuda(
                        referencia,
                        pagoRestantes,
                        "Colegiatura",
                        restoMeses[i],
                        fechaLimite
                    )
                    console.log(nueva_deuda);
                    nueva_deuda.save();
                }
                
            }
        }



        console.log('Pagos:', pagos);

        // Continuar con la lógica de guardado en DB, etc.
        for (let curso of cursos) {
            let [results] = await db.execute(
                `SELECT IDMateria FROM materias WHERE IDMateriaEXT = ?`,
                [curso.idMateria]
            );
            let IDMat;
            if(results.length === 0) {
                let nuevo_curso = new materia(
                    curso.nombreMat,
                    curso.creditos,  
                    curso.idMateria
                );
                let [result] = await nuevo_curso.save();
                IDMat = result.insertId;
            } else {
                IDMat = results[0].IDMateria;
            }
            //ahora insertar a pertenece 
            await db.execute(
                'INSERT INTO Pertenece (IDMateria, IDCiclo, Beca, IDUsuario) VALUES (?, ?, ?, ?)',
                [IDMat, IDCic, beca, IDUsu]
            );
        }
        response.redirect('/');
    } catch (err) {
        console.error('Error al guardar los cursos:', err);
        response.status(500).send('Error al mandar datos');
    }
};


exports.post_contactar_admin = async (request, response, next) => {
    response.render('contactar_admin');
};

/*

exports.download_materias_pdf = async (request, response) => {
    try {
        const usuario = await materia.fetchInfoUsuario(request.session.correo);
        const IDUsu = usuario[0][0].IDUsuario;
        const beca = usuario[0][0].Beca_actual;
        const referencia = usuario[0][0].referencia;

        const ciclo = await materia.fecthCicloEscolar();
        const IDCic = ciclo[0][0].IDCiclo;
        const precioCredito = ciclo[0][0].Precio_credito;

        const cursos = request.session.cursos;
        const pagos = request.session.pagos;

        if (!cursos || !pagos) {
            return response.status(400).send('Course or payment data is missing from the session.');
        }

        const doc = new PDFDocument();
        const tempDir = path.join(__dirname, 'temp');
        if (!fs.existsSync(tempDir)) {
            fs.mkdirSync(tempDir, { recursive: true });
        }
        const filePath = path.join(tempDir, `cursos_${Date.now()}.pdf`);
        const fileStream = fs.createWriteStream(filePath);
        doc.pipe(fileStream);

        doc.fontSize(18).text('Resumen de Cursos y Pagos', {
            align: 'center'
        });
        doc.moveDown(2);

        cursos.forEach(curso => {
            doc.fontSize(12).text(`Materia: ${curso.nombreMat}`, { continued: true });
            doc.text(` (Créditos: ${curso.creditos})`, { align: 'right' });
            doc.text(`Profesor: ${curso.nombreProfe}`);
            doc.text(`Semestre: ${curso.semestre}`);
            doc.text(`Costo: $${curso.creditos * precioCredito * (1 - beca / 100)}`, {
                underline: true
            });
            doc.moveDown(1);
        });

        doc.fontSize(16).text('Detalles de Pagos', {
            align: 'center'
        });
        doc.moveDown(1);

        pagos.forEach((pago, index) => {
            doc.fontSize(12).text(`Pago ${index + 1}: $${pago}`);
        });

        doc.end();

        fileStream.on('finish', function() {
            response.download(filePath, 'cursos_y_pagos.pdf', (err) => {
                if (err) {
                    response.status(500).send('Error al descargar el archivo');
                }
                fs.unlinkSync(filePath);
            });
        });
    } catch (err) {
        console.error('Error al generar el PDF:', err);
        response.status(500).send('Error al generar el documento PDF');
    }
};
*/