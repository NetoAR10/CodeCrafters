module.exports = (request, response, next) => {

    let canViewMaterias = false;
    for(let privilegio of request.session.permisos) {
        if(privilegio.Actividades == 'ver materias') {
            canViewMaterias = true;
        }
    }

    if(canViewMaterias) {
        next();

    } else {
        return response.redirect('user/login');
    }
}