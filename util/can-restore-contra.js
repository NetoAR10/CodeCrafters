module.exports = (request, response, next) => {

    let canRestoreContra = false;
    for(let privilegio of request.session.permisos) {
        if(privilegio.Actividades == 'restaurar contrasena') {
            canRestoreContra = true;
        }
    }

    if(canRestoreContra) {
        next();

    } else {
        return response.redirect('user/login');
    }
}