module.exports = (request, response, next) => {

    let canViewReporte = false;
    for(let privilegio of request.session.permisos) {
        if(privilegio.Actividades == 'ver reporte') {
            canViewReporte = true;
        }
    }

    if(canViewReporte) {
        next();

    } else {
        return response.redirect('user/login');
    }
}