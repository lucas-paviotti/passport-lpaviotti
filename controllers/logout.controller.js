const renderLogout = async (req, res) => {
    if (req.isAuthenticated()) {
        res.render('logout', { nombre: req.user.username });
        req.logout();
    } else {
        res.redirect('/login');
    }
}

module.exports = {
    renderLogout
}