const Usuario = require('../models/usuario.model');

exports.get_listUsers = (request, response, next) => {
    Usuario.fetch(request.params.correo)
    .then(([users, fieldData]) => {
            response.render('usuarios', {
                usuariosDB: users,
                correo: request.session.correo || '',
                permisos: request.session.permisos || [],
                rol: request.session.roles || '',
                nombre: request.session.nombre || '',
            });
            console.log(users);
        }
    )
    .catch(error => {
        console.log(error)
    })
}