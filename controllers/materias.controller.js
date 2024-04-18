const materias = require('../models/materias.model');
const adminClient = require('../util/api_clients/adminApiClient');

exports.get_materias = async (request, response, next) => {
    try {
        const userGroups = await adminClient.getUserGroups(13, 100008);
        if (!userGroups || !userGroups.data) {
            throw new Error('No existen user groups para ese usuario.');
        }

        const cursos = userGroups.data.map(userGroup => {
            // Asumimos que cada userGroup tiene una estructura definida y correcta
            const {
                course = {},
                professor = {}
            } = userGroup;

            const {
                id = 13, // valor predeterminado si no se encuentra
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

        console.log(cursos);
        response.render('materias', {
            csrfToken: request.csrfToken(),
            userGroups: userGroups.data,
            cursos: cursos
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
        response.alert('exito')
    } catch (err) {
        console.log(err);
        response.status(500).send('error al mandar datos');
        csrfToken: request.csrfToken();
    }
};

exports.post_contactar_admin = async (request, response, next) => {
    response.render('contactar_admin');
};