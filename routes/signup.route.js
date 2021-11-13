const { Router } = require('express');
const { renderSignup } = require('../controllers/signup.controller');

const signupRouter = Router();

signupRouter.get('/', renderSignup);

module.exports = {
    signupRouter
}