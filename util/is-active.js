module.exports = (request, response, next) => {
    
    let isActive = false;
    if(request.session.active == 1){
        isActive = true;
    }

    if (isActive) {
        next();
    }

    else {
        return response.redirect('/user/login');
    }
}