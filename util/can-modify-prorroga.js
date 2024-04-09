module.exports = (request, response, next) => {

    let canModifyProrroga = false;
    for(let privilegio of request.session.permisos) {
        if(privilegio.actividades == 'modificar prorroga') {
            canModifyProrroga = true;
        }
    }

    if(canModifyProrroga) {
        next();

    } else {
        return response.redirect('user/login');
    }
}