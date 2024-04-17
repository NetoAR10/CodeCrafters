module.exports = (req, res, next) => {
    if (req.session.user && req.session.user.permissions.some(p => p.Actividades === 'cargar csv')) {
      next();
    } else {
      res.status(403).send('No tiene permisos para cargar archivos CSV.');
    }
  };
  