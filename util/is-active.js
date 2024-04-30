module.exports = (request, response, next) => {
    
    let isActive = false;
    if(request.session.active == 1){
        isActive = true;
    }

    if (isActive) {
        next();
    }

    else {
        request.session.error = 'Error al intentar ingresar a cuenta. Contactar administrador.'
        return response.redirect('/user/login');
    }
}