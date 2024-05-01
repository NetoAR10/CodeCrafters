module.exports = (request, response, next) => {

    let canRequestPago = false;
    for(let privilegio of request.session.permisos) {
        if(privilegio.Actividades == 'pedir pago') {
            canRequestPago = true;
        }
    }

    if(canRequestPago) {
        next();

    } else {
        return response.redirect('user/login');
    }
}