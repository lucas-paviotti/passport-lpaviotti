const { Router } = require('express');
const { renderLogin, loginTrue } = require('../controllers/login.controller');

const loginRouter = Router();

loginRouter.get('/', renderLogin);
loginRouter.post('/true', loginTrue)

module.exports = {
    loginRouter
}