module.exports = (request, response, next) => {

    let canViewHistorial = false;
    for(let privilegio of request.session.permisos) {
        if(privilegio.actividades == 'ver historial propio') {
            canViewHistorial = true;
        }
    }

    if(canViewHistorial) {
        next();

    } else {
        return response.redirect('user/login');
    }
}