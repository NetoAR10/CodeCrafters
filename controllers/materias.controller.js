const materia = require('../models/materias.model');
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

        //console.log(cursos);
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
        response.status(500).render('materias', {
            csrfToken: request.csrfToken(),
            error: 'No se pudo cargar la información de las materias.'
        });
    }
};

exports.post_materias = async (request, response, next) => {
    try {
        const cursos = [];
        const cursoKeys = Object.keys(request.body);
        cursoKeys.forEach(key => {
            const match = key.match(/^cursos\[(\d+)\]\[(.+)\]$/);
            if (match) {
                const index = parseInt(match[1]);
                const prop = match[2];
                if (!cursos[index]) cursos[index] = {};
                cursos[index][prop] = request.body[key];
            }
        });

        //console.log(cursos);

        if (!cursos.length) {
            throw new Error('No se recibieron datos de cursos o el formato no es correcto.');
        }

        for (let curso of cursos) {
            //buscar o insertar mi materia en db
            let [results] = await db.execute(
                `SELECT IDMateria FROM materias WHERE IDMateriaEXT = ?`,
                [curso.idMateria]
            )
            let IDMat;
            if(results.length === 0) {
                let nuevo_curso = new materia(
                    curso.nombreMat,
                    curso.creditos,  
                    curso.idMateria
                );
                let [result] = await nuevo_curso.save()
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
