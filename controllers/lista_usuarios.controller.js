const ListaUsuario = require('../models/lista_usuarios.model');

exports.get_listUsers = (request, response, next) => {
    ListaUsuario.getVariosRol()
    .then(([rolesUser, fieldData]) => {
        const lista = rolesUser[0];
        response.render('lista_usuarios', {
            usuariosDB: rolesUser,
            nombre: request.session.nombre || '',
            matricula: request.session.matricula || '',
            correo: request.session.correo || '',
            beca: request.session.beca || '',
            rolUser: lista.Tipo_Rol || '',
            permisos: request.session.permisos || [] ,
            rol: request.session.roles || '',
            csrfToken: request.csrfToken(),

        })
        console.log(lista.Tipo_Rol);
    })
}

exports.get_buscar = (request, response, next) => {
    ListaUsuario.search(request.params.valor_busqueda || '')
    .then(([usuariosDB, fieldData]) => {
        return response.status(200).json({usuariosDB: usuariosDB})
    })
    .catch((error) => {console.log(error)});
}

exports.post_desactivar = (request, response, next) => {
    ListaUsuario.desactivar(request.body.correo)
    .then(() => {
        ListaUsuario.getVariosRol()
        .then(([usuariosDB, fieldData]) => {
            return response.status(200).json({usuariosDB: usuariosDB})
        })
        .catch((error) => {console.log(error)})
    })
    .catch((error) => {console.log(error)});
}

exports.post_reactivar = (request, response, next) => {
    ListaUsuario.reactivar(request.body.correo)
    .then(() => {
        ListaUsuario.getVariosRol()
        .then(([usuariosDB, fieldData]) => {
            return response.status(200).json({usuariosDB: usuariosDB})
        })
        .catch((error) => {console.log(error)})
    })
    .catch((error) => {console.log(error)});
}

// exports.get_modificarRol(request, response, next){
//     ListaUsuario.getVariosRol()
//     .then(([usuariosDB, fieldData]) => {
//         return response.status(200).json({usuariosDB: usuariosDB})
//     })
//     .catch((error) => {console.log(error)})
// }