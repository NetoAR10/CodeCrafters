const materias = require('../models/materias.model');
const adminClient = require('../util/api_clients/adminApiClient');

exports.get_materias = async (request, response, next) => {
    try {
        const userGroups =  await adminClient.getUserGroups(13, 100007);
        if (!userGroups) {
            throw new Error('no existe user groups para ese usuario');
        }
        const cursos = (userGroups.data || []).map((userGroup) => {
            const {
                id = 13,
                name,
                credits
            } = userGroup.course; 
            const {
                name: nombreProfe = '',
            } = userGroup.professor;
            const {
                semester
            } = userGroup.course.plans_courses;
            
            return {
                idMateria: id,
                nombreMat: name,
                creditos: credits,
                nombreProfe,
                semestre: semester
            };
        })
        console.log(cursos);
        return  response.render('materias', {
            csrfToken: request.csrfToken(),
            userGroups: userGroups.data,
            correo: request.session.correo,
            permisos: request.session.permisos,
            rol: request.session.roles,
            nombre: request.session.nombre,
        });
    } catch (err) {
        console.log(err);
        response.render('materias', {
            csrfToken: request.csrfToken(),
            error: err.message
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

