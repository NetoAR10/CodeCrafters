module.exports = (request, response, next) => {

    let isStudent = false
    if(request.session.roles = 'Alumno') {
        isStudent = true;
    }

    if(isStudent) {
        next();

    } 
    

}