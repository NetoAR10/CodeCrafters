const Usuario = require('../models/usuario.model');
const bcrypt = require ('bcryptjs');

exports.get_login = (request, response, next) => {
    const error = request.session.error || '';
    request.session.error = '';
    response.render('login', {
        correo: request.session.correo || '',
        registrar: false,
        error: error,
        csrfToken: request.csrfToken(),
    });
};

exports.get_home = (request, response, next) => {
    Usuario.fetch(request.params.correo)
    .then(([users, fieldData]) => {
        response.render('home', {
            usuariosDB: users,
            correo: request.session.correo || '',
        });
    })
    .catch(error => {
        console.log(error)
    })
}

exports.post_login = (request, response, next) => {
    Usuario.fetchOne(request.body.correo)
    .then(([users, fieldData]) => {
        console.log(request.body.correo)
        if(users.length == 1) {
            const user = users[0];
            bcrypt.compare(request.body.password, user.Contrasena)
            .then(doMatch => {
                if (doMatch) {
                    request.session.isLoggedIn = true;
                    request.session.correo = user.Correo_electronico;
                    console.log('Correo:', user.Correo_electronico)
                    return request.session.save(err => {
                        response.redirect('/');
                    });
                } else {
                    request.session.error = 'El correo y/o contraseña son incorrectos.';
                    return response.redirect('/user/login')
                }
            })
            .catch((error) => {
                console.log(user.Contrasena);
                console.log(request.body.password);
                console.log(error);
            });
        }
        else {
            request.session.error = 'El correo y/o contraseña son incorrectos.'
            response.redirect('/user/login');
        }
    })
}

exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/user/login');
    });

}

exports.get_signup = (request, response, next) => {
    const error = request.session.error || '';
    request.session.error = '';
    response.render('login', {
        correo: request.session.correo || '',
        registrar: true,
        error: error,
        csrfToken: request.csrfToken(),

    })
}

exports.post_signup = (request, response, next) => {
    const nuevo_usuario = new Usuario(request.body.correo, request.body.nombre, request.body.matricula, request.body.beca, request.body.ref ,request.body.password, );
    nuevo_usuario.save()
    .then(([rows, fieldData]) => {
        response.redirect('/user/login');
    })
    .catch((error) => {
        console.log(error);
        request.session.error = 'Nombre de usuario inválido.';
        response.redirect('/user/signup');
    })
}