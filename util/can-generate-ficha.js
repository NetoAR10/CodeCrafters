module.exports = (request, response, next) => {

    let canGenerateFicha = false;
    for(let privilegio of request.session.permisos) {
        if(privilegio.Actividades == 'generar ficha') {
            canGenerateFicha = true;
        }
    }

    if(canGenerateFicha) {
        next();

    } else {
        return response.redirect('user/login');
    }
}