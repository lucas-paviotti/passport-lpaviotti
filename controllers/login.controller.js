const renderLogin = async (req, res) => {
    if (req.session.user) {
        res.redirect('/')
    } else {
        res.render('login');
    }
}

const loginTrue = async (req, res) => {
    let { nombre } = req.body;
    req.session.user = nombre;
    res.status(200).send({ message: "Sesión guardada correctamente." });
}

module.exports = {
    renderLogin,
    loginTrue
}