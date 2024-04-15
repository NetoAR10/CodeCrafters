
module.exports = (req, res, next) => {
    const userRole = req.session.usuario.role;
    if (!userRole) {
        return res.redirect('/user/login');
    }
    req.userRole = userRole;
    next();
};
