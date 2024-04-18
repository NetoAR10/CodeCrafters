const ListaUsuario = require('../models/pagos_de_alumnos.model');

exports.get_listUsers = (request, response, next) => {
    ListaUsuario.getVariosRol()
    .then(([rolesUser, fieldData]) => {
        const lista = rolesUser[0];
        response.render('pagos_de_alumnos', {
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

exports.getHistorialDePagos = (request, response, next) => {
    console.log('Controlador getHistorialDePagos invocado.');
    const Correo_electronico = request.params.id; // Aquí capturas el ID del usuario desde el parámetro de la URL

    ListaUsuario.historialDePagos(Correo_electronico)
    .then(([data, fieldData]) => {
        response.render('historial_pagos', { // 'historial_pagos' es el nombre de tu vista EJS para mostrar el historial
            pagos: data,
            nombre: request.session.nombre || '',
            // Puedes pasar más datos a la vista si es necesario
        });
    })
    .catch(error => {
        console.log(error);
        response.status(500).send("Ocurrió un error al recuperar el historial de pagos");
    });
};

