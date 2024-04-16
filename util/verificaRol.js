module.exports = function(requiredRoles) {
    return function(req, res, next) {
        if (!req.session.isLoggedIn) {
            return res.redirect('/user/login');
        }

        let hasRole = false;
        for (let privilegio of req.session.permisos) {
            if (requiredRoles.includes(privilegio.actividades)) {
                hasRole = true;
                break;
            }
        }

        if (hasRole) {
            return next();
        } else {
            return res.status(403).send('No tiene permiso para realizar esta acción');
        }
    };
};
