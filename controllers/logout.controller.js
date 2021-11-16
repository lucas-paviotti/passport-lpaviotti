const renderLogout = async (req, res) => {
    res.render('logout', { nombre: req.session.user });
    req.logout();
}

module.exports = {
    renderLogout
}