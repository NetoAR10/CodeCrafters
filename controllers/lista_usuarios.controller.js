const ListaUsuario = require('../models/lista_usuarios.model');

exports.get_listUsers = (request, response, next) => {
    ListaUsuario.getVariosRol()
    .then(([rolesUser, fieldData]) => {
        const lista = rolesUser[0];
        response.render('usuarios', {
            usuariosDB: rolesUser,
            nombre: request.session.nombre,
            matricula: request.session.matricula,
            correo: request.session.correo,
            beca: request.session.beca,
            rolUser: lista.Tipo_Rol,
            permisos: request.session.permisos,
            rol: request.session.roles,

        })
        console.log(lista.Tipo_Rol);
    })
}

exports.get_buscar = (request, response, next) => {
    ListaUsuario.search(request.params.valor_busqueda)
    .then(([rows, fieldData]) => {
        return response.status(200).json({rows: rows})
    })
}