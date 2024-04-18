
module.exports = (req, res, next) => {
    console.log(req.session.user); 

    if (req.session.user) {
        if (req.session.user.role === 'Administrador') {
            next(); 
        } else {
            res.status(403).send('Acceso denegado. Solo los administradores pueden acceder a esta función.');
        }
    } else {
        res.status(403).send('Acceso denegado. Debes iniciar sesión para acceder a esta función.');
    }
};
