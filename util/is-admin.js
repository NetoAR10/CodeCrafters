module.exports = (request, response, next) => {

    let isAdmin = false
    if(request.session.roles = 'Administrador') {
        isAdmin = true;
    }

    if(isAdmin) {
        next();
    }
    

}