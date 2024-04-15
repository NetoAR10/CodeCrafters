module.exports = (req, res, next) => {
    if (req.session.userRole === 'admin') {
        next();
    } else {
        res.status(403).send("Acceso denegado. Solo los administradores pueden cargar archivos CSV.");
    }
};
