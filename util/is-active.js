module.exports = (request, response, next) => {
    
    let isActive = false;
    if(request.session.active == 1){
        isActive = true;
    }

    if (isActive) {
        next();
    }

    else {
        request.session.error = 'Tu cuenta está desactivada. Por favor, contacta al administrador.'
        return response.redirect('/user/login');
    }
}