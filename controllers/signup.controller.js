const renderSignup = async (req, res) => {
    if (req.session.user) {
        res.redirect('/')
    } else {
        res.render('signup');
    }
}

module.exports = {
    renderSignup
}