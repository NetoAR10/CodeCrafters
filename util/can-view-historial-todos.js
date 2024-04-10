module.exports = (request, response, next) => {

    let canViewHistorialTodos = false;
    for(let privilegio of request.session.permisos) {
        if(privilegio.Actividades == 'ver historial todos') {
            canViewHistorialTodos = true;
        }
    }

    if(canViewHistorialTodos) {
        next();

    } else {
        return response.redirect('user/login');
    }
}