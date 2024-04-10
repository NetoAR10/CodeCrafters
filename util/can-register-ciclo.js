module.exports = (request, response, next) => {

    let canRegisterCiclo = false;
    for(let permiso of request.session.permisos) {
        if(permiso.Actividades == 'registrar ciclo') {
            canRegisterCiclo = true;
        }
    }

    if(canRegisterCiclo) {
        next();

    } else {
        return response.redirect('user/login');
    }
}