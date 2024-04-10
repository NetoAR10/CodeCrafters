module.exports = (request, response, next) => {

    let canModifyFicha = false;
    for(let privilegio of request.session.permisos) {
        if(privilegio.actividades == 'modificar ficha') {
            canModifyFicha = true;
        }
    }

    if(canModifyFicha) {
        next();

    } else {
        return response.redirect('user/login');
    }
}