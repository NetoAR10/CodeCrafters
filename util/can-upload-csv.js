module.exports = (req, res, next) => {
    if (req.session.user && req.session.user.role === 'admin') {
        next();
    } else {
        res.status(403).send('Acceso denegado. Necesitas privilegios de administrador para acceder a esta función.');
    }
};
