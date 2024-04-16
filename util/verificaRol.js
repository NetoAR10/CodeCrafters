module.exports = function(requiredRoles) {
    return function(req, res, next) {
        if (!req.session.isLoggedIn) {
            return res.redirect('/user/login');
        }

        const userRoles = req.session.usuario.roles; 

        const hasRole = requiredRoles.some(role => userRoles.includes(role));

        if (hasRole) {
            return next(); 
        } else {
            res.status(403).send('No tiene permiso para realizar esta acción'); 
        }
    };
};
