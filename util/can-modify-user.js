module.exports = (request, response, next) => {

    let canModifyUser = false;
    for(let privilegio of request.session.permisos) {
        if(privilegio.Actividades == 'modificar usuario') {
            canModifyUser = true;
        }
    }

    if(canModifyUser) {
        next();

    } else {
        return response.redirect('forbidden');
    }
}