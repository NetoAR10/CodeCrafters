module.exports = (req, res, next) => {
    let canUploadCSV = false;
    for (let privilegio of req.session.permisos) {
        if (privilegio.actividades === 'cargar csv') {
            canUploadCSV = true;
            break; 
        }
    }

    if (canUploadCSV) {
        next();
    } else {
        return res.redirect('/user/login'); 
    }
};
