module.exports = (request, response, next) => {

    let canModifyUser = false;
    for(let privilegio of request.session.permisos) {
        if(privilegio.actividades == 'modificar usuario') {
            canModifyUser = true;
        }
    }

    if(canModifyUser) {
        next();

    } else {
        return response.redirect('user/login');
    }
}