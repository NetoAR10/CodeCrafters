module.exports = function(requiredActivities) {
    return function(req, res, next) {
        if (!req.session.isLoggedIn) {
            return res.redirect('/user/login');
        }

        let hasPermission = req.session.permisos.some(permiso => 
            permiso.Tipo_Rol.toLowerCase() === '2' &&
            requiredActivities.includes(permiso.Actividades.toLowerCase())
        );

        if (hasPermission) {
            return next();
        }

        return res.status(403).send('No tiene permiso para realizar esta acción');
    };
};
