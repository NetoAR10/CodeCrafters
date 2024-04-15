module.exports = (req, res, next) => {
    if (req.session && req.session.user && req.session.user.role === 'Admin') {
        return next();
    } else {
        return res.status(403).send('No tienes permiso para cargar archivos CSV');
    }
};
