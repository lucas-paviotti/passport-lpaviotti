const { Router } = require('express');
const { getLogin, postLogin, failedLogin } = require('../controllers/login.controller');
const { UsuarioModelo } = require('../models/Usuario');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { createHash } = require('../utils/utils');

const loginRouter = Router();

passport.use('login', new LocalStrategy({
        passReqToCallback: true
    },
    (req, username, password, done) => {
        console.log('asd')
        UsuarioModelo.findOne({'username': username}, (err,user) => {
            if (err) {
                return done(err);
            }
            if (!user) {
                console.log('Usuario no encontrado');
                return done(null, false, console.log('Usuario no encontrado'));
            }
            if (!isValidPassword(user, password)) {
                console.log('Invalid password');
                return done(null, false, console.log('Invalid password'));
            }
            return done(null, user);
        })
    }
));

loginRouter.get('/', getLogin);
loginRouter.post('/', passport.authenticate('login', {failureRedirect: '/failed'}), postLogin);
loginRouter.get('/failed', failedLogin);

module.exports = {
    loginRouter
}