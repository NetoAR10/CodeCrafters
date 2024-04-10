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
        const isAdmin = users.some(user => user.IDRol === 1);

        if(isAdmin) {
            response.render('home_admin', {
                usuariosDB: users,
                correo: request.session.correo || '',
            });
        } else {
            response.render('home', {
                usuariosDB: users,
                correo: request.session.correo || '',
            });
        }
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
                    Usuario.getPermisos(user.Correo_electronico).then(([permisos, fieldData]) => {
                        request.session.isLoggedIn = true;
                        request.session.permisos = permisos;
                        console.log(request.session.permisos);
                        request.session.correo = user.Correo_electronico;
                        console.log('Correo:', user.Correo_electronico)
                        return request.session.save(err => {
                            response.redirect('/');
                        });
                    }).catch((error) => {console.log(error);});
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
        permisos: request.session.permisos || [],
    })
}

exports.post_signup = (request, response, next) => {
    const nuevo_usuario = new Usuario(request.body.correo, request.body.nombre, request.body.matricula, request.body.beca, request.body.ref, request.body.password);

    const confirmar = request.body.confirmpassword;
    if (confirmar !== request.body.password) {
        request.session.error = 'No has confirmado tu contraseña correctamente. Intenta de nuevo.';
        return response.redirect('/user/signup');
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(request.body.password)) {
        request.session.error = 'Tu contraseña debe contener al menos 8 caracteres, un número y una mayúscula.';
        return response.redirect('/user/signup');
    }

    nuevo_usuario.save()
        .then(([rows, fieldData]) => {
            response.redirect('/user/login');
        })
        .catch((error) => {
            console.log(error);
            request.session.error = 'Correo inválido.';
            response.redirect('/user/signup');
        });
};