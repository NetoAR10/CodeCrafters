// can-upload-csv.js
module.exports = (req, res, next) => {
    // Verificar que el usuario está logueado y que tiene el rol de administrador
    if (req.session.user && req.session.user.role === 'admin') {
        next();
    } else {
        res.status(403).send('Acceso denegado. Necesitas privilegios de administrador para acceder a esta función.');
    }
};
