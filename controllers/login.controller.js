const getLogin = async (req, res) => {
    if (req.isAuthenticated()) {
        res.redirect('/')
    } else {
        res.render('login');
    }
}

const postLogin = async (req, res) => {
    res.redirect(307, '/');
}

const failedLogin = async (req, res) => {
    res.render('login-error');
}

module.exports = {
    getLogin,
    postLogin,
    failedLogin
}