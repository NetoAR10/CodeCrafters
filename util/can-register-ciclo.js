module.exports = (request, response, next) => {

    let canRegisterCiclo = false;
    for(let permiso of request.session.permisos) {
        if(permiso.actividades == 'registrar ciclo') {
            canRegisterCiclo = true;
        }
    }

    if(canRegisterCiclo) {
        next();

    } else {
        return response.redirect('user/login');
    }
}