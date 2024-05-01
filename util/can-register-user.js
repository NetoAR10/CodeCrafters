module.exports = (request, response, next) => {

    let canRegisterUser = false;
    for(let privilegio of request.session.permisos) {
        if(privilegio.Actividades == 'registrar usuario') {
            canRegisterUser = true;
        }
    }

    if(canRegisterUser) {
        next();

    } else {
        return response.redirect('user/login');
    }
}