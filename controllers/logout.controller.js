const renderLogout = async (req, res) => {
    if (req.session.user) {
        res.render('logout', { nombre: req.session.user });
        req.session.destroy();
    } else {
        res.redirect('/login')
    }
}

module.exports = {
    renderLogout
}